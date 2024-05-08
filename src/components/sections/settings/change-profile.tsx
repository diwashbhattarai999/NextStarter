"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { ClientUploadedFileData } from "uploadthing/types";

import {
  deletProfileImage,
  uploadProfileImage,
} from "@/actions/settings/settings-profile";
import { useCurrentUser } from "@/hooks/use-current-user";

import { UploadButton } from "@/lib/uploadthing";

import { Button } from "@/components/ui/button";

const ChangeProfileImg = () => {
  const user = useCurrentUser();

  const [imageUrl, setImageUrl] = useState(user?.image ?? "");

  // Delete profile image
  const handleProfileDelete = () => {
    deletProfileImage()
      .then((data) => {
        if (data?.error) {
          toast.error(data.error);
        }
        if (data?.success) {
          setImageUrl("");
          toast.success(data.success);
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  // Upload profile image
  const handleImageUpload = (
    res: ClientUploadedFileData<{
      uploadedBy: string | undefined;
    }>[]
  ) => {
    {
      setImageUrl(res[0].url);
      uploadProfileImage(res[0].url)
        .then((data) => {
          if (data?.error) {
            toast.error(data.error);
          }
          if (data?.success) {
            toast.success("Upload completed.");
          }
        })
        .catch(() => toast.error("Something went wrong"));
    }
  };

  // Handle image upload error
  const handleImageUploadError = (err: Error) => {
    toast.error(`ERROR! ${err.message}`);
  };

  return (
    <>
      <div className="mb-4 text-left flex flex-col items-center gap-4">
        <div className="h-48 w-48 p-1 rounded-full cursor-pointer duration-300 relative">
          <Image
            src={imageUrl || "/images/default-profile.png"}
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full rounded-full aspect-square"
            priority
          />
        </div>

        <div className="flex gap-4 items-start">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => handleImageUpload(res)}
            onUploadError={(err: Error) => handleImageUploadError(err)}
          />
          <Button
            type="button"
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
