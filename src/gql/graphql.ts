/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ErrorType>;
  token: Token;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTask: Task;
  forgotPassword?: Maybe<SuccessReponse>;
  login: LoginResponse;
  register: RegisterResponse;
  removeTask: Scalars['Boolean']['output'];
  removeUser?: Maybe<SuccessReponse>;
  updatePassword?: Maybe<SuccessReponse>;
};


export type MutationAddTaskArgs = {
  newTaskData: NewTaskInput;
};


export type MutationForgotPasswordArgs = {
  emailInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  passwordInput: UpdatePasswordInput;
};

export type NewTaskInput = {
  assignUserId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getUser: User;
  profile: User;
  task: Task;
  tasks: Array<Task>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTasksArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  error?: Maybe<ErrorType>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
};

export type SuccessReponse = {
  __typename?: 'SuccessReponse';
  error?: Maybe<ErrorType>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Task = {
  __typename?: 'Task';
  assignUser?: Maybe<User>;
  id: Scalars['Int']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  taskDescription?: Maybe<Scalars['String']['output']>;
  taskTitle: Scalars['String']['output'];
};

export type Token = {
  __typename?: 'Token';
  expiration: Scalars['Float']['output'];
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type UpdatePasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  hasChangePassword?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  password: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  tasks: Array<Task>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ErrorType>;
  token: Token;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTask: Task;
  forgotPassword?: Maybe<SuccessReponse>;
  login: LoginResponse;
  register: RegisterResponse;
  removeTask: Scalars['Boolean']['output'];
  removeUser?: Maybe<SuccessReponse>;
  updatePassword?: Maybe<SuccessReponse>;
};


export type MutationAddTaskArgs = {
  newTaskData: NewTaskInput;
};


export type MutationForgotPasswordArgs = {
  emailInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  passwordInput: UpdatePasswordInput;
};

export type NewTaskInput = {
  assignUserId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getUser: User;
  profile: User;
  task: Task;
  tasks: Array<Task>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTasksArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  error?: Maybe<ErrorType>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
};

export type SuccessReponse = {
  __typename?: 'SuccessReponse';
  error?: Maybe<ErrorType>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Task = {
  __typename?: 'Task';
  assignUser?: Maybe<User>;
  id: Scalars['Int']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  taskDescription?: Maybe<Scalars['String']['output']>;
  taskTitle: Scalars['String']['output'];
};

export type Token = {
  __typename?: 'Token';
  expiration: Scalars['Float']['output'];
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type UpdatePasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  hasChangePassword?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  password: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  tasks: Array<Task>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};
