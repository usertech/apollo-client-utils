import {ApolloLink} from "apollo-link";
import {IntrospectionFragmentMatcher} from "apollo-cache-inmemory";

export interface CreateIntrospectionFragmentMatcherOptions {
    link: ApolloLink
}

export function createIntrospectionFragmentMatcher(options: CreateIntrospectionFragmentMatcherOptions): IntrospectionFragmentMatcher
