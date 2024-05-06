"use client";

import { useState } from "react";
import Image from "next/image";
import { UseFormSetValue } from "react-hook-form";
import * as z from "zod";

import { SettingsSchema } from "@/schemas";

import { Button } from "@/components/ui/button";

interface ChangeProfileImgProps {
  value?: string;
  setValue?: UseFormSetValue<z.infer<typeof SettingsSchema>>;
}

const ChangeProfileImg = ({ value, setValue }: ChangeProfileImgProps) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleProfileDelete = () => {
    setImageUrl("");

    setValue && setValue("image", "");
  };

  return (
    <>
      <div className="mb-4 text-left flex flex-col items-center gap-4">
        <div className="h-48 w-48 p-1 rounded-full cursor-pointer duration-300 relative">
          <Image
            src={imageUrl || value || "/images/default-profile.png"}
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full rounded-full"
            priority
          />
        </div>

        <div className="flex gap-4 items-start">
          <Button size={"full"}>Upload</Button>
          <Button
            variant={"destructive"}
            size={"full"}
            onClick={handleProfileDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChangeProfileImg;
