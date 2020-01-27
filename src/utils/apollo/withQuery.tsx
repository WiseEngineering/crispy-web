import React from 'react'
import { Query, QueryProps, QueryResult } from 'react-apollo'
import { ApolloError } from 'apollo-client'
import { DocumentNode } from 'graphql'

export type Disposable = {
  dispose(): void;
};

export interface InjectedProps<Data> {
  loading: boolean;
  error: ApolloError;
  data: Data;
  refetch: Disposable;
}

export function withQuery<T extends object>(
  Component: React.ComponentType<T>,
  QUERY: DocumentNode,
  {
    propagateLoading = false,
    useLoadingSpinner = false,
    propagateError = false,
    fetchPolicy = 'cache-first' as QueryProps['fetchPolicy'],
  } = {}
): React.FC {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resultComponent: React.FC = (props: any) => {
    const queryHandler: QueryProps<T>['children'] = ({
      loading,
      error,
      data,
      refetch,
      fetchMore,
    }: QueryResult) => {
      if (!propagateLoading && loading) {
        return (
          useLoadingSpinner && (
            <div>
              Loading...
            </div>
          )
        )
      }

      if (error) {
        if (!propagateError) {
          return <p>Error</p>
        }
      }

      return (
        <Component
          {...props}
          loading={loading}
          error={error}
          data={data}
          refetch={refetch}
          fetchMore={fetchMore}
        />
      )
    }

    return (
      <Query
        errorPolicy={propagateError ? 'all' : 'none'}
        query={QUERY}
        variables={props.queryVars}
        fetchPolicy={fetchPolicy}
      >
        {queryHandler}
      </Query>
    )
  }
  return resultComponent
}
