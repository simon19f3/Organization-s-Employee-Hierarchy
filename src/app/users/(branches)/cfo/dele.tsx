"use client";
import { useSelector, useDispatch } from "react-redux";
import {addPost, deletePost} from "@/redux/slices/postsSlice";
import { useState } from "react";
import React from 'react';


function Dele() {
    
    const dispatch= useDispatch();
    const posts=useSelector ((state:any)=>state.posts);
    
    const handleRemovePost=(postId:any)=>{
      dispatch(deletePost(postId));
    }
    return (
    <div><button className="bg-red-600" onClick={()=>handleRemovePost(post.id)}>delete</button></div>
  )
}

export default Dele;