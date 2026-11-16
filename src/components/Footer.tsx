import Link from 'next/link'
import { CTA_HREF } from '@/content/site'

export function Footer() {
  return (
<section className="section_footer">
<div className="container-large">
<div className="footer_flex-wrap">
<div className="content-logo-wrap">
<div className="footer_title-wrap">
<Link href="/" className="footer_logo-wrap w-inline-block">
<span className="footer_logo wordmark">Fidly</span>
</Link>
<div className="text-size-regular">La carte de fidélité digitale des commerces de proximité : dans le Wallet de vos clients, tamponnée en un scan.</div>
</div>
<div className="footer_social-logo-flex">
<a href="https://www.linkedin.com/" target="_blank" className="footer_social-logo-wrap w-inline-block">
<img loading="lazy" src="/img/mdi_linkedin-5-.svg" alt="" className="feature_logo-img" />
</a>
<a href="https://www.x.com" target="_blank" className="footer_social-logo-wrap w-inline-block">
<img loading="lazy" src="/img/prime_twitter-9-.svg" alt="" className="feature_logo-img" />
</a>
<a href="https://www.facebook.com/" target="_blank" className="footer_social-logo-wrap w-inline-block">
<img loading="lazy" src="/img/iconoir_facebook-4-.svg" alt="" className="feature_logo-img" />
</a>
<a href="https://www.instagram.com/" target="_blank" className="footer_social-logo-wrap w-inline-block">
<img loading="lazy" src="/img/mdi_instagram-6-.svg" alt="" className="feature_logo-img" />
</a>
</div>
</div>
<div className="styleguide_flex">
<div className="shared_home-wrap">
<div className="footer_link-wrap">
<Link href="/" className="footer_link is-static">Accueil</Link>
<Link href="/" className="footer_link is-absolute">Accueil</Link>
</div>
<div className="footer_link-wrap">
<Link href="/fonctionnalites" className="footer_link is-static">Fonctionnalités</Link>
<Link href="/fonctionnalites" className="footer_link is-absolute">Fonctionnalités</Link>
</div>
<div className="footer_link-wrap">
<Link href="/a-propos" className="footer_link is-static">À propos</Link>
<Link href="/a-propos" className="footer_link is-absolute">À propos</Link>
</div>
<div className="footer_link-wrap">
<Link href="/tarifs" className="footer_link is-static">Tarifs</Link>
<Link href="/tarifs" className="footer_link is-absolute">Tarifs</Link>
</div>
<div className="footer_link-wrap">
<Link href="/blog" className="footer_link is-static">Blog</Link>
<Link href="/blog" className="footer_link is-absolute">Blog</Link>
</div>
<div className="footer_link-wrap">
<Link href="/contact" className="footer_link is-static">Contact</Link>
<Link href="/contact" className="footer_link is-absolute">Contact</Link>
</div>
<div className="footer_link-wrap">
<Link href="/contact" className="footer_link is-static">Essai gratuit</Link>
<Link href="/contact" className="footer_link is-absolute">Essai gratuit</Link>
</div>
</div>
<div className="styleguide_wrap">
<div className="footer_link-wrap">
<Link href="/confidentialite" className="footer_link is-static">Confidentialité</Link>
<Link href="/confidentialite" className="footer_link is-absolute">Confidentialité</Link>
</div>
<div className="footer_link-wrap">
<Link href="/cgu" className="footer_link is-static">CGU</Link>
<Link href="/cgu" className="footer_link is-absolute">CGU</Link>
</div>
<div className="footer_link-wrap">
<Link href="/merci" className="footer_link is-static">Merci</Link>
<Link href="/merci" className="footer_link is-absolute">Merci</Link>
</div>
<div className="footer_link-wrap">
<Link href="/blog" className="footer_link is-static">Nouveautés</Link>
<Link href="/blog" className="footer_link is-absolute">Nouveautés</Link>
</div>
</div>
</div>
</div>
<Link href="/" className="syntra_img-wrap w-inline-block" aria-label="Fidly — accueil">
<span className="syntra_img wordmark" aria-hidden="true">Fidly</span>
</Link>
<div className="footer_copyright-wrap">
<a href="https://omela.fr" className="text-size-regular is-powered">Site créé avec Omela</a>
<div className="footer_copyright-line">
</div>
<a href="https://www.fluxory.studio/" className="text-size-regular">Design Fluxory Studio</a>
</div>
</div>
</section>
  )
}
