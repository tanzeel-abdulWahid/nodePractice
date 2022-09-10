import React from 'react'
import Post from './Post/Post'

import { useGetPostsQuery } from "../../services/travelApi";

const Posts = ({posts,isSuccess,isError,isLoading, setCurrentId}) => {
        // const { data:posts, isSuccess, isError,isLoading } = useGetPostsQuery();
        let postContent;

        if(isError){
                postContent = (
                        <div>
                                <h1>Error Occured</h1>
                        </div>
                )
        }
        else if(isLoading){
                postContent = (
                        <div> Loading...</div>
                )
        }
        else if(isSuccess){
                postContent = posts.map((post) => (
                  <div key={post._id} className="grid overflow-hidden grid-cols-1 grid-rows-none gap-2">
                    <Post post={post} setCurrentId={setCurrentId}/>
                  </div>
                ));
        }

        return <div>{postContent}</div>       
}

export default Posts