import {
        createApi,
        fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

export const travelApi = createApi({
        reducerPath: "travelApi",
        baseQuery: fetchBaseQuery({
                baseUrl: "http://localhost:3000/"
        }),
        endpoints: (builder) => ({
                getPosts: builder.query({
                        query : () => "/posts"
                }),
                addPost: builder.mutation({
                        query : (post) => ({
                                url: "/posts",
                                method: "POST",
                                body: post
                        }) 
                }),
                deletePost: builder.mutation({
                        query : (id) => ({
                                url: `/posts/${id}`,
                                method: "DELETE",
                        })
                }),
                updatePost: builder.mutation({
                        query : (id, ...rest) => ({
                                url: `/posts/${id}`,
                                method: "PATCH",
                                body: rest
                        })
                }),
                likePost: builder.mutation({
                        query: (id) => ({
                                url: `/posts/${id}/likePost`,
                                method: "PATCH",
                        })
                })
        })
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation, useLikePostMutation } = travelApi;