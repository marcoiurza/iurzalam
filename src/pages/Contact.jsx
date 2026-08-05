import { useState } from "react";
import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { CheckIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "../components/Icons";
import { siteMeta } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

const countryOptions = ["United Kingdom", "Netherlands", "Belgium", "Poland", "Germany", "Switzerland", "Italy", "Other"];
const subjectOptions = [
  "General Enquiry",
  "Product Specification Request",
  "Certification Documentation",
  "Warehouse Supply Enquiry",
  "Full Container Enquiry",
  "Sample Request",
  "Other"
];
const referralOptions = ["Existing relationship", "Industry referral", "Online search", "Trade event", "Other"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const layoutRef = useReveal();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageTitle
        title="Contact"
        description="Contact Vertex Laminati's Swiss headquarters or Italian logistics branch for product specifications, samples, documentation, stock supply, and direct-container programmes."
        path="/contact"
      />

      <main>
        <section className="contact-hero">
          <div className="contact-hero__content">
            <h1>
              Let&apos;s create <em>new possibilities.</em>
            </h1>
            <p>We respond to professional enquiries within one business day.</p>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={layoutRef} className="contact-layout reveal">
            <div className="contact-layout__copy">
              <h2>Intelligent guidance, tailored supply</h2>
              <p>
                Whether you want specification guidance, a stocking arrangement, documentation, or the right product
                line mapped for your market, Vertex Laminati SA is set up to support distributor and fabrication-led enquiries.
              </p>

              <div className="contact-blocks">
                <div className="contact-block">
                  <div className="contact-block__icon">
                    <MailIcon />
                  </div>
                  <div>
                    <strong>{siteMeta.email}</strong>
                    <span>Commercial desk</span>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-block__icon">
                    <PhoneIcon />
                  </div>
                  <div>
                    <strong>{siteMeta.phone}</strong>
                    <span>Mon–Fri, business hours CET</span>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-block__icon">
                    <PinIcon />
                  </div>
                  <div>
                    <strong>{siteMeta.address}</strong>
                    <span>Swiss registered office · UID {siteMeta.uid}</span>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-block__icon">
                    <PinIcon />
                  </div>
                  <div>
                    <strong>{siteMeta.logisticsHub}</strong>
                    <span>Italian branch &amp; logistics hub · VAT {siteMeta.italianVat}</span>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-block__icon">
                    <ClockIcon />
                  </div>
                  <div>
                    <strong>{siteMeta.responseTime}</strong>
                    <span>For all professional enquiries</span>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                We supply distributors, fabricators, joinery manufacturers, and project-led commercial buyers. The
                site is not intended for consumer retail sales.
              </div>
            </div>

            <div className="contact-form-card">
              {!submitted ? (
                <>
                  <h3>Send us a message</h3>
                  <p>All fields marked * are required.</p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row form-row--two">
                      <label>
                        <span>Full name*</span>
                        <input type="text" name="fullName" required />
                      </label>
                      <label>
                        <span>Company name*</span>
                        <input type="text" name="company" required />
                      </label>
                    </div>

                    <div className="form-row form-row--two">
                      <label>
                        <span>Email*</span>
                        <input type="email" name="email" required />
                      </label>
                      <label>
                        <span>Country</span>
                        <select name="country" defaultValue="">
                          <option value="" disabled>
                            Select a country
                          </option>
                          {countryOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        <span>Subject</span>
                        <select name="subject" defaultValue="">
                          <option value="" disabled>
                            Select a subject
                          </option>
                          {subjectOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        <span>Message*</span>
                        <textarea name="message" rows="5" required />
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        <span>How did you hear about us?</span>
                        <select name="referral" defaultValue="">
                          <option value="" disabled>
                            Select an option
                          </option>
                          {referralOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <button className="btn-primary contact-form__submit" type="submit">
                      {"Send Message ->"}
                    </button>
                  </form>
                  <p className="contact-form__privacy">
                    Your information is processed in line with GDPR principles and used only to respond to your
                    enquiry.
                  </p>
                </>
              ) : (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <CheckIcon />
                  </div>
                  <h3>Message received.</h3>
                  <p>We will be in touch within one business day.</p>
                  <Link className="btn-text" to="/">
                    Return to home
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
