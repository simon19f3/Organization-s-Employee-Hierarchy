"use client";
import { useSelector, useDispatch } from "react-redux";
import {addPost, deletePost} from "@/redux/slices/postsSlice";
import { useState } from "react";
import React from 'react';

function Posts() {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const dispatch= useDispatch();
  const posts=useSelector ((state:any)=>state.posts);
  const handleAddPost =(e:any)=>{
    e.preventDefault();  
     if(!title &&!description) return;
     const newPost={
      id:Date.now(),
      title:title,
      description:description
     }
     dispatch(addPost(newPost));
    setTitle("");
    setDescription("");
   } 
  const handleRemovePost=(postId:any)=>{
    dispatch(deletePost(postId));
  }
    
  return (
    <div>
    <form >
      <div className="flex flex-col">
      <input
      className="object-center border-4"
      type="text"
      placeholder="title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <textarea
      className="object-center border-4"
      placeholder="description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}>
      </textarea>
      <button onClick={handleAddPost} className="object-center border-4 bg-red-600">add new post</button>
    </div>

    </form>
    <div >
       <h1>Posts</h1>
       {posts ?(
        posts.map((post:any)=>(  
          <div className="border-4" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="bg-red-600" onClick={()=>handleRemovePost(post.id)}>delete</button>
          </div>
        ))
       ):(
        <p>no post found.</p>
       )}
     </div>   
    </div>
  );
}

export default Posts;