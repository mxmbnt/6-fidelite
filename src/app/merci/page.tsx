/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { FinalCta } from '@/components/Blocks'
import { CTA_HREF } from '@/content/site'

export default function ThanksPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-contact">
<Nav />
<section className="section_error">
<div className="container-large">
<div className="error_wrap">
<div className="error_img is-width">
<img src="/img/fe_smile-heart-1-.webp" loading="lazy" alt="icône sourire" className="error_number" />
</div>
<div className="error_content-wrap">
<div className="error_title-wrap is-width">
<h1 className="heading-style-h1">Merci !</h1>
<p className="text-size-regular is-center is-white">Merci pour votre message. Notre équipe revient vers vous très vite pour répondre à votre demande et vous aider à lancer votre carte Loyna.</p>
</div>
<div className="error_btn-wrap">
<Link href="/" className="error_btn w-button">Retour à l'accueil</Link>
</div>
</div>
</div>
</div>
</section>
</div>
<FinalCta />
<Footer />
</div>

</>
  )
}
