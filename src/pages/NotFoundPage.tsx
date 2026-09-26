import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { Arrow } from "../components/SiteLayout";

export default function NotFoundPage() {
  return (
    <section className="not-found wrap">
      <PageMeta
        title="Page Not Found"
        description="This page could not be found. Explore Azhaanul’s selected software engineering work."
        notFound
      />
      <p className="error-code">404</p>
      <h1>This page isn’t here.</h1>
      <p>
        The address may have changed. The selected work is a good place to
        start.
      </p>
      <Link className="button-primary" to="/#work">
        Explore selected work <Arrow />
      </Link>
    </section>
  );
}
