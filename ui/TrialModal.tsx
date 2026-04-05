"use client";

import { useState } from "react";

const CLASS_TIMES: Record<string, { value: string; label: string }[]> = {
  Wednesday: [
    { value: "5:00pm", label: "5:00pm — Ages 5–8" },
    { value: "6:30pm", label: "6:30pm — Ages 9+" },
    { value: "7:15pm", label: "7:15pm — Adults" },
  ],
  Friday: [
    { value: "5:00pm", label: "5:00pm — Ages 5–8" },
    { value: "6:30pm", label: "6:30pm — Ages 9+" },
    { value: "7:15pm", label: "7:15pm — Adults" },
  ],
  Saturday: [
    { value: "9:00am", label: "9:00am — Kids Competition Class" },
    { value: "9:45am", label: "9:45am — Adults Class" },
  ],
};

const DEFAULT_DAY = "Wednesday";

export default function TrialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDay: DEFAULT_DAY,
    classTime: CLASS_TIMES[DEFAULT_DAY][0].value,
  });

  const handleOpen = () => {
    setIsOpen(true);
    setIsSubmitted(false);
    setError(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDay: DEFAULT_DAY,
      classTime: CLASS_TIMES[DEFAULT_DAY][0].value,
    });
    setError(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "preferredDay") {
      setFormData((prev) => ({
        ...prev,
        preferredDay: value,
        classTime: CLASS_TIMES[value][0].value,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/trial-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
        setIsSubmitted(false);
      }, 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const times = CLASS_TIMES[formData.preferredDay];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition"
      >
        Book Your Free Trial
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="bg-dark-surface border border-primary/30 rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-primary mb-2">
              Start Your Free Trial
            </h2>
            <p className="text-light-text/80 mb-6">
              One week of free training. No commitment required.
            </p>

            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Thanks for signing up!
                </h3>
                <p className="text-light-text/80">
                  We'll contact you soon to confirm your trial class time. We're
                  excited to train with you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-light-text mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-text mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-text mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-primary/30 rounded text-light-text placeholder-muted focus:outline-none focus:border-primary"
                    placeholder="(706) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-text mb-1">
                    Preferred Day
                  </label>
                  <select
                    name="preferredDay"
                    value={formData.preferredDay}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-bg border border-primary/30 rounded text-light-text focus:outline-none focus:border-primary"
                  >
                    <option value="Wednesday">Wednesday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-text mb-1">
                    Class Time
                  </label>
                  <select
                    name="classTime"
                    value={formData.classTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-bg border border-primary/30 rounded text-light-text focus:outline-none focus:border-primary"
                  >
                    {times.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 bg-primary text-dark-bg font-bold rounded hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Booking..." : "Book Trial"}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 bg-dark-bg border border-primary/30 text-light-text font-bold rounded hover:border-primary transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
