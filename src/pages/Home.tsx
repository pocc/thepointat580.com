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
          <h1>Your Bay Area Address in Historic Point Richmond</h1>
          <p className="tagline">
            Office, storefront, warehouse, residential, and virtual mailbox
            rentals &mdash; from $49/month
          </p>
          <div className="hero-ctas">
            <Link to="/listings" className="btn btn-primary">
              View Listings
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading-center">What We Offer</h2>
          <div className="card-grid card-grid-linked">
            <Link to="/listings" className="card">
              <div className="card-icon">&#128188;</div>
              <h3>Private Offices</h3>
              <p>
                Professional office space starting at $695/month, including WiFi
                and utilities.
              </p>
            </Link>
            <Link to="/listings" className="card">
              <div className="card-icon">&#127970;</div>
              <h3>Storefronts</h3>
              <p>
                Street-level retail and commercial spaces with high visibility
                in Point Richmond.
              </p>
            </Link>
            <Link to="/listings" className="card">
              <div className="card-icon">&#127981;</div>
              <h3>Warehouse / Office</h3>
              <p>
                Flexible combined spaces for production, storage, and office
                operations.
              </p>
            </Link>
            <Link to="/listings" className="card">
              <div className="card-icon">&#127968;</div>
              <h3>Residential</h3>
              <p>
                Homes and apartments in one of the Bay Area's most charming,
                pet-friendly neighborhoods.
              </p>
            </Link>
            <Link to="/listings" className="card">
              <div className="card-icon">&#128235;</div>
              <h3>Virtual Office</h3>
              <p>
                Professional business address and mailbox starting at just
                $49/month. No commitment.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="location-strip">
        <div className="container">
          <div className="location-items">
            <div className="location-item">
              <span className="location-label">San Rafael</span>
              <span className="location-value">10 min</span>
            </div>
            <div className="location-item">
              <span className="location-label">Berkeley</span>
              <span className="location-value">20 min</span>
            </div>
            <div className="location-item">
              <span className="location-label">Oakland</span>
              <span className="location-value">30 min</span>
            </div>
            <div className="location-item">
              <span className="location-label">I-580 On-Ramp</span>
              <span className="location-value">Adjacent</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="col">
              <h2>Historic Point Richmond</h2>
              <p>
                Point Richmond has been quietly attracting families, artists,
                professionals and businesses for decades, yet many in the San
                Francisco Bay area have never heard of this scenic neighborhood.
              </p>
              <p>
                A walkable historic district with great restaurants, parks,
                bay views, hiking trails, and a thriving arts community &mdash;
                all minutes from major Bay Area cities.
              </p>
              <Link to="/historic-area" className="btn btn-secondary">
                Explore the Neighborhood
              </Link>
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
          <div className="two-col">
            <div className="col">
              <h2>Locally Owned Since 1997</h2>
              <p>
                We work toward having long-term tenants and many have been with
                us for several years or more. Since 1997, we have had our
                environmental consulting practice on the property. We hope you
                will enjoy working in Point Richmond as much as we have!
              </p>
              <p>
                &mdash; Olivia and James Jacobs, Owners
              </p>
            </div>
            <div className="col">
              <div className="info-card">
                <h3>Property Amenities</h3>
                <ul>
                  <li>Shared conference room ($29/hr)</li>
                  <li>Outdoor garden patio</li>
                  <li>Kitchen</li>
                  <li>Secured gated parking (commercial tenants)</li>
                  <li>Pet-friendly</li>
                  <li>Adjacent to I-580 on-ramp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Find Your Space at The Point</h2>
          <p>
            Whether you need a storefront, office, warehouse, residence, or
            just a professional mailing address &mdash; we have options to fit
            your needs and budget.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
