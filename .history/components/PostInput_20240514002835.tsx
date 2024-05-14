'use client';
import React, { useState } from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import {PostDialog} from './PostDialog'
import { Input } from "./ui/input";

const PostInput = ({ user }: { user: any }) => {
    const [open, setOpen]= useState<boolean>(false)
    const inputHandler =()=>{
        set

    }
  return (
    <div className="bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg ">
      <div className="flex items-center gap-3">
        <ProfilePhoto src={user?.imageUrl} />
        <Input
          type="text"
          placeholder="start a post"
          className="rounded-full hover:bg-gray-100 h-12 cursor-pointer"
          onClick={}
        />
        <PostDialog/>
      </div>
    </div>
  );
};

export default PostInput;
