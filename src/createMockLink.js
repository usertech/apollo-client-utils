import { ApolloLink, Observable } from 'apollo-link';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const createMockLink = ({
	defaultOperationDelay = 500,
	operationsDelays = {
		IntrospectionFragmentMatcherQuery: 1200,
	},
	mocks,
	preserveResolvers = true,
	...makeExecutableSchemaParams
}) => {
	// mock link
	const schema = makeExecutableSchema(makeExecutableSchemaParams);
	addMockFunctionsToSchema({ schema, mocks, preserveResolvers });
	const mockLink = new SchemaLink({
		schema,
		context: ({ getContext }) => getContext(),
	});

	// delay link
	const delayLink = new ApolloLink((operation, forward) => {
		const { operationName } = operation;
		const presetOperationDelay = operationsDelays[operationName];
		const operationDelay =
			typeof presetOperationDelay !== 'undefined' ? presetOperationDelay : defaultOperationDelay;
		return new Observable((observer) => {
			let handle;
			// eslint-disable-next-line
			setTimeout(() => {
				handle = forward(operation).subscribe({
					next: observer.next.bind(observer),
					error: observer.error.bind(observer),
					complete: observer.complete.bind(observer),
				});
			}, operationDelay);
			return () => {
				if (handle) handle.unsubscribe();
			};
		});
	});

	return ApolloLink.from([delayLink, mockLink]);
};

export default createMockLink;
