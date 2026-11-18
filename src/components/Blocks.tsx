/* eslint-disable @next/next/no-img-element */
/* Blocs communes aux pages (mêmes classes Webflow que le template d'origine). */
import Link from 'next/link'
import { CTA_HREF, CTA_LABEL, METIERS, REASSURANCE, type QR } from '@/content/site'

/** Bouton principal du template (texte qui glisse au survol) */
export function PrimaryBtn({ label = CTA_LABEL, href = CTA_HREF }: { label?: string; href?: string }) {
  return (
<a href={href} className="primary_btn w-inline-block">
<div className="hero_btn">
<div className="hero_btn-flex">
<div className="btn-text-wrap">
<div className="text-1">{label}</div>
<div className="text-2">{label}</div>
</div>
<img loading="lazy" src="/img/arrow-cta.svg" alt="" className="button_logo" />
</div>
</div>
</a>
  )
}

export function SecondaryBtn({ label, href }: { label: string; href: string }) {
  return (
<Link href={href} className="secondary_btn w-inline-block">
<div className="demo-text-wrap">
<div className="static-text">{label}</div>
<div className="absolute-text">{label}</div>
</div>
</Link>
  )
}

/** « Sans carte bancaire · Sans engagement · … » */
export function Reassurance({ light = false }: { light?: boolean }) {
  return (
<ul className={'reassurance' + (light ? ' is-light' : '')}>
{REASSURANCE.map((r) => <li key={r}>{r}</li>)}
</ul>
  )
}

/** Puce cochée (liste « Points clés ») */
export function Check({ children, white = false }: { children: React.ReactNode; white?: boolean }) {
  return (
<div className="pricing_key-highlight-flex">
<img src={white ? '/img/frame-2147235673-2-.svg' : '/img/frame-2147235673-1-.svg'} loading="lazy" alt="" className="shared_list-item-logo" />
<div className={white ? 'text-size-regular is-white is-large' : 'text-size-regular text-color-black'}>{children}</div>
</div>
  )
}

/** Bandeau défilant des métiers (remplace les logos « Grayscale » du template) */
export function MetiersMarquee() {
  const words = [...METIERS, ...METIERS]
  return (
<section className="section_marquee-alt">
<div className="container-large">
<section className="section_marquee" aria-label="Métiers équipés">
<div className="padding-section-medium-alt">
<div className="marquee_component-alt">
<div className="marquee_list-alt">
<div className="marquee_alt-wrap">
{words.map((w, i) => <span key={i} className="marquee_word" aria-hidden={i >= METIERS.length}>{w}</span>)}
</div>
</div>
</div>
</div>
</section>
</div>
</section>
  )
}

export function Faq({ title = 'Vos questions', intro, items }: { title?: string; intro: string; items: QR[] }) {
  return (
<section className="section_faq">
<div className="container-large">
<div className="faq_title-wrap">
<h2 className="heading-style-h2">{title}</h2>
<div className="faq_content-wrap">
<div className="text-size-regular is-faq">{intro}</div>
</div>
</div>
<div className="faq_content">
{items.map(({ q, r }) => (
<div className="faq_wrapper" key={q}>
<a role="button" tabIndex={0} className="faq_question w-inline-block">
<div className="faq_question-wrapper">
<div className="heading-style-h5 is-w-400">{q}</div>
</div>
<div className="faq_icon-wrapper">
<img loading="lazy" src="/img/plus.svg" alt="" className="button_arrow-img" />
</div>
</a>
<div className="faq_answer">
<div className="margin-bottom margin-medium">
<div className="faq_answer-text text-color-secondary">{r}</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>
  )
}

/** Bandeau final violet avec deux téléphones */
export function FinalCta({
  title = 'Prêt à faire revenir vos habitués ?',
  text = 'Créez votre carte en 5 minutes et testez Loyna pendant un mois, avec vos vrais clients. Si ça ne vous convient pas, vous n’avez rien à faire : rien ne sera prélevé.',
}: { title?: string; text?: string }) {
  return (
<section className="section_boost">
<div className="container-large">
<div className="hero_wrap is-boost">
<div className="hero_title-wrap">
<div className="boost_title-wrap">
<h2 className="heading-style-h2 text-color-white">{title}</h2>
</div>
<div className="hero_content-wrap is-boost">
<p className="text-size-regular is-white">{text}</p>
</div>
<div className="button_group is-scroll">
<PrimaryBtn />
<SecondaryBtn label="Être rappelé" href="/contact" />
</div>
<Reassurance light />
</div>
<div className="boost_img-wrap">
<img src="/img/mz5g123sn8zuzbpskrwrsnezg9a.webp" loading="lazy" alt="Carte de fidélité Le Fournil dans Apple Wallet, 6 tampons sur 10" className="boost_phone-left-img" />
<img src="/img/hbq3maa5lyz7fjuvf487asqbrm.webp" loading="lazy" alt="Écran de verrouillage avec des notifications de cartes de fidélité" className="boost_phone-right-img" />
</div>
</div>
</div>
<img src="/img/vector-526-2-.webp" loading="lazy" alt="" className="boost_bg-img" />
<img src="/img/background-lines-only-v2.webp" loading="lazy" alt="" className="boost_lines-img" />
</section>
  )
}
