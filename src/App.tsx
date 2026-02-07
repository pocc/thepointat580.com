import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import HistoricArea from "./pages/HistoricArea";
import Forms from "./pages/Forms";

function Layout({ children }: { children: React.ReactNode }) {
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
          <nav className="main-nav">
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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/historic-area" element={<HistoricArea />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
