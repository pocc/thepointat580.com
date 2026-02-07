import { Link } from "react-router-dom";

export default function Listings() {
  return (
    <>
      <section className="page-header">
        <h1>Listings</h1>
        <p>Current rental options at The Point at 580</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="listings-grid">
            <div className="listing-card">
              <div className="listing-badge">Available</div>
              <h2>Virtual Office with Mailbox</h2>
              <div className="listing-price">
                <span className="price">$49</span>
                <span className="period">/month</span>
              </div>
              <ul className="listing-features">
                <li>Professional business mailing address</li>
                <li>Payable on credit card</li>
                <li>Month-to-month terms</li>
                <li>No long-term commitment required</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Inquire Now
              </Link>
            </div>

            <div className="listing-card">
              <div className="listing-badge badge-soon">Coming Soon</div>
              <h2>Storefront Offices</h2>
              <div className="listing-price">
                <span className="price">Contact Us</span>
              </div>
              <ul className="listing-features">
                <li>Street-level commercial space</li>
                <li>High-visibility location</li>
                <li>May become available within the next few months</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">
                Join Waitlist
              </Link>
            </div>

            <div className="listing-card">
              <div className="listing-badge">Available</div>
              <h2>Individual Offices</h2>
              <div className="listing-price">
                <span className="price">$695</span>
                <span className="period">/month</span>
              </div>
              <ul className="listing-features">
                <li>Private office space</li>
                <li>Utility fee: $100/month</li>
                <li>Includes WiFi, electricity, HVAC, water, trash</li>
                <li>Professional environment</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container center">
          <h2>Looking for Something Else?</h2>
          <p>
            We also offer warehouse/office combinations and residential units.
            Contact us to discuss your specific needs and we'll help find the
            right space for you.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
