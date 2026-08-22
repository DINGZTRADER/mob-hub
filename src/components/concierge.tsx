"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Path = "podcasts" | "film" | "voice" | "visual" | "travel";
type Step = "service" | "details" | "ready";

function normalizeWhatsappNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("0") ? `256${digits.slice(1)}` : digits;
}

const WHATSAPP_CONTACTS = [
  {
    display: "0780 122 080",
    number: normalizeWhatsappNumber(
      process.env.NEXT_PUBLIC_MOBHUB_WHATSAPP_PRIMARY || "256780122080",
    ),
  },
  {
    display: "0787 735 756",
    number: normalizeWhatsappNumber(
      process.env.NEXT_PUBLIC_MOBHUB_WHATSAPP_SECONDARY || "256787735756",
    ),
  },
] as const;

const services: Record<Path, { label: string; shortLabel: string }> = {
  podcasts: {
    label: "Podcast or interview production",
    shortLabel: "Podcast & Interview Production",
  },
  film: {
    label: "Film or production support",
    shortLabel: "Film & Production Support",
  },
  voice: {
    label: "Voice-over recording",
    shortLabel: "Voice-Over Recording",
  },
  visual: {
    label: "Photography or videography",
    shortLabel: "Photography & Videography",
  },
  travel: {
    label: "Travel or tourism documentation",
    shortLabel: "Tourism & Travel Documentation",
  },
};

const choices = (Object.entries(services) as Array<[Path, (typeof services)[Path]]>).map(
  ([value, service]) => ({ value, label: service.label }),
);

function formatDate(value: string) {
  if (!value) return "Flexible / to be confirmed";

  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function Concierge() {
  const [step, setStep] = useState<Step>("service");
  const [selected, setSelected] = useState<Path | null>(null);
  const [location, setLocation] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [details, setDetails] = useState("");

  const message = useMemo(() => {
    if (!selected) return "";

    return [
      "Hello Mob Hub,",
      "",
      "I'd like to discuss a creative project.",
      "",
      `Service: ${services[selected].shortLabel}`,
      `Location: ${location.trim()}`,
      `Preferred date: ${formatDate(preferredDate)}`,
      `Project details: ${details.trim()}`,
      "",
      "Please let me know the next steps and what information you need from me.",
    ].join("\n");
  }, [details, location, preferredDate, selected]);

  const whatsappLinks = WHATSAPP_CONTACTS.map((contact) => ({
    ...contact,
    href: `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`,
  }));

  useEffect(() => {
    function handleServiceSelection(event: Event) {
      const path = (event as CustomEvent<string>).detail;
      if (path && path in services) {
        setSelected(path as Path);
        setStep("details");
      }
    }

    window.addEventListener("mobhub:service-selected", handleServiceSelection);
    return () => window.removeEventListener("mobhub:service-selected", handleServiceSelection);
  }, []);

  function chooseService(path: Path) {
    setSelected(path);
    setStep("details");
  }

  function submitDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || !location.trim() || !details.trim()) return;
    setStep("ready");
  }

  function startAgain() {
    setStep("service");
    setSelected(null);
    setLocation("");
    setPreferredDate("");
    setDetails("");
  }

  return (
    <div className="concierge-card">
      <div className="concierge-topline">
        <span>Mob Guide</span>
        <span className="status">
          <i /> Ready
        </span>
      </div>

      <div className="guide-progress" aria-label="Enquiry progress">
        <span className={step === "service" ? "active" : "complete"}>01 Service</span>
        <span className={step === "details" ? "active" : step === "ready" ? "complete" : ""}>
          02 Project
        </span>
        <span className={step === "ready" ? "active" : ""}>03 WhatsApp</span>
      </div>

      {step === "service" && (
        <fieldset className="guide-choices">
          <legend>What would you like Mob Hub to help you create?</legend>
          {choices.map((choice, index) => (
            <button key={choice.value} type="button" onClick={() => chooseService(choice.value)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {choice.label}
              <b aria-hidden="true">→</b>
            </button>
          ))}
        </fieldset>
      )}

      {step === "details" && selected && (
        <form className="guide-form" onSubmit={submitDetails}>
          <div className="guide-selection">
            <span>Selected service</span>
            <strong>{services[selected].shortLabel}</strong>
            <button type="button" onClick={() => setStep("service")}>
              Change
            </button>
          </div>

          <div className="form-grid">
            <label>
              <span>Where is the project?</span>
              <input
                required
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="e.g. Kampala, Jinja or on location"
                autoComplete="address-level2"
              />
            </label>

            <label>
              <span>Preferred date</span>
              <input
                type="date"
                value={preferredDate}
                onChange={(event) => setPreferredDate(event.target.value)}
              />
              <small>Optional — leave blank if your timing is flexible.</small>
            </label>
          </div>

          <label className="project-field">
            <span>Tell us briefly what you want to create</span>
            <textarea
              required
              rows={5}
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Example: A 45-minute founder interview for YouTube and social media, filmed at our office."
            />
          </label>

          <button className="button button-dark guide-submit" type="submit">
            Prepare WhatsApp enquiry <span aria-hidden="true">→</span>
          </button>
        </form>
      )}

      {step === "ready" && selected && (
        <div className="guide-ready" aria-live="polite">
          <p className="eyebrow">Your enquiry is ready</p>
          <h3>Send Mob Hub the useful details in one message.</h3>

          <dl className="enquiry-summary">
            <div>
              <dt>Service</dt>
              <dd>{services[selected].shortLabel}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{location}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{formatDate(preferredDate)}</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>{details}</dd>
            </div>
          </dl>

          <div className="whatsapp-options" aria-label="Choose a Mob Hub WhatsApp number">
            {whatsappLinks.map((contact) => (
              <a
                key={contact.number}
                className="button button-whatsapp"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {contact.display} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <div className="guide-actions">
            <button type="button" onClick={() => setStep("details")}>
              Edit details
            </button>
            <button type="button" onClick={startAgain}>
              Start again
            </button>
          </div>
        </div>
      )}

      <p className="privacy-note">
        Nothing is stored on this website. Your details are only placed into the WhatsApp message you choose to send.
      </p>
    </div>
  );
}