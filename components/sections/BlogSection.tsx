import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Post = {
  category: string
  date: string
  title: string
  excerpt: string
  image?: string
}

const posts: Post[] = [
  {
    category: 'Development',
    date: '12 Feb, 2023',
    title: 'Agency launches experts media expert workshops',
    excerpt: 'We believe in the synergy of human expertise and innovative technology for lasting business results.',
    image: 'https://picsum.photos/seed/blog_dev/900/700',
  },
  {
    category: 'Business',
    date: '12 Feb, 2023',
    title: '10 Proven strategies for marketing success',
    excerpt: 'We believe in the synergy of human expertise and innovative technology for lasting business results.',
  },
  {
    category: 'Interior',
    date: '12 Feb, 2023',
    title: 'How to effectively conduct market research',
    excerpt: 'We believe in the synergy of human expertise and innovative technology for lasting business results.',
  },
]

function ReadMoreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-primary text-sm font-bold border-b border-primary/40 pb-0.5 hover:gap-3 hover:border-primary transition-all duration-200 self-start mt-auto"
    >
      Read More <ArrowUpRight size={15} />
    </Link>
  )
}

export default function BlogSection() {
  const [featured, ...rest] = posts

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 xl:mb-16">
          <span className="section-tag mb-4">Articles</span>
          <h2 className="section-title max-w-2xl mt-3">
            Uncover the Latest Industry{' '}
            <br className="hidden sm:block" />
            Insights and Articles
          </h2>
        </div>

        {/* Grid: featured + side cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 xl:gap-8">

          {/* Featured Post */}
          <article className="bg-brand-gray rounded-2xl p-4 xl:p-6 flex flex-col h-full group">
            {/* Thumbnail */}
            <div className="relative rounded-xl overflow-hidden mb-5 aspect-[4/3]">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Link href="/blog/detail" className="absolute inset-0" aria-label={featured.title} />
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between mb-3">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <span className="text-gray-400 text-sm">{featured.date}</span>
            </div>

            <h3 className="font-heading font-bold text-xl xl:text-2xl text-brand-dark mb-2 hover:text-primary transition-colors leading-snug">
              <Link href="/blog/detail">{featured.title}</Link>
            </h3>
            <p className="text-gray-500 text-sm xl:text-base flex-1 mb-4 leading-relaxed">
              {featured.excerpt}
            </p>
            <ReadMoreLink href="/blog/detail" />
          </article>

          {/* Side Posts */}
          <div className="flex flex-col gap-5 xl:gap-6">
            {rest.map((post) => (
              <article
                key={post.title}
                className="bg-brand-gray rounded-2xl p-4 xl:p-6 flex flex-col flex-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="font-heading font-bold text-lg xl:text-xl text-brand-dark mb-2 hover:text-primary transition-colors leading-snug flex-1">
                  <Link href="/blog/detail">{post.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <ReadMoreLink href="/blog/detail" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
