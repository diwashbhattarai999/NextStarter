import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FOOTER_CONTACTS, FOOTER_INFOS } from "@/constants";

import MaxWidthContainer from "@/components/ui/max-width-container";
import FooterInput from "@/components/sections/footer/footer-input";
import ThemeSwitcher from "@/components/theme-switcher";

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80%] rounded-full blur-3xl z-0 pointer-events-none bg-gradient-to-br from-background-50 dark:from-foreground/5 to-transparent" />

      <MaxWidthContainer className="flex justify-between flex-col z-10">
        {/* Top - Links & Socials */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 2xl:gap-10 items-start pt-12 mb-8">
          {/* Left */}
          <div className="w-full md:basis-[60%] grid gap-4 sm:gap-2 lg:gap-8 grid-cols-1 min-[350px]:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {FOOTER_INFOS.map((section, i) => (
              <div key={i} className="flex flex-col gap-2">
                {/* Title */}
                <h2 className="text-lg md:text-xl font-semibold mb-2 pb-2 pr-4 border-b border-border w-fit">
                  {section.title}
                </h2>

                {/* Links */}
                {section.links.map((link) => (
                  <Link
                    href={link.link}
                    key={link.title}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="group-hover:translate-x-1 duration-300 overflow-hidden flex items-center pt-1">
                      <ArrowRight className="hidden md:inline mr-1 w-5 h-5 -translate-x-5 group-hover:translate-x-0 group-hover:-rotate-45" />
                      <div className="md:-translate-x-5 group-hover:translate-x-0 text-muted-foreground">
                        {link.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-full md:basis-[40%] flex flex-col gap-8">
            {/* Subscribe to Newsletter */}
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 flex flex-col md:max-lg:flex-row lg:flex-col gap-3 lg:gap-0">
                <p>Subscribe to </p>
                <p>our newsletter</p>
              </h1>
              <FooterInput />
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-semibold mb-2 pb-2 pr-4 border-b border-border w-fit">
                Contacts
              </h2>

              {/* links */}
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                {FOOTER_CONTACTS.map((contact) => {
                  return (
                    <Link
                      href={contact.link}
                      key={contact.title}
                      className="flex items-center gap-2 group cursor-pointer"
                    >
                      <contact.icon className="w-5 h-5" />

                      <div className="group-hover:translate-x-1 duration-300 overflow-hidden flex items-center">
                        <ArrowRight className="inline mr-1 w-5 h-5 -translate-x-5 group-hover:translate-x-0 group-hover:-rotate-45" />
                        <div className="-translate-x-5 group-hover:translate-x-0">
                          {contact.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Theme switcher */}
          <ThemeSwitcher />
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-t-border/70 flex items-center justify-center text-center py-4 text-xs md:text-sm max-sm:flex-col max-sm:gap-2">
          <p>
            Copyright &copy; 2024 Diwash Bhattarai. All Rights Reserved.
            Handigaun, Kathmandu
          </p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
