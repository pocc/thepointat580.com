import { useState, useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import HistoricArea from "./pages/HistoricArea";
import Forms from "./pages/Forms";

/* ── Scroll to top on every route change ──────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ── 404 page ─────────────────────────────────────────── */
function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — The Point at 580";
  }, []);
  return (
    <section className="page-header" style={{ minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>404</h1>
      <p style={{ marginBottom: "2rem" }}>Sorry, that page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}

/* ── Layout shell (header + promo + footer) ───────────── */
function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* close mobile menu on navigation */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* prevent body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            <span className="logo-name">The Point at 580</span>
            <span className="logo-addr">
              227&ndash;249 Tewksbury Ave, Point Richmond, CA 94801
            </span>
          </NavLink>

          <a href="tel:+15105901099" className="header-phone">
            (510) 590-1099
          </a>

          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav${menuOpen ? " nav-open" : ""}`}>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/listings">Listings</NavLink>
            <NavLink to="/historic-area">Historic Area</NavLink>
            <NavLink to="/forms">Forms</NavLink>
          </nav>
        </div>
      </header>

      {/* backdrop for mobile menu */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      <div className="promo-banner">
        <span>
          Storefront &bull; Commercial &bull; Warehouse/Office &bull; Residential
          &bull; Virtual Office/Mailbox
        </span>
      </div>

      <main>{children}</main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>The Point at 580</h4>
            <p>
              227&ndash;249 Tewksbury Ave.
              <br />
              Pt. Richmond, CA 94801
            </p>
            <p>
              <a href="tel:+15105901099">(510) 590-1099</a>
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/listings">Listings</NavLink>
              <NavLink to="/historic-area">Historic Area</NavLink>
              <NavLink to="/forms">Forms</NavLink>
            </nav>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <p>
              Mon&ndash;Fri: 9 AM &ndash; 5 PM
              <br />
              Sat: 10 AM &ndash; 4 PM (appt)
              <br />
              Sun: Closed
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} The Point at 580 &mdash; Since
            1997. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/historic-area" element={<HistoricArea />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
