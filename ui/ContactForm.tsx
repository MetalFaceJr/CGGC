"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send this data to a server
    console.log("Contact form submission:", formData);
    setIsSubmitted(true);

    // Reset after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-dark-surface border border-primary/30 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          Thanks for reaching out!
        </h3>
        <p className="text-light-text/80">
          We've received your message and will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-light-text mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-light-text mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-light-text mb-2">
          Phone (Optional)
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
          placeholder="(706) 000-0000"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-light-text mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
          placeholder="Trial class booking, pricing inquiry, etc."
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-light-text mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary resize-none"
          placeholder="Tell us what you'd like to know..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
      >
        Send Message
      </button>

      <p className="text-xs text-light-text/60 text-center">
        We'll get back to you within 24 hours. For urgent matters, please call
        us directly.
      </p>
    </form>
  );
}
