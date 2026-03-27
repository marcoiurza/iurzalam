import { useState } from "react";
import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import { CheckIcon, ClockIcon, MailIcon, PinIcon } from "../components/Icons";
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
      <PageTitle title="Contact · IurzaLam" />

      <main>
        <section className="contact-hero">
          <div className="contact-hero__content">
            <h1>
              Let&apos;s <em>talk.</em>
            </h1>
            <p>We respond to all professional enquiries within one business day.</p>
          </div>
        </section>

        <section className="section section--stone">
          <div ref={layoutRef} className="contact-layout reveal">
            <div className="contact-layout__copy">
              <h2>Get in touch</h2>
              <p>
                Whether you are looking to discuss a supply arrangement, request certification documentation,
                explore logistics options, or simply understand what IurzaLam can offer — we would like to hear
                from you.
              </p>

              <div className="contact-blocks">
                <div className="contact-block">
                  <div className="contact-block__icon">
                    <MailIcon />
                  </div>
                  <div>
                    <strong>info@iurzalam.com</strong>
                    <span>Primary contact</span>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-block__icon">
                    <PinIcon />
                  </div>
                  <div>
                    <strong>London, UK · Italy warehouse</strong>
                    <span>European operations hub</span>
                  </div>
                </div>

                <div className="contact-block">
                  <div className="contact-block__icon">
                    <ClockIcon />
                  </div>
                  <div>
                    <strong>Within one business day</strong>
                    <span>For all professional enquiries</span>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                We supply fabricators, distributors, main contractors, and joinery manufacturers. We do not supply
                to end consumers or private individuals.
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
                      Send Message →
                    </button>
                  </form>
                  <p className="contact-form__privacy">
                    Your information is processed in accordance with GDPR. We do not share data with third
                    parties.
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
