

import type { Book_type } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const BookApi = createApi({
  reducerPath: 'BookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-gilt-nu.vercel.app/api' }),
  tagTypes: ['books','borrows'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ['books']
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: '/books',
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ['books']
    }),
    delete_Books: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books']
    }),

    getBookById: builder.query<Book_type, string>({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: 'books', id }],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({ // patch and put all time pass data don't use book or user or other
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['books']
    }),

    getBorrow_summary: builder.query({
      query: () => `/borrow`,
      providesTags: ['borrows']
    }),

     createBorrow: builder.mutation({
      query: (bookData) => ({
        url: '/borrow',
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ['books','borrows']
    }),

    

  }),
})




export const { 
  useGetBooksQuery, 
  useCreateBookMutation, 
  useDelete_BooksMutation, 
  useGetBookByIdQuery, 
  useUpdateBookMutation,
  useCreateBorrowMutation,
  useGetBorrow_summaryQuery 
} = BookApi;