/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        fullname\n      }\n      token {\n        expiration\n        token\n        type\n      }\n      error {\n        code\n        message\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  query getAllStatus {\n    statusList {\n      id\n      statusName\n    }\n  }\n": types.GetAllStatusDocument,
    "\n  query getAllTasks {\n    tasks {\n      taskTitle\n      taskDescription\n      status {\n        id\n        statusName\n      }\n      assignUser {\n        id\n        fullname\n        email\n        avatar\n      }\n    }\n    statusList {\n      id\n      statusName\n    }\n  }\n": types.GetAllTasksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        fullname\n      }\n      token {\n        expiration\n        token\n        type\n      }\n      error {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        id\n        email\n        fullname\n      }\n      token {\n        expiration\n        token\n        type\n      }\n      error {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllStatus {\n    statusList {\n      id\n      statusName\n    }\n  }\n"): (typeof documents)["\n  query getAllStatus {\n    statusList {\n      id\n      statusName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllTasks {\n    tasks {\n      taskTitle\n      taskDescription\n      status {\n        id\n        statusName\n      }\n      assignUser {\n        id\n        fullname\n        email\n        avatar\n      }\n    }\n    statusList {\n      id\n      statusName\n    }\n  }\n"): (typeof documents)["\n  query getAllTasks {\n    tasks {\n      taskTitle\n      taskDescription\n      status {\n        id\n        statusName\n      }\n      assignUser {\n        id\n        fullname\n        email\n        avatar\n      }\n    }\n    statusList {\n      id\n      statusName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;