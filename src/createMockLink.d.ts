import {IExecutableSchemaDefinition, IMockOptions} from "graphql-tools";
import {ApolloLink} from "apollo-link";

export interface CreateMockLinkOptions {
    defaultOperationDelay?: Number,
    operationsDelays?: {
        [operationName: string]: Number
    },
}

export function createMockLink(options: CreateMockLinkOptions & IMockOptions & IExecutableSchemaDefinition): ApolloLink
