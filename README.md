# `@usertech/apollo-client-utils`

> Work in Progress

This little lib provides simple tools to create typical apollo client instance
without duplicate code in multiple projects. It reduces IntrospectionFragmentMatcher
setup to a matter of just flipping a switch.

## Installation

    $ yarn add usertech/apollo-client-utils#0.0.3

## API

### `createMockLink: ({ ...makeExecutableSchemaParams, ...addMockFunctionsToSchemaParams, defaultOperationDelay: Int, operationsDelays: Map<String, Int> }) => ApolloLink`

#### Arguments

Accepts params of [`makeExecutableSchema`](https://www.apollographql.com/docs/apollo-server/api/graphql-tools.html#makeExecutableSchema)
plus arguments of [`addMockFunctionsToSchema`](https://www.apollographql.com/docs/apollo-server/api/graphql-tools.html#addMockFunctionsToSchema)
from `graphql-tools` and additional params:

- `defaultOperationDelay` - default query/mutation delay in milliseconds
- `operationsDelays` - map of queries/mutations delays in milliseconds, keyed by operation name

### `createDefaultApolloClient: ({ link: ApolloLink, useIntrospectionFragmentMatcher: Boolean }) => ApolloClient`

#### Arguments

- `link` - Apollo link to use for queries/mutations
- `useIntrospectionFragmentMatcher` - If true, set up IntrospectionFragmentMatcher initialized with schema information fetched from `link`

## Example

```javascript
import { ApolloProvider } from 'react-apollo';
import Async from 'react-promise';
import { createDefaultApolloClient, createMockLink } from '@usertech/apollo-client-utils';

import typeDefs from './schema.graphql';
import resolvers from './mocks/resolvers.js';
import mocks from './mocks/mocks.js';

const createApolloClient = () => {
	const link = createMockLink({
		typeDefs,
		resolvers,
		mocks,
		defaultOperationDelay: 300,
		operationsDelays: {
			DashboardScreenQuery: 600,
			IntrospectionFragmentMatcherQuery: 500, // Built-in query for introspection data
		},
	});
	return createDefaultApolloClient({ link, useIntrospectionFragmentMatcher: true });
};

const render = () => (
	<Async
		promise={createApolloClient()}
		pending={() => (
			<strong>
				Loading apollo client for 500ms while apollo client is created
				(IntrospectionFragmentMatcherQuery runs)
			</strong>
		)}
		then={(apolloClient) => (
			<ApolloProvider client={apolloClient}>
				<div>your app</div>
			</ApolloProvider>
		)}
	/>
);
```

## IntrospectionFragmentMatcher initialization

When `useIntrospectionFragmentMatcher` is set to `true`, the provided link is queried for schema metadata which causes startup delay.
This is not a problem in dev environment and/or in early stages of a project.
In final production, you should consider [bundling the matcher data](https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher).
