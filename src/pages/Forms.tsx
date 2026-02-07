import { Link } from "react-router-dom";

export default function Forms() {
  return (
    <>
      <section className="page-header">
        <h1>Forms</h1>
        <p>Downloadable forms and documents</p>
      </section>

      <section className="section">
        <div className="container center">
          <div className="forms-placeholder">
            <div className="forms-icon">&#128196;</div>
            <h2>Files Coming Soon</h2>
            <p>
              Downloadable forms and documents will be available here shortly.
              In the meantime, please contact us directly for any forms you may
              need.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
