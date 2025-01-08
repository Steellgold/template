"use client";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Page");

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t("Title")}</h1>
      <p className="text-lg">{t("Description")}</p>
    </section>
  );
}

export default Page;