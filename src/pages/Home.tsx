import { Link } from "react-router-dom";
import aerialImg from "../assets/images/richmond-aerial.jpg";
import coupleImg from "../assets/images/business-couple.jpg";

export default function Home() {
  return (
    <>
      <section className="hero hero-with-bg">
        <img
          src={aerialImg}
          alt="Aerial view of Richmond, California and San Francisco Bay"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>Welcome</h1>
          <p className="tagline">
            Point Rentals: office, storefront, warehouse, residences and
            mailboxes
          </p>
          <p className="cta-text">
            We are glad to talk to you about your rental needs
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="col">
              <h2>Historic Point Richmond</h2>
              <p>
                Convenience and location are prime considerations when leasing a
                place to do business or a house to rent. Point Richmond has been
                quietly attracting families, artists, professionals and
                businesses for decades, yet many in the San Francisco Bay area
                have never heard of the scenic town.
              </p>
              <p>
                Hiking, biking and walking in Point Richmond offers great views
                of San Francisco Bay as well as the East Bay hills. For normal
                vehicle driving time, San Rafael, Berkeley, and Oakland are about
                10, 20, and 30 minutes away, respectively.
              </p>
            </div>
            <div className="col">
              <img
                src={coupleImg}
                alt="Business professionals at The Point at 580"
                className="section-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon">&#127970;</div>
              <h3>Storefront</h3>
              <p>
                Street-level retail and commercial spaces in the heart of Point
                Richmond.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#128188;</div>
              <h3>Commercial</h3>
              <p>
                Professional office spaces suitable for businesses of all sizes.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#127981;</div>
              <h3>Warehouse / Office</h3>
              <p>
                Flexible warehouse and office combinations for production and
                operations.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#127968;</div>
              <h3>Residential</h3>
              <p>
                Homes and apartments in one of the Bay Area's most charming
                neighborhoods.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#128235;</div>
              <h3>Virtual Office / Mailbox</h3>
              <p>
                Establish a professional business address starting at just
                $49/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>The Point at 580 &mdash; Since 1997</h2>
          <p>
            For nearly three decades, we've been providing quality rental spaces
            in Point Richmond. Whether you need a storefront, office, warehouse,
            residence, or just a professional mailing address, we have options to
            fit your needs.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
