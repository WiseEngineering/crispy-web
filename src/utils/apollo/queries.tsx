import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Entity = {
   __typename?: 'Entity',
  id: Scalars['ID'],
};

export type Job = {
   __typename?: 'Job',
  id: Scalars['ID'],
  migrationId: Scalars['Int'],
  workerId: Scalars['Int'],
  status: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Logging = {
   __typename?: 'Logging',
  id: Scalars['ID'],
  data: Scalars['String'],
  jobId: Scalars['Int'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Migration = {
   __typename?: 'Migration',
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createLog: Entity,
  createMigration: Entity,
  createWorker: Entity,
  createJob: Entity,
  deleteJob: Entity,
  deleteWorker: Entity,
  deleteMigration: Entity,
  deleteLog: Entity,
  updateJob: Entity,
  updateWorker: Entity,
  updateMigration: Entity,
  updateLog: Entity,
};


export type MutationCreateLogArgs = {
  data: Scalars['String'],
  jobId: Scalars['Int']
};


export type MutationCreateMigrationArgs = {
  name: Scalars['String']
};


export type MutationCreateWorkerArgs = {
  name: Scalars['String'],
  endpoint: Scalars['String'],
  apiKey: Scalars['String']
};


export type MutationCreateJobArgs = {
  migrationId: Scalars['Int'],
  workerId: Scalars['Int'],
  status?: Maybe<Scalars['String']>
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID']
};


export type MutationDeleteWorkerArgs = {
  id: Scalars['ID']
};


export type MutationDeleteMigrationArgs = {
  id: Scalars['ID']
};


export type MutationDeleteLogArgs = {
  id: Scalars['ID']
};


export type MutationUpdateJobArgs = {
  id: Scalars['ID'],
  migrationId?: Maybe<Scalars['Int']>,
  workerId?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>
};


export type MutationUpdateWorkerArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  endpoint?: Maybe<Scalars['String']>,
  apiKey?: Maybe<Scalars['String']>
};


export type MutationUpdateMigrationArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>
};


export type MutationUpdateLogArgs = {
  id: Scalars['ID'],
  data?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['Int']>
};

export type Query = {
   __typename?: 'Query',
  workers?: Maybe<Array<Maybe<Worker>>>,
  migrations?: Maybe<Array<Maybe<Migration>>>,
  logging?: Maybe<Array<Maybe<Logging>>>,
  jobs?: Maybe<Array<Maybe<Job>>>,
};


export type Worker = {
   __typename?: 'Worker',
  id: Scalars['ID'],
  name: Scalars['String'],
  endpoint: Scalars['String'],
  apiKey: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};


