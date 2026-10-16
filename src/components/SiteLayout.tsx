import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { navigation, site } from "../data/portfolio";

export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={external ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header wrap"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d={open ? "M3 8h10" : "M3 8h10M8 3v10"}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <nav
        id="site-navigation"
        className={`site-nav ${open ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} (PDF, opens in a new tab)`}
              onClick={() => {
                setOpen(false);
                if (open) toggle.current?.focus();
              }}
            >
              {item.label}
            </a>
          ) : (
            <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          )
        ))}
      </nav>
    </header>
  );
}

function RoutePosition() {
  const { pathname, hash, key } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const initial = first.current;
    const frame = requestAnimationFrame(() => {
      first.current = false;
      if (hash) {
        let anchor = hash.slice(1);
        try {
          anchor = decodeURIComponent(anchor);
        } catch {
          /* Keep malformed fragments harmless. */
        }
        const target = document.getElementById(anchor);
        if (target) {
          target.scrollIntoView({ behavior: "instant" });
          target.focus({ preventScroll: true });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "instant" });
      if (!initial)
        document.getElementById("main")?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}

export default function SiteLayout() {
  const location = useLocation();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation key={location.pathname} />
      <RoutePosition />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer wrap">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <span>{site.location}</span>
        <Link to="/#work">
          Back to work <Arrow />
        </Link>
      </footer>
    </>
  );
}
