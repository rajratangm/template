"use client";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import {Badgge} from "./"

const Post = () => {
  const { user } = useUser();
  //   const fullName =

  return (
    <div className="bg-white my-2 rounded-lg border-gray-300">
      <div className="flex gap-2 p-4">
        {/* <ProfilePhoto src={user?.user?.imageUrl}/> */}
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-sm font-bold">Rajratan More<Badge>Badge</Badge></h1>
            <p className="text-xs text-gray-500">@userName</p>
            <p className="text-xs text-gray-500">1hr ago</p>
          </div>
        </div>
        <div>
          <Button className="rounded-full" variant={"outline"} size={"icon"}>
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
