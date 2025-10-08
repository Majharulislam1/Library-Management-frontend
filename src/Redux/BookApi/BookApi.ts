

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const BookApi = createApi({
  reducerPath: 'BookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-gilt-nu.vercel.app/api' }),
  tagTypes: ['books'],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/books`,
       providesTags:['books']
    }),
     createBook:builder.mutation({
         query:(bookData)=>({
              url:'/books',
              method:"POST",
              body:bookData,
         }),
         invalidatesTags:['books']
    }),
    delete_Books:builder.mutation({
        query:(id)=>({
               url:`/books/${id}`,
               method:'DELETE',
        }),
        invalidatesTags:['books']
    })
  }),
})




export const {useGetPokemonByNameQuery,useCreateBookMutation,useDelete_BooksMutation} = BookApi;