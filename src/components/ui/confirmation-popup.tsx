"use client";

import React from "react";
import { X } from "lucide-react";

import { useLockBody } from "@/hooks/use-lock-body";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface IConfirmationPopupProps {
  heading: string;
  showConfirmation: boolean;
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  isPending: boolean;
  children: React.ReactNode;
  cancelButtonLabel: string;
  confirmButtonLabel: string;
}

const ConfirmationPopup = ({
  heading,
  showConfirmation,
  setShowConfirmation,
  handleSubmit,
  isPending,
  children,
  cancelButtonLabel,
  confirmButtonLabel,
}: IConfirmationPopupProps) => {
  useLockBody(showConfirmation);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 bg-black/40 h-screen w-full z-50 backdrop-blur-sm flex items-center justify-center duration-300",
        showConfirmation
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      aria-disabled={!showConfirmation}
    >
      <div className="bg-background/95 backdrop-blur-md border border-border p-6 rounded-md max-md:w-full md:w-[700px] flex flex-col gap-6">
        <div className="flex justify-between items-center gap-4 text-secondary-foreground font-semibold text-2xl border-b border-border pb-4">
          <h1>{heading}</h1>
          <X
            className="cursor-pointer"
            onClick={() => setShowConfirmation(false)}
          />
        </div>

        {children}

        <div className="flex justify-end gap-4">
          <Button
            size={"lg"}
            onClick={() => {
              setShowConfirmation(false);
            }}
          >
            {cancelButtonLabel}
          </Button>
          <Button
            variant={"destructive"}
            size={"lg"}
            onClick={() => {
              handleSubmit();
              setShowConfirmation(false);
            }}
            disabled={isPending}
          >
            {confirmButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
