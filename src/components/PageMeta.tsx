import { useEffect } from "react";
import { site } from "../data/portfolio";

export default function PageMeta({
  title,
  description,
  notFound = false,
}: {
  title: string;
  description: string;
  notFound?: boolean;
}) {
  useEffect(() => {
    document.title = `${title} — ${site.name}`;
  }, [title]);
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} — ${site.name}`} />
      <meta property="og:description" content={description} />
      {notFound && <meta name="robots" content="noindex" />}
    </>
  );
}
