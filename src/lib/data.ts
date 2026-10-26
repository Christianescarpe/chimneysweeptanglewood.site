import rawData from '@/data/site-data.json';
import { SiteData, PageData } from '@/types';

export const siteData = rawData as unknown as SiteData;

export function getHomepage(): PageData {
  return siteData.homepage;
}

export function getAllServices(): PageData[] {
  return siteData.services;
}

export function getAllLocations(): PageData[] {
  return siteData.locations;
}

export function getAllBlogs(): PageData[] {
  return siteData.blogs;
}

export function getServiceBySlug(slug: string): PageData | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  const withTrailing = normalized.endsWith('/') ? normalized : `${normalized}/`;
  const withoutTrailing = normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;

  return siteData.services.find(
    s => s.slug === withTrailing || s.slug === withoutTrailing
  );
}

export function getLocationBySlug(slug: string): PageData | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  const withTrailing = normalized.endsWith('/') ? normalized : `${normalized}/`;
  const withoutTrailing = normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;

  return siteData.locations.find(
    l => l.slug === withTrailing || l.slug === withoutTrailing
  );
}

export function getBlogBySlug(slug: string): PageData | undefined {
  // Slug may be 'how-often-to-clean-chimney-north-texas' or '/blog/how-often-to-clean-chimney-north-texas/'
  const fullSlug = slug.includes('/blog/')
    ? slug
    : `/blog/${slug.replace(/^\/|\/$/g, '')}/`;

  const withoutTrailing = fullSlug.endsWith('/') ? fullSlug.slice(0, -1) : fullSlug;

  return siteData.blogs.find(
    b => b.slug === fullSlug || b.slug === withoutTrailing || b.slug.endsWith(`/${slug}/`) || b.slug.endsWith(`/${slug}`)
  );
}

export function getPageBySlug(slug: string): PageData | undefined {
  return (
    getServiceBySlug(slug) ||
    getLocationBySlug(slug) ||
    getBlogBySlug(slug) ||
    (slug === '/' || slug === '' ? siteData.homepage : undefined)
  );
}
