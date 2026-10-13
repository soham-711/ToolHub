import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";
import "./Footer.css";

const footerGroups = [
  {
    id: "tools",
    title: "Tools",
    links: [
      { label: "Home", to: "/" },
      { label: "All tools", to: "/tools" },
      { label: "Popular tools", to: "/#popular" },
    ],
  },
  {
    id: "categories",
    title: "Categories",
    links: [
      { label: "Calculators", to: "/category/calculators" },
      { label: "Text tools", to: "/category/text" },
      { label: "Date & time", to: "/category/date-time" },
      { label: "Image tools", to: "/category/image" },
      { label: "PDF tools", to: "/category/pdf" },
      { label: "Developer tools", to: "/category/developer" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Privacy policy", to: "/privacy" },
      { label: "Terms of use", to: "/terms" },
      { label: "Cookie policy", to: "/cookies" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About us", to: "/about" },
      { label: "Contact us", to: "/contact" },
      { label: "Feedback", to: "/feedback" },
    ],
  },
];

function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Utility Hub home">
              <span className="footer-logo-mark">U</span>
              <span>Utility Hub</span>
            </Link>
            <p className="footer-tagline">
              {t("footer.description", {
                defaultValue: "Free, fast tools for everyday tasks.",
              })}
            </p>
          </div>

          <nav className="footer-columns" aria-label="Footer">
            {footerGroups.map((group) => (
              <div className="footer-column" key={group.id}>
                <h2 className="footer-heading" id={`footer-${group.id}`}>
                  {t(`footer.groups.${group.id}`, {
                    defaultValue: group.title,
                  })}
                </h2>

                <ul
                  className="footer-links"
                  aria-labelledby={`footer-${group.id}`}
                >
                  {group.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link to={link.to}>
                        {t(`footer.links.${link.to}`, {
                          defaultValue: link.label,
                        })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Utility Hub.{" "}
            {t("footer.rights", { defaultValue: "All rights reserved." })}
          </p>

          <button type="button" className="footer-top" onClick={scrollToTop}>
            <ArrowUp size={14} aria-hidden="true" />
            {t("footer.backToTop", { defaultValue: "Back to top" })}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
