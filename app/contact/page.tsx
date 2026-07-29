"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactPageStyles } from "@/lib/dummyStyles";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", user_email: "", subject: "", message: "" });

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again or email me directly.");

      // Auto-dismiss error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const getLabelClass = (field: string) => {
    const isFocused = focused === field;
    const hasValue = formData[field as keyof typeof formData] !== "";
    return `${contactPageStyles.formLabelBase} ${
      isFocused || hasValue
        ? contactPageStyles.formLabelFocused
        : contactPageStyles.formLabelUnfocused
    }`;
  };

  return (
    <div className={contactPageStyles.pageContainer}>
      <div className={contactPageStyles.contentContainer}>
        <div className={contactPageStyles.formOuterContainer}>
          <div className={contactPageStyles.backgroundOverlay} />

          {/* Status Toast Notification */}
          {status !== "idle" && status !== "sending" && (
            <div
              style={{
                position: "fixed",
                top: "2rem",
                right: "2rem",
                zIndex: 100,
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                backdropFilter: "blur(12px)",
                border: "1px solid",
                borderColor: status === "success" ? "rgba(52, 211, 153, 0.3)" : "rgba(248, 113, 113, 0.3)",
                background: status === "success"
                  ? "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 95, 70, 0.15))"
                  : "linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(153, 27, 27, 0.15))",
                color: status === "success" ? "#6ee7b7" : "#fca5a5",
                fontSize: "0.9rem",
                fontWeight: 500,
                maxWidth: "400px",
                animation: "slideInRight 0.4s ease-out",
                boxShadow: status === "success"
                  ? "0 4px 20px rgba(16, 185, 129, 0.2)"
                  : "0 4px 20px rgba(239, 68, 68, 0.2)",
              }}
            >
              {statusMessage}
            </div>
          )}

          {/* Header */}
          <div className={contactPageStyles.headerContainer}>
            <h1 className={contactPageStyles.headerTitle}>Get in Touch</h1>
            <p className={contactPageStyles.headerSubtitle}>
              Have a project idea or want to collaborate? Reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className={contactPageStyles.contactMethodsGrid}>
            <a
              href="mailto:malikneha@gmail.com"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Email</p>
                <p className={contactPageStyles.contactValue}>
                  malikneha@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/neha-malik-5918a2258/"
              target="_blank"
              rel="noopener noreferrer"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>LinkedIn</p>
                <p className={contactPageStyles.contactValue}>Neha Malik</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className={contactPageStyles.formContainer}>
            <div className={contactPageStyles.formGrid}>
              {/* Name Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="name" className={getLabelClass("name")}>
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  onFocus={() => setFocused("user_email")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="your@email.com"
                  required
                />
                <label htmlFor="user_email" className={getLabelClass("user_email")}>
                  Email
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                className={contactPageStyles.formInput}
                placeholder="Project Collaboration"
                required
              />
              <label htmlFor="subject" className={getLabelClass("subject")}>
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={6}
                className={contactPageStyles.formTextarea}
                placeholder="Tell me about your project..."
                required
              />
              <label htmlFor="message" className={getLabelClass("message")}>
                Message
              </label>
            </div>

            {/* Submit */}
            <div className={contactPageStyles.submitButtonContainer}>
              <button
                type="submit"
                className={contactPageStyles.submitButton}
                disabled={status === "sending"}
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                <span className={contactPageStyles.submitButtonText}>
                  {status === "sending" ? (
                    <>
                      <svg
                        style={{
                          animation: "spin 1s linear infinite",
                          width: "1.25rem",
                          height: "1.25rem",
                          marginRight: "0.5rem",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          style={{ opacity: 0.25 }}
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          style={{ opacity: 0.75 }}
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className={contactPageStyles.submitButtonIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          {/* Alternative */}
          <p className={contactPageStyles.alternativeText}>
            Or email me directly at{" "}
            <a
              href="mailto:malikneha@gmail.com"
              className={contactPageStyles.alternativeLink}
            >
              malikneha@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
