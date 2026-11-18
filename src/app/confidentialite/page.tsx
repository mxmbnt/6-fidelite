/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { FinalCta } from '@/components/Blocks'
import { CTA_HREF } from '@/content/site'

export default function PrivacyPolicyPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-contact">
<Nav />
<section className="section_hero">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap">
<h1 className="heading-style-h1">Confidentialité</h1>
<div className="hero_content-wrap is-privacy">
<p className="text-size-regular is-white">Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application et notre site.</p>
</div>
</div>
</div>
</div>
</section>
</div>
<section className="section_privacy">
<div className="container-large">
<div className="privacy_wrap">
<div className="privacy_rich-text w-richtext">
<h2>Introduction</h2>
<p>Chez Loyna, la protection de vos données est une priorité. Cette politique de confidentialité explique comment nous collectons, utilisons, protégeons et gérons vos informations lorsque vous utilisez notre application et notre site. En utilisant Loyna, vous acceptez les pratiques décrites ci-dessous.</p>
<h2>Informations collectées</h2>
<p>Nous pouvons collecter des informations personnelles telles que votre nom, votre adresse email et les informations de votre commerce lors de votre inscription. Nous collectons également des données d'usage (interactions avec l'application, informations sur l'appareil) afin d'améliorer le service.</p>
<h2>Utilisation de vos informations</h2>
<p>Vos informations servent à fournir et améliorer nos services, personnaliser votre expérience, répondre à vos demandes et assurer la sécurité. Nous pouvons utiliser des données agrégées et anonymisées pour analyser les tendances.</p>
<h2>Protection et sécurité des données</h2>
<p>Nous mettons en œuvre des mesures de sécurité solides, notamment le chiffrement et un hébergement en France, pour protéger vos informations contre tout accès non autorisé. Aucun système n'étant infaillible, nous mettons régulièrement à jour nos pratiques.</p>
<h2>Vos droits</h2>
<p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Vous pouvez exercer ces droits à tout moment en nous contactant.</p>
<h2>Services tiers</h2>
<p>Loyna peut faire appel à des prestataires de confiance pour l'hébergement, les paiements ou les statistiques. Ces prestataires sont tenus de respecter des standards de sécurité et de confidentialité appropriés.</p>
<h2>Mises à jour</h2>
<p>Cette politique peut être mise à jour. Toute modification sera publiée sur cette page avec sa date d'effet. L'utilisation continue de Loyna vaut acceptation de la politique révisée.</p>
<h2>Contact</h2>
<p>Pour toute question sur cette politique ou sur vos données, contactez-nous à contact@loyna.fr.</p>
</div>
</div>
</div>
</section>
<FinalCta />
<Footer />
</div>

</>
  )
}
