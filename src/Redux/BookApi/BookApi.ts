

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const BookApi = createApi({
  reducerPath: 'BookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-gilt-nu.vercel.app/api' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/books`,
    }),
  }),
})




export const {useGetPokemonByNameQuery} = BookApi;