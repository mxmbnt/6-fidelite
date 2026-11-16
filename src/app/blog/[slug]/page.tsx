/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Markdown } from '@/components/Markdown'
import { CTA_HREF } from '@/content/site'
import { articles, getArticle } from '@/content/blog'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug)
  return a ? { title: a.title, description: a.excerpt } : {}
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug)
  if (!a) notFound()
  const related = articles.filter((r) => r.slug !== a.slug).slice(0, 3)
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-blog">
<Nav />
<section className="section_hero">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap is-blog-template">
<h1 className="heading-style-display is-white">{a.title}</h1>
<div className="blog_date-wrap is-blog">
<div className="blog_date-title-wrap">
<Link href="/blog" className="text-size-xxsmall is-white">{a.readTime}</Link>
</div>
<div className="blog_date-title-wrap">
<Link href={`/blog/${a.slug}`} className="text-size-xxsmall is-white">{a.date}</Link>
</div>
<div className="blog_date-title-wrap is-insight">
<Link href="/blog" className="text-size-xxsmall is-white">{a.category}</Link>
</div>
</div>
</div>
<div className="olivia_wrap">
<div className="olivia_flex-wrap">
<img width={57} height={57} src="/img/frame-2147237242.webp" loading="lazy" alt="" className="olivia_logo-img" />
<div className="olivia_title-wrap">
<h2 className="heading-style-h5">{a.author.name}</h2>
<div className="text-size-regular">{a.author.bio}</div>
<div className="footer_social-logo-flex">
<a href="https://www.linkedin.com/" className="footer_social-logo-wrap w-inline-block">
<img src="/img/mdi_linkedin-5-.svg" loading="lazy" alt="" className="feature_logo-img" />
</a>
<a href="https://www.x.com" className="footer_social-logo-wrap w-inline-block">
<img src="/img/prime_twitter-9-.svg" loading="lazy" alt="" className="feature_logo-img" />
</a>
<a href="https://www.facebook.com/" className="footer_social-logo-wrap w-inline-block">
<img src="/img/iconoir_facebook-4-.svg" loading="lazy" alt="" className="feature_logo-img" />
</a>
<a href="https://www.instagram.com/" className="footer_social-logo-wrap w-inline-block">
<img src="/img/mdi_instagram-6-.svg" loading="lazy" alt="" className="feature_logo-img" />
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
<div className="blog_template-img">
<div className="blog_img-cms">
<img src={a.cover} alt="" className="blog_img" />
</div>
</div>
<section className="section_rich-text">
<div className="container-large">
<div className="blog_rich-wrap">
<Markdown source={a.body} className="blog_rich-text w-richtext" />
</div>
</div>
</section>
<section className="section_blog is-bottom">
<div className="container-large">
<div className="blog_wrap">
<h2 className="heading-style-display">Articles similaires</h2>
<div className="blog_flex-wrap is-blog">
{related.map((r) => (
<Link key={r.slug} href={`/blog/${r.slug}`} className="blog_card is-blog">
<img loading="lazy" src={r.cover} alt="" />
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">{r.readTime}</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">{r.date}</div>
</div>
</div>
<div className="button_arrow-wrap">
<img loading="lazy" src="/img/guidance_up-arrow-5-.svg" alt="" />
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">{r.title}</h3>
<div className="text-size-regular">{r.excerpt}</div>
</div>
</Link>
))}

</div>
</div>
</div>
</section>
<section className="section_boost">
<div className="container-large">
<div className="hero_wrap is-boost">
<div className="hero_title-wrap">
<div className="boost_title-wrap">
<h2 className="heading-style-h2 text-color-white">Faites revenir vos clients plus souvent</h2>
</div>
<div className="hero_content-wrap is-boost">
<p className="text-size-regular is-white">Créez votre carte de fidélité digitale en 5 minutes et offrez à vos clients une expérience moderne, directement dans leur téléphone.</p>
</div>
<div className="button_group is-scroll">
<a href="https://www.apple.com/app-store/" className="primary_btn w-inline-block">
<div className="hero_btn">
<div className="hero_btn-flex">
<div className="btn-text-wrap">
<div className="text-1">Essai gratuit</div>
<div className="text-2">Essai gratuit</div>
</div>
<img src="/img/frame-2147235889.svg" loading="lazy" alt="" className="button_logo" />
</div>
</div>
</a>
<a href={CTA_HREF} className="secondary_btn w-inline-block">
<div className="demo-text-wrap">
<div className="static-text">Contact</div>
<div className="absolute-text">Contact</div>
</div>
</a>
</div>
</div>
<div className="boost_img-wrap">
<img src="/img/mz5g123sn8zuzbpskrwrsnezg9a.webp" loading="lazy" alt="Écran de smartphone montrant l'application" className="boost_phone-left-img" />
<img src="/img/hbq3maa5lyz7fjuvf487asqbrm.webp" loading="lazy" alt="Écran de smartphone montrant l'application" className="boost_phone-right-img" />
</div>
</div>
</div>
<img src="/img/vector-526-2-.webp" loading="lazy" alt="motif de fond" className="boost_bg-img" />
<img src="/img/background-lines-only-v2.webp" loading="lazy" alt="" className="boost_lines-img" />
</section>
<Footer />
</div>

</>
  )
}
