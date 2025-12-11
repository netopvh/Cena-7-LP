export const DEFAULT_SITE_URL = "https://example.com";

export const getSiteUrl = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  try {
    return new URL(siteUrl).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const getMetadataBase = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  try {
    return new URL(siteUrl);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
};

