"use client";

type ServiceEnquiryLinkProps = {
  service: string;
  title: string;
};

export function ServiceEnquiryLink({ service, title }: ServiceEnquiryLinkProps) {
  function selectService() {
    window.dispatchEvent(
      new CustomEvent("mobhub:service-selected", {
        detail: service,
      }),
    );
  }

  return (
    <a href="#concierge" onClick={selectService} aria-label={`Discuss ${title} with Mob Hub`}>
      Discuss this service <span aria-hidden="true">↗</span>
    </a>
  );
}