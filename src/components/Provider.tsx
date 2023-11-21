'use client'

import { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'

import { client } from '~/API/graphql'

interface ProviderProps {
  children: ReactNode
}

export const Provider = ({ children }: ProviderProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
