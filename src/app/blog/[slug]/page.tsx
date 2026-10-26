import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, BookOpen, ArrowLeft, ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { siteData, getBlogBySlug } from '@/lib/data';
import ContentRenderer from '@/components/ContentRenderer';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteData.blogs.map(b => {
    // b.slug is e.g. "/blog/how-often-to-clean-chimney-north-texas/"
    const cleanSlug = b.slug.replace(/^\/blog\//, '').replace(/\/$/, '');
    return { slug: cleanSlug };
  });
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: post.slug,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `https://chimneysweeptanglewood.site${post.slug}`,
      type: 'article',
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const { business, blogs } = siteData;
  const otherPosts = blogs.filter(b => b.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium truncate max-w-xs">{post.title}</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Chimney & Fireplace Guide</span>
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            {post.metaDescription}
          </p>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border-2 border-navy-700 shadow-2xl bg-navy-950 max-w-3xl mx-auto">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-12 border border-slate-200/80 shadow-sm">
            <ContentRenderer html={post.contentHtml} />

            {/* Preserve External and Internal Links */}
            {post.externalLink && (
              <div className="mt-10 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  External Resource:{' '}
                  <a
                    href={post.externalLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 font-bold underline hover:text-amber-700"
                  >
                    {post.externalLink.anchor}
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Call CTA Banner inside article */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-950 text-white border border-navy-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Need Professional Assistance?
              </span>
              <h3 className="text-xl font-bold font-serif mt-1 text-white">
                Contact Embercrest Chimney Sweep Tanglewood
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                2925 Riverglen Dr, Fort Worth, TX 76109 • Reliable chimney sweeping & repairs
              </p>
            </div>
            <a
              href={`tel:${business.phoneRaw}`}
              className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm tracking-wide uppercase transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call {business.phone}</span>
            </a>
          </div>

          {/* Related Articles */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-xl font-bold font-serif text-navy-950 mb-6">
                More Chimney Care Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map(p => (
                  <Link
                    key={p.slug}
                    href={p.slug}
                    className="group block p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all bg-slate-50/50"
                  >
                    <h4 className="font-bold text-sm text-navy-950 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 font-serif">
                      {p.title}
                    </h4>
                    <span className="text-xs font-semibold text-amber-600 inline-flex items-center gap-1">
                      <span>Read guide</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
