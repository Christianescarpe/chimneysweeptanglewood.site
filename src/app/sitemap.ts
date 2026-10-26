import type { MetadataRoute } from 'next';
import { siteData } from '@/lib/data';

const BASE_URL = 'https://www.chimneysweeptanglewood.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 10 Service Pages
  const servicePages: MetadataRoute.Sitemap = siteData.services.map((service) => {
    const slug = service.slug.endsWith('/') ? service.slug : `${service.slug}/`;
    return {
      url: `${BASE_URL}${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    };
  });

  // 10 Location Pages
  const locationPages: MetadataRoute.Sitemap = siteData.locations.map((location) => {
    const slug = location.slug.endsWith('/') ? location.slug : `${location.slug}/`;
    return {
      url: `${BASE_URL}${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    };
  });

  // 10 Blog Guides
  const blogPages: MetadataRoute.Sitemap = siteData.blogs.map((blog) => {
    const slug = blog.slug.endsWith('/') ? blog.slug : `${blog.slug}/`;
    return {
      url: `${BASE_URL}${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    };
  });

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
