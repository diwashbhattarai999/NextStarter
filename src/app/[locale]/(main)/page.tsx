import { useTranslations } from "next-intl";

import MaxWidthContainer from "@/components/ui/max-width-container";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <MaxWidthContainer>
      <h1>{t("title")}</h1>
    </MaxWidthContainer>
  );
}
