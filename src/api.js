import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({start, limit}) => `posts?_start=${start}&_limit=${limit}`,
    }),
    getPost: builder.query({
      query: (postId) => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostQuery } = api;
