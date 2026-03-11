"use client";

import { useState, type FormEvent } from "react";
import SuccessMessage from "./SuccessMessage";

const tiers = [
  "Tier 1 – DIY Bartender",
  "Tier 2 – Batch & Drop",
  "Tier 3 – Full Service Bar",
  "Tier 4 – Luxury Open Bar",
  "Not sure yet",
];

const cupOptions = ["Plastic Cups", "Glassware Rental", "Not sure yet"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email emma@tbmixology.com directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <SuccessMessage />;

  const inputClass =
    "w-full bg-transparent border-b border-border-gold px-0 py-3 text-text text-sm font-body placeholder:text-text-muted focus:border-gold transition-colors";
  const labelClass =
    "text-xs tracking-[0.15em] uppercase text-text-muted font-body mb-1 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Client Information */}
      <div>
        <h3 className="font-heading text-2xl text-text mb-6">
          Client Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="firstName" className={labelClass}>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Last name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Event Information */}
      <div>
        <h3 className="font-heading text-2xl text-text mb-6">
          Event Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="md:col-span-2">
            <label htmlFor="eventAddress" className={labelClass}>Event Address (if known)</label>
            <input
              type="text"
              id="eventAddress"
              name="eventAddress"
              placeholder="123 Main St, Tampa, FL"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="locationType" className={labelClass}>
              Event Location Type / Extra Details
            </label>
            <textarea
              id="locationType"
              name="locationType"
              rows={2}
              placeholder="e.g., Backyard, rooftop, venue name, indoor/outdoor"
              className={`${inputClass} resize-none`}
            />
          </div>
          <div>
            <label htmlFor="eventDate" className={labelClass}>Date of Event</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              className={`${inputClass} [color-scheme:dark]`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startTime" className={labelClass}>Start Time</label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
            <div>
              <label htmlFor="endTime" className={labelClass}>End Time</label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="eventType" className={labelClass}>Type of Event</label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              placeholder="Birthday, Wedding, Corporate, Holiday Party"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="eventTheme" className={labelClass}>Event Theme</label>
            <input
              type="text"
              id="eventTheme"
              name="eventTheme"
              placeholder="e.g., Tropical, Great Gatsby, Rustic"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="guestCount" className={labelClass}>
              Approx. Number of Guests Drinking
            </label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              min="1"
              placeholder="25"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="beverageTypes" className={labelClass}>
              What kinds of beverages?
            </label>
            <input
              type="text"
              id="beverageTypes"
              name="beverageTypes"
              placeholder="Cocktails, mocktails, wine, beer"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="tier" className={labelClass}>
              Which tier are you most interested in?
            </label>
            <select
              id="tier"
              name="tier"
              className={`${inputClass} cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a tier
              </option>
              {tiers.map((t) => (
                <option key={t} value={t} className="bg-surface text-text">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bar Preferences */}
      <div>
        <h3 className="font-heading text-2xl text-text mb-6">
          Bar Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="budget" className={labelClass}>
              Budget (optional)
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="We'll do our best to accommodate"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="specificDrinks" className={labelClass}>
              Any specific drinks you want?
            </label>
            <input
              type="text"
              id="specificDrinks"
              name="specificDrinks"
              placeholder="Margaritas, Espresso Martini, Old Fashioned"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>
              Plastic cups or glassware rental?
            </label>
            <div className="flex flex-wrap gap-6 mt-2">
              {cupOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer text-sm text-text-muted font-body hover:text-text transition-colors"
                >
                  <input
                    type="radio"
                    name="cupPreference"
                    value={option}
                    className="accent-gold"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="anythingElse" className={labelClass}>
              Anything else we should know?
            </label>
            <textarea
              id="anythingElse"
              name="anythingElse"
              rows={3}
              placeholder="Special requests, allergies, accessibility needs, or anything that would help us plan"
              className={`${inputClass} resize-none`}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="referral" className={labelClass}>
              Where did you hear about us?
            </label>
            <input
              type="text"
              id="referral"
              name="referral"
              placeholder="Instagram, Google, friend referral, etc."
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm font-body">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto bg-gold text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-champagne transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send My Event Details"}
      </button>
    </form>
  );
}
