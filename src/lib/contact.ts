export const CONTACT_INFO = {
  email: "Sandhpaintingllc@gmail.com",
  phoneDigits: "8133253931",
  phoneDisplay: "(813) 325-3931",
  phoneE164: "+18133253931",
} as const;

export const CONTACT_LINKS = {
  email: `mailto:${CONTACT_INFO.email}`,
  phone: `tel:${CONTACT_INFO.phoneE164}`,
} as const;

export function buildMailtoUrl(subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `${CONTACT_LINKS.email}?${params.toString()}`;
}
