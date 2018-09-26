import {ApolloLink} from "apollo-link";
import ApolloClient from "apollo-client/ApolloClient";
import {InMemoryCache} from "apollo-cache-inmemory";

export interface CreateDefaultApolloClientOptions {
    link: ApolloLink,
    useIntrospectionFragmentMatcher: String,
}

export function createDefaultApolloClient(options: CreateDefaultApolloClientOptions): ApolloClient<InMemoryCache>
