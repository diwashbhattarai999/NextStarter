"use client";

import React from "react";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/localization/navigation";

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: e.target.value }
    );
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="p-2 outline-none cursor-pointer rounded-md"
    >
      <option value="en" className="bg-muted p-1 font-semibold cursor-pointer">
        English
      </option>
      <option value="ne" className="bg-muted p-1 font-semibold cursor-pointer">
        Nepali
      </option>
    </select>
  );
}
