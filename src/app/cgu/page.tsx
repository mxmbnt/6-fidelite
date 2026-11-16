/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
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
<p>Bienvenue sur Fidly. Les présentes conditions générales encadrent l'accès et l'utilisation de notre application et de notre site. En utilisant Fidly, vous acceptez de les respecter. Si vous n'acceptez pas ces conditions, merci de ne pas utiliser le service.</p>
<h2>Utilisation du service</h2>
<p>Fidly fournit des outils de fidélisation destinés aux commerçants. Vous vous engagez à utiliser le service de manière licite et dans le respect des droits de vos clients, notamment en matière de consentement aux communications.</p>
<h2>Comptes utilisateurs</h2>
<p>Lors de la création de votre compte, vous êtes responsable de l'exactitude des informations fournies et de la confidentialité de vos identifiants. Vous êtes responsable de toute activité réalisée depuis votre compte.</p>
<h2>Propriété intellectuelle</h2>
<p>L'ensemble des contenus, marques, technologies et éléments de Fidly (textes, graphismes, logos, logiciels) sont notre propriété ou font l'objet d'une licence, et sont protégés par le droit de la propriété intellectuelle.</p>
<h2>Limitation de responsabilité</h2>
<p>Fidly est fourni « en l'état ». Nous mettons tout en œuvre pour assurer un service fiable, sans pouvoir garantir l'absence totale d'erreur ou d'interruption. Notre responsabilité ne saurait être engagée pour des dommages indirects liés à l'utilisation du service.</p>
<h2>Résiliation</h2>
<p>Nous nous réservons le droit de suspendre ou de résilier votre accès à Fidly en cas de non-respect des présentes conditions ou d'usage portant atteinte à la plateforme ou à d'autres utilisateurs.</p>
<h2>Modification des conditions</h2>
<p>Ces conditions peuvent être mises à jour. Toute modification sera publiée sur cette page avec sa date d'effet. L'utilisation continue de Fidly vaut acceptation des conditions révisées.</p>
<h2>Contact</h2>
<p>Pour toute question relative à ces conditions, contactez-nous à bonjour@fidly.fr.</p>
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
