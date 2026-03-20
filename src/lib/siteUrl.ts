export const DEFAULT_SITE_URL = "https://snhpainting.com";

export function resolvePublicSiteUrl(rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL): string {
  const primaryValue = rawSiteUrl
    ?.split(",")
    .map((entry) => entry.trim())
    .find(Boolean);

  const candidate = primaryValue || DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function resolvePublicSiteHostname(rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL): string {
  return new URL(resolvePublicSiteUrl(rawSiteUrl)).hostname.replace(/^www\./, "");
}
