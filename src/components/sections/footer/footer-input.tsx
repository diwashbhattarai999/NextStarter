"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const FooterInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
    } else {
      toast.success("Thank you for subscribing to our newsletter.");
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full md:w-[80%] text-secondary-foreground/90"
    >
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 md:p-5 border border-border bg-muted/30 text-xl backdrop-blur-md rounded-2xl outline-none w-full"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant={"ghost"}
        size={"sm"}
        type="submit"
        className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
      >
        <ArrowRight className="w-7 h-7 cursor-pointer" />
      </Button>
    </form>
  );
};

export default FooterInput;
