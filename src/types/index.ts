export interface PageLink {
  anchor: string;
  link: string;
}

export interface PageData {
  id: string;
  type: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  slug: string;
  internalLinks: PageLink[];
  externalLink: PageLink | null;
  wordCount: string;
  contentHtml: string;
  image: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  address: string;
  mapIframe: string;
}

export interface SiteData {
  business: BusinessInfo;
  homepage: PageData;
  services: PageData[];
  locations: PageData[];
  blogs: PageData[];
}
