import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import {
  useAddPostMutation,
  useUpdatePostMutation,
} from "../../services/travelApi";

const Form = ({currentId, setCurrentId, posts}) => {
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

const post = currentId ? posts.find((p) => p._id === currentId) : null;
// console.log(post);

useEffect(() => {
  if (post) setPostData(post)
},[post])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      addPost(postData);
      handleClear();
    }
    else{
      console.log({postData});
      try {
        
        updatePost(currentId, postData);
      } catch (error) {
        console.log(err);
      }
      handleClear();

    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <div className="bg-white p-5 max-h-[26rem] rounded-md ml-14 md:ml-0">
      <form onSubmit={handleSubmit}>
        <h2 className="capitalize text-center text-xl pb-6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </h2>
        <div className="mb-3">
          <input
            type="text"
            className="form"
            placeholder="Creator"
            required=""
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="title"
            className="form"
            placeholder="Title"
            required=""
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="message"
            className="form"
            placeholder="Message"
            required=""
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="title"
            className="form"
            placeholder="Tags(comma seperated)"
            required=""
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
        </div>
        <div className="w-7/12 mb-6">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit" className="btn w-20">
          Submit
        </button>
        <button className="btn w-20 ml-2" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
