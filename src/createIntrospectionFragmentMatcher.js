import { execute, makePromise } from 'apollo-link';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const introspectionQuery = gql`
	query IntrospectionFragmentMatcherQuery {
		__schema {
			types {
				kind
				name
				possibleTypes {
					name
				}
			}
		}
	}
`;

const createIntrospectionFragmentMatcher = async ({ link }) => {
	const introspectionQueryResult = await makePromise(execute(link, { query: introspectionQuery }));
	const introspectionQueryResultData = {
		__schema: {
			types: introspectionQueryResult.data.__schema.types.filter(
				(type) => type.possibleTypes !== null,
			),
		},
	};

	return new IntrospectionFragmentMatcher({
		introspectionQueryResultData,
	});
};

export default createIntrospectionFragmentMatcher;
