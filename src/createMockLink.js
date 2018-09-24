import { ApolloLink, Observable } from 'apollo-link';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const createMockLink = ({
	typeDefs,
	resolvers,
	mocks,
	defaultOperationDelay = 500,
	immediateOperations = {},
	operationsDelays = {
		IntrospectionFragmentMatcherQuery: 1200,
	},
}) => {
	// mock link
	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	});
	addMockFunctionsToSchema({ schema, mocks });
	const mockLink = new SchemaLink({
		schema,
		context: ({ getContext }) => getContext(),
	});

	// delay link
	const delayLink = new ApolloLink((operation, forward) => {
		const { operationName } = operation;
		const isOperationImmediate = immediateOperations[operationName];
		const presetOperationDelay = operationsDelays[operationName];
		const operationDelay =
			presetOperationDelay || (isOperationImmediate ? 0 : defaultOperationDelay);
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
