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
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${title} — ${site.name}`);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [title, description]);
  return notFound ? <meta name="robots" content="noindex" /> : null;
}
