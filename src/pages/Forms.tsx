import { Link } from "react-router-dom";

const forms = [
  { name: "7 Rental Questions", description: "Questions to consider before renting" },
  { name: "Non-Discrimination Policy", description: "Our fair housing policy" },
  { name: "Rental Application (Credit Information)", description: "Credit check and application form" },
  { name: "Residential Lease", description: "Standard residential lease agreement" },
  { name: "Virtual Office Agreement", description: "Virtual office and mailbox service terms" },
  { name: "Commercial Lease", description: "Commercial space lease agreement" },
  { name: "Tenant Insurance Example", description: "Sample tenant insurance form" },
];

export default function Forms() {
  return (
    <>
      <section className="page-header">
        <h1>Forms</h1>
        <p>Downloadable forms and documents</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="forms-list">
            {forms.map((form) => (
              <div key={form.name} className="form-item">
                <div className="form-item-icon">&#128196;</div>
                <div className="form-item-info">
                  <h3>{form.name}</h3>
                  <p>{form.description}</p>
                </div>
                <span className="form-item-status">Contact us for a copy</span>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: "2rem" }}>
            <p>
              To request any of these forms, please contact us directly.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: "1rem", display: "inline-block" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
