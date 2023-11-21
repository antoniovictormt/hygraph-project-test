'use Client'

import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clo99m9nsawc101t5g7eieo1u/master',
  cache: new InMemoryCache()
})
