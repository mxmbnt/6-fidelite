/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Faq, FinalCta } from '@/components/Blocks'
import { CTA_HREF, FAQ_GENERALE } from '@/content/site'

export default function BlogPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-blog">
<Nav />
<section className="section_hero">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap is-blog">
<h1 className="heading-style-h1">Conseils & nouveautés</h1>
<div className="hero_content-wrap is-blog">
<p className="text-size-regular is-white">Nos conseils, guides et nouveautés pour fidéliser vos clients et développer votre commerce.</p>
</div>
</div>
</div>
</div>
</section>
</div>
<section className="section_blog">
<div className="container-large">
<div className="blog_title-wrap">
<h2 className="heading-style-display">Le blog Loyna</h2>
<div className="text-size-regular is-center is-scroll">Conseils pratiques, études de cas et guides pour faire revenir vos clients et booster votre commerce de proximité.</div>
</div>
<div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="blog_tabs w-tabs">
<div className="blog_tabs-menu w-tab-menu">
<a data-w-tab="Tab 1" className="blog_tab-link w-inline-block w-tab-link">
<div className="shared_text-block-2">Tous</div>
</a>
<a data-w-tab="Tab 2" className="blog_tab-link w-inline-block w-tab-link">
<div>Conseils</div>
</a>
<a data-w-tab="Tab 3" className="blog_tab-link w-inline-block w-tab-link">
<div>Nouveau</div>
</a>
<a data-w-tab="Tab 4" className="blog_tab-link is-all w-inline-block w-tab-link">
<div>Pratique</div>
</a>
</div>
<div className="blog_tabs-content w-tab-content">
<div data-w-tab="Tab 1" className="blog_tab-panel w-tab-pane w--tab-active">
<div className="collection_list-wrapper w-dyn-list">
<div role="list" className="collection_list w-dyn-items">
<div role="listitem" className="collection_item w-dyn-item">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="blog_card w-inline-block">
<div>
<img width={343} height={247} src="/img/frame-2147237234.webp" loading="lazy" alt="" className="blog_img-cms" />
</div>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">5 min de lecture</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">4 nov. 2026</div>
</div>
</div>
<div className="button_arrow-wrap">
<div className="button_arrow-logo-img">
<img src="/img/guidance_up-arrow-5--8178a.svg" loading="lazy" alt="" />
</div>
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">5 idées pour faire revenir vos clients cet hiver</h3>
<div className="text-size-regular">Récompenses de saison, relances, notifications : nos idées pour l'hiver.</div>
</div>
</Link>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<Link href="/blog/carte-papier-ou-digitale" className="blog_card w-inline-block">
<div>
<img width={343} height={247} src="/img/frame-2147237234-1--3c043.webp" loading="lazy" alt="" className="blog_img-cms" />
</div>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">5 min de lecture</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">4 nov. 2026</div>
</div>
</div>
<div className="button_arrow-wrap">
<div className="button_arrow-logo-img">
<img src="/img/guidance_up-arrow-5--8178a.svg" loading="lazy" alt="" />
</div>
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">Carte papier ou digitale : le vrai comparatif</h3>
<div className="text-size-regular">Coût, taux d'utilisation, données : pourquoi les commerçants passent au digital.</div>
</div>
</Link>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<Link href="/blog/reussir-ses-notifications-push" className="blog_card w-inline-block">
<div>
<img src="/img/6a7c084b06d902f3cebbc741_frame-202147237234.webp" loading="lazy" alt="Écran du tableau de bord Loyna" className="blog_img-cms" />
</div>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">5 min de lecture</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">4 nov. 2026</div>
</div>
</div>
<div className="button_arrow-wrap">
<div className="button_arrow-logo-img">
<img src="/img/guidance_up-arrow-5--8178a.svg" loading="lazy" alt="" />
</div>
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">Réussir ses notifications push sans lasser ses clients</h3>
<div className="text-size-regular">Fréquence, ton, horaires : les bonnes pratiques pour des messages qui font revenir.</div>
</div>
</Link>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="blog_card w-inline-block">
<div>
<img src="/img/6a7c085ed49da6e0d238634e_frame-202147237234-20-1-.webp" loading="lazy" alt="Écran des statistiques Loyna" className="blog_img-cms" />
</div>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">5 min de lecture</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">4 nov. 2026</div>
</div>
</div>
<div className="button_arrow-wrap">
<div className="button_arrow-logo-img">
<img src="/img/guidance_up-arrow-5--8178a.svg" loading="lazy" alt="" />
</div>
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">Lire ses statistiques de fidélité en 5 minutes</h3>
<div className="text-size-regular">Visites, récompenses, clients inactifs : les 3 chiffres à suivre chaque semaine.</div>
</div>
</Link>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<Link href="/blog/rgpd-commercants" className="blog_card w-inline-block">
<div>
<img src="/img/frame-2147237234-2--805f7.webp" loading="lazy" alt="" className="blog_img-cms" />
</div>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">5 min de lecture</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">4 nov. 2026</div>
</div>
</div>
<div className="button_arrow-wrap">
<div className="button_arrow-logo-img">
<img src="/img/guidance_up-arrow-5--8178a.svg" loading="lazy" alt="" />
</div>
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">RGPD : ce que tout commerçant doit savoir</h3>
<div className="text-size-regular">Collecter des données clients en toute sérénité, avec les bons réflexes.</div>
</div>
</Link>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<Link href="/blog/idees-de-recompenses" className="blog_card w-inline-block">
<div>
<img src="/img/image10.webp" loading="lazy" alt="" className="blog_img-cms" />
</div>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">5 min de lecture</div>
</div>
<div className="blog_date-title-wrap">
<div className="text-size-xxsmall is-white">4 nov. 2026</div>
</div>
</div>
<div className="button_arrow-wrap">
<div className="button_arrow-logo-img">
<img src="/img/guidance_up-arrow-5--8178a.svg" loading="lazy" alt="" />
</div>
</div>
</div>
<div className="blog_card-title">
<h3 className="heading-style-h5">10 idées de récompenses qui marchent vraiment</h3>
<div className="text-size-regular">Café offert, réduction, cadeau surprise : nos meilleurs exemples par métier.</div>
</div>
</Link>
</div>
</div>
</div>
</div>
<div data-w-tab="Tab 2" className="blog_tab-panel w-tab-pane">
<div className="collection_list-wrapper w-dyn-list">
<div role="list" className="collection_list w-dyn-items">
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="w-inline-block">
<img width={343} height={247} loading="lazy" src="/img/frame-2147237234.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="heading-style-h5">5 idées pour faire revenir vos clients cet hiver</Link>
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-regular">Récompenses de saison, relances, notifications : nos idées pour l'hiver.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/carte-papier-ou-digitale" className="w-inline-block">
<img width={343} height={247} loading="lazy" src="/img/frame-2147237234-1--3c043.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/carte-papier-ou-digitale" className="heading-style-h5">Carte papier ou digitale : le vrai comparatif</Link>
<Link href="/blog/carte-papier-ou-digitale" className="text-size-regular">Coût, taux d'utilisation, données : pourquoi les commerçants passent au digital.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/reussir-ses-notifications-push" className="w-inline-block">
<img loading="lazy" src="/img/6a7c084b06d902f3cebbc741_frame-202147237234.webp" alt="Écran du tableau de bord Loyna" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/reussir-ses-notifications-push" className="heading-style-h5">Réussir ses notifications push sans lasser ses clients</Link>
<Link href="/blog/reussir-ses-notifications-push" className="text-size-regular">Fréquence, ton, horaires : les bonnes pratiques pour des messages qui font revenir.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="w-inline-block">
<img loading="lazy" src="/img/6a7c085ed49da6e0d238634e_frame-202147237234-20-1-.webp" alt="Écran des statistiques Loyna" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="heading-style-h5">Lire ses statistiques de fidélité en 5 minutes</Link>
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-regular">Visites, récompenses, clients inactifs : les 3 chiffres à suivre chaque semaine.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/rgpd-commercants" className="w-inline-block">
<img loading="lazy" src="/img/frame-2147237234-2--805f7.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/rgpd-commercants" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/rgpd-commercants" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/rgpd-commercants" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/rgpd-commercants" className="heading-style-h5">RGPD : ce que tout commerçant doit savoir</Link>
<Link href="/blog/rgpd-commercants" className="text-size-regular">Collecter des données clients en toute sérénité, avec les bons réflexes.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/idees-de-recompenses" className="w-inline-block">
<img loading="lazy" src="/img/image10.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/idees-de-recompenses" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/idees-de-recompenses" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/idees-de-recompenses" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/idees-de-recompenses" className="heading-style-h5">10 idées de récompenses qui marchent vraiment</Link>
<Link href="/blog/idees-de-recompenses" className="text-size-regular">Café offert, réduction, cadeau surprise : nos meilleurs exemples par métier.</Link>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-w-tab="Tab 3" className="blog_tab-panel w-tab-pane">
<div className="collection_list-wrapper w-dyn-list">
<div role="list" className="collection_list w-dyn-items">
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="w-inline-block">
<img width={343} height={247} loading="lazy" src="/img/frame-2147237234.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="heading-style-h5">5 idées pour faire revenir vos clients cet hiver</Link>
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-regular">Récompenses de saison, relances, notifications : nos idées pour l'hiver.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/carte-papier-ou-digitale" className="w-inline-block">
<img width={343} height={247} loading="lazy" src="/img/frame-2147237234-1--3c043.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/carte-papier-ou-digitale" className="heading-style-h5">Carte papier ou digitale : le vrai comparatif</Link>
<Link href="/blog/carte-papier-ou-digitale" className="text-size-regular">Coût, taux d'utilisation, données : pourquoi les commerçants passent au digital.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/reussir-ses-notifications-push" className="w-inline-block">
<img loading="lazy" src="/img/6a7c084b06d902f3cebbc741_frame-202147237234.webp" alt="Écran du tableau de bord Loyna" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/reussir-ses-notifications-push" className="heading-style-h5">Réussir ses notifications push sans lasser ses clients</Link>
<Link href="/blog/reussir-ses-notifications-push" className="text-size-regular">Fréquence, ton, horaires : les bonnes pratiques pour des messages qui font revenir.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="w-inline-block">
<img loading="lazy" src="/img/6a7c085ed49da6e0d238634e_frame-202147237234-20-1-.webp" alt="Écran des statistiques Loyna" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="heading-style-h5">Lire ses statistiques de fidélité en 5 minutes</Link>
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-regular">Visites, récompenses, clients inactifs : les 3 chiffres à suivre chaque semaine.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/rgpd-commercants" className="w-inline-block">
<img loading="lazy" src="/img/frame-2147237234-2--805f7.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/rgpd-commercants" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/rgpd-commercants" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/rgpd-commercants" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/rgpd-commercants" className="heading-style-h5">RGPD : ce que tout commerçant doit savoir</Link>
<Link href="/blog/rgpd-commercants" className="text-size-regular">Collecter des données clients en toute sérénité, avec les bons réflexes.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/idees-de-recompenses" className="w-inline-block">
<img loading="lazy" src="/img/image10.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/idees-de-recompenses" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/idees-de-recompenses" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/idees-de-recompenses" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/idees-de-recompenses" className="heading-style-h5">10 idées de récompenses qui marchent vraiment</Link>
<Link href="/blog/idees-de-recompenses" className="text-size-regular">Café offert, réduction, cadeau surprise : nos meilleurs exemples par métier.</Link>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-w-tab="Tab 4" className="blog_tab-panel w-tab-pane">
<div className="collection_list-wrapper w-dyn-list">
<div role="list" className="collection_list w-dyn-items">
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="w-inline-block">
<img width={343} height={247} loading="lazy" src="/img/frame-2147237234.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="heading-style-h5">5 idées pour faire revenir vos clients cet hiver</Link>
<Link href="/blog/faire-revenir-ses-clients-en-hiver" className="text-size-regular">Récompenses de saison, relances, notifications : nos idées pour l'hiver.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/carte-papier-ou-digitale" className="w-inline-block">
<img width={343} height={247} loading="lazy" src="/img/frame-2147237234-1--3c043.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/carte-papier-ou-digitale" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/carte-papier-ou-digitale" className="heading-style-h5">Carte papier ou digitale : le vrai comparatif</Link>
<Link href="/blog/carte-papier-ou-digitale" className="text-size-regular">Coût, taux d'utilisation, données : pourquoi les commerçants passent au digital.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/reussir-ses-notifications-push" className="w-inline-block">
<img loading="lazy" src="/img/6a7c084b06d902f3cebbc741_frame-202147237234.webp" alt="Écran du tableau de bord Loyna" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/reussir-ses-notifications-push" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/reussir-ses-notifications-push" className="heading-style-h5">Réussir ses notifications push sans lasser ses clients</Link>
<Link href="/blog/reussir-ses-notifications-push" className="text-size-regular">Fréquence, ton, horaires : les bonnes pratiques pour des messages qui font revenir.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="w-inline-block">
<img loading="lazy" src="/img/6a7c085ed49da6e0d238634e_frame-202147237234-20-1-.webp" alt="Écran des statistiques Loyna" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="heading-style-h5">Lire ses statistiques de fidélité en 5 minutes</Link>
<Link href="/blog/lire-ses-statistiques-de-fidelite" className="text-size-regular">Visites, récompenses, clients inactifs : les 3 chiffres à suivre chaque semaine.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/rgpd-commercants" className="w-inline-block">
<img loading="lazy" src="/img/frame-2147237234-2--805f7.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/rgpd-commercants" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/rgpd-commercants" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/rgpd-commercants" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/rgpd-commercants" className="heading-style-h5">RGPD : ce que tout commerçant doit savoir</Link>
<Link href="/blog/rgpd-commercants" className="text-size-regular">Collecter des données clients en toute sérénité, avec les bons réflexes.</Link>
</div>
</div>
</div>
</div>
</div>
<div role="listitem" className="collection_item w-dyn-item">
<div className="blog_wrap">
<div className="blog_flex-wrap">
<div className="blog_card">
<Link href="/blog/idees-de-recompenses" className="w-inline-block">
<img loading="lazy" src="/img/image10.webp" alt="" className="blog_img-cms" />
</Link>
<div className="blog_date-wrap-flex">
<div className="blog_date-wrap">
<div className="blog_date-title-wrap">
<Link href="/blog/idees-de-recompenses" className="text-size-xxsmall is-white">5 min de lecture</Link>
</div>
<div className="blog_date-title-wrap">
<Link href="/blog/idees-de-recompenses" className="text-size-xxsmall is-white">4 nov. 2026</Link>
</div>
</div>
<div className="button_arrow-wrap">
<Link href="/blog/idees-de-recompenses" className="button_arrow-logo-img w-inline-block">
<img loading="lazy" src="/img/guidance_up-arrow-5--8178a.svg" alt="" />
</Link>
</div>
</div>
<div className="blog_card-title">
<Link href="/blog/idees-de-recompenses" className="heading-style-h5">10 idées de récompenses qui marchent vraiment</Link>
<Link href="/blog/idees-de-recompenses" className="text-size-regular">Café offert, réduction, cadeau surprise : nos meilleurs exemples par métier.</Link>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<Faq intro="Les réponses aux questions qu’on nous pose le plus avant de commencer." items={FAQ_GENERALE} />
<FinalCta />
<Footer />
</div>

</>
  )
}
