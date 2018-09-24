import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import createIntrospectionFragmentMatcher from './createIntrospectionFragmentMatcher';

const createDefaultApolloClient = async ({ link, useIntrospectionFragmentMatcher = false }) => {
	let cacheOptions = {};
	if (useIntrospectionFragmentMatcher) {
		cacheOptions = {
			...cacheOptions,
			fragmentMatcher: await createIntrospectionFragmentMatcher({ link }),
		};
	}

	const cache = new InMemoryCache(cacheOptions);

	return new ApolloClient({
		link,
		cache,
	});
};

export default createDefaultApolloClient;
