import { useState, type FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-header">
        <h1>Call or Visit</h1>
        <p>
          Need to lease an office, storefront, warehouse, virtual
          office/mailbox or residential unit? Please contact us to see what is
          available.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="col">
              <div className="contact-info">
                <h2>Contact Information</h2>

                <div className="contact-item">
                  <h3>Address</h3>
                  <p>
                    229C Tewksbury Avenue
                    <br />
                    Point Richmond, CA 94801 USA
                  </p>
                </div>

                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+15105901099">(510) 590-1099</a>
                  </p>
                </div>

                <div className="contact-item">
                  <h3>Business Hours</h3>
                  <table className="hours-table">
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>9:00 AM &ndash; 5:00 PM</td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>9:00 AM &ndash; 5:00 PM</td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>9:00 AM &ndash; 5:00 PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>9:00 AM &ndash; 5:00 PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>9:00 AM &ndash; 5:00 PM</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>10:00 AM &ndash; 4:00 PM (by appointment)</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                {submitted ? (
                  <div className="form-success">
                    <p>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
