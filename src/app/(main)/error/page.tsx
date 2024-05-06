import Image from "next/image";
import Link from "next/link";

import MaxWidthContainer from "@/components/ui/max-width-container";

const ErrorPage = () => {
  return (
    <MaxWidthContainer className="flex flex-col items-center justify-center gap-16 min-h-screen w-full py-10 max-w-screen-lg">
      <Image
        src="/images/error-page.svg"
        alt="Error"
        width={450}
        height={450}
      />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-base font-semibold leading-8 text-primary">500</p>

        <div className="font-bold tracking-tight text-primary text-2xl">
          Oops! Something went wrong! Could not find requested resource
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* Back to home Btn */}
        <Link
          href="/"
          className="min-w-48 flex items-center justify-center group border border-stone-200 p-4 hover:border-stone-400 transition-colors"
        >
          <span
            aria-hidden="true"
            className="-mt-[6px] text-2xl group-hover:-translate-x-1 transition-transform"
          >
            &larr;
          </span>
          <p>Back to home</p>
        </Link>
      </div>
    </MaxWidthContainer>
  );
};

export default ErrorPage;
