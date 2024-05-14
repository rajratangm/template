"use client";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { useUser } from "@clerk/nextjs";

const Post = () => {
  const { user } = useUser();
//   const fullName = 

  return (
    <div className="bg-white my-2 rounded-lg border-gray-300">
      <div className="flex gap-2 p-4">
        {/* <ProfilePhoto src={user?.user?.imageUrl}/> */}
        <div className="flex items-center justify-between w-full">
          <div>
            <h1>Rajratan More</h1>
            <p>userNa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
