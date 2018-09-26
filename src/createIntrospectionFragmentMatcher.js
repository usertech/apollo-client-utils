import { execute, makePromise } from 'apollo-link';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import IntrospectionFragmentMatcherQuery from './IntrospectionFragmentMatcherQuery.gql';

const createIntrospectionFragmentMatcher = async ({ link }) => {
	const introspectionQueryResult = await makePromise(
		execute(link, { query: IntrospectionFragmentMatcherQuery }),
	);
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
