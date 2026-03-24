export const DEFAULT_SITE_URL = "https://snhpainting.com";

const DEPRECATED_HOSTNAME_MAP: Record<string, string> = {
  "snmpainting.com": "snhpainting.com",
  "www.snmpainting.com": "snhpainting.com",
};

function normalizeSiteUrl(candidate: string): string {
  const withProtocol = /^https?:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`;

  try {
    const parsedUrl = new URL(withProtocol);
    const normalizedHostname =
      DEPRECATED_HOSTNAME_MAP[parsedUrl.hostname] ?? parsedUrl.hostname;

    return new URL(
      `${parsedUrl.protocol}//${normalizedHostname}${parsedUrl.port ? `:${parsedUrl.port}` : ""}`,
    ).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function resolvePublicSiteUrl(rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL): string {
  const primaryValue = rawSiteUrl
    ?.split(",")
    .map((entry) => entry.trim())
    .find(Boolean);

  const candidate = primaryValue || DEFAULT_SITE_URL;

  return normalizeSiteUrl(candidate);
}

export function resolvePublicSiteHostname(rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL): string {
  return new URL(resolvePublicSiteUrl(rawSiteUrl)).hostname.replace(/^www\./, "");
}
