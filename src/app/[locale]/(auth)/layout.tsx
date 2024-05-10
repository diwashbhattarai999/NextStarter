import React, { Suspense } from "react";

import Logo from "@/components/ui/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-primary/5 relative">
      <Suspense>
        <div className="flex flex-col items-center justify-between gap-8 max-w-[30rem] w-full h-full my-5">
          <Logo className="-ml-1" />
          {children}
        </div>
      </Suspense>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-3xl -z-10 pointer-events-none bg-gradient-to-br from-accent dark:from-accent/70 to-transparent opacity-20"></div>
    </main>
  );
}
