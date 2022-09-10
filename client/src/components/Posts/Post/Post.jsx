import React from 'react'
import moment from "moment";
import {useDeletePostMutation,useLikePostMutation} from '../../../services/travelApi';
import editBtn from '../../../assets/editBtn.svg'
const Post = ({post,setCurrentId}) => {
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();

  const handleDelete = (e) => {
    deletePost(post._id);
  }
  const handleLike= () => {
    likePost(post._id);
  } 
        return (
          <div class="flex justify-center mb-5 relative">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              {/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"> */}
                <img
                  className="rounded-t-lg object-cover"
                  src={post.selectedFile}
                  alt=""
                />
              {/* </a> */}
              <div class="p-4">
                <div className="absolute top-4 right-52 cursor-pointer" onClick={() => setCurrentId(post._id)}>
                  <img src={editBtn} alt="edit" className="h-5 text-white" />
                </div>
                <div className="absolute top-4">
                  <h5 class="text-white capitalize text-lg font-medium mb-2">
                    {post.creator}
                  </h5>
                  <h5 class="text-white text-sm font-medium mb-2">
                    {moment(post.createdAt).fromNow()}
                  </h5>
                </div>
                <h5 class="text-gray-900 text-sm font-normal mb-2">
                  {post.tags.map((tag) => `#${tag} `)}
                </h5>
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {post.title}
                </h5>
                <p class="text-gray-700 text-base mb-4">{post.message}</p>
                <button
                  type="button"
                  class="mr-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handleLike}
                >
                  Like {post.likeCount}
                </button>
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
}

export default Post