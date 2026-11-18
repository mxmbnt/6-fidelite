/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { FinalCta } from '@/components/Blocks'
import { CTA_HREF } from '@/content/site'

export default function TermsAndConditionsPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-contact">
<Nav />
<section className="section_hero">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap is-pricing">
<h1 className="heading-style-h1">Conditions générales d'utilisation</h1>
<div className="hero_content-wrap is-privacy">
<p className="text-size-regular is-white">Les présentes conditions encadrent l'accès et l'utilisation de notre application et de notre site</p>
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
<p>Bienvenue sur Loyna. Les présentes conditions générales encadrent l'accès et l'utilisation de notre application et de notre site. En utilisant Loyna, vous acceptez de les respecter. Si vous n'acceptez pas ces conditions, merci de ne pas utiliser le service.</p>
<h2>Utilisation du service</h2>
<p>Loyna fournit des outils de fidélisation destinés aux commerçants. Vous vous engagez à utiliser le service de manière licite et dans le respect des droits de vos clients, notamment en matière de consentement aux communications.</p>
<h2>Comptes utilisateurs</h2>
<p>Lors de la création de votre compte, vous êtes responsable de l'exactitude des informations fournies et de la confidentialité de vos identifiants. Vous êtes responsable de toute activité réalisée depuis votre compte.</p>
<h2>Propriété intellectuelle</h2>
<p>L'ensemble des contenus, marques, technologies et éléments de Loyna (textes, graphismes, logos, logiciels) sont notre propriété ou font l'objet d'une licence, et sont protégés par le droit de la propriété intellectuelle.</p>
<h2>Limitation de responsabilité</h2>
<p>Loyna est fourni « en l'état ». Nous mettons tout en œuvre pour assurer un service fiable, sans pouvoir garantir l'absence totale d'erreur ou d'interruption. Notre responsabilité ne saurait être engagée pour des dommages indirects liés à l'utilisation du service.</p>
<h2>Résiliation</h2>
<p>Nous nous réservons le droit de suspendre ou de résilier votre accès à Loyna en cas de non-respect des présentes conditions ou d'usage portant atteinte à la plateforme ou à d'autres utilisateurs.</p>
<h2>Modification des conditions</h2>
<p>Ces conditions peuvent être mises à jour. Toute modification sera publiée sur cette page avec sa date d'effet. L'utilisation continue de Loyna vaut acceptation des conditions révisées.</p>
<h2>Contact</h2>
<p>Pour toute question relative à ces conditions, contactez-nous à contact@loyna.fr.</p>
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
