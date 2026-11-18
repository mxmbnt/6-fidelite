/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Check, Faq, FinalCta, Reassurance } from '@/components/Blocks'
import { CTA_HREF, FAQ_TARIFS, OFFRES } from '@/content/site'

export const metadata: Metadata = {
  title: 'Tarifs',
  description: 'Carte de fidélité digitale dès 29 € HT par mois, sans engagement. 1 mois d’essai gratuit, sans carte bancaire.',
}

const OUI = <img src="/img/icon-park-outline_check-correct.svg" loading="lazy" alt="Inclus" className="pricing_correct-img is-width" />
const NON = <img src="/img/vector-46-.svg" loading="lazy" alt="Non inclus" className="pricing_correct-img" />

/** Lignes du comparatif : texte ou booléen par offre (Starter, Pro, Réseau) */
const COMPARATIF: [string, ...(string | boolean)[]][] = [
  ['Prix sans engagement', `${OFFRES.starter.prix} / mois`, `${OFFRES.pro.prix} / mois`, 'Sur devis'],
  ['Clients et cartes', 'Illimités', 'Illimités', 'Illimités'],
  ['Campagnes de messages', '5 par semaine', 'Illimitées', 'Illimitées'],
  ['Notification de proximité', '1 adresse', '3 adresses', 'Toutes vos adresses'],
  ['Messages automatiques', true, true, true],
  ['Équipe et téléphones illimités', true, true, true],
  ['Tableau de bord et bilan mensuel', true, true, true],
  ['Export CSV', true, true, true],
  ['Carte finalisée par notre équipe', false, true, true],
  ['Carte sans mention Loyna', false, true, true],
  ['Vidéo et visuels de votre carte', false, true, true],
  ['Statistiques consolidées multi-boutiques', false, false, true],
  ['Support', 'E-mail', 'Prioritaire', 'Interlocuteur dédié'],
]

const CONDITIONS = [
  { t: 'Essai gratuit', d: '1 mois complet, sans carte bancaire. À la fin, rien n’est prélevé : la carte est mise en pause.' },
  { t: 'Mise en service', d: `${OFFRES.miseEnService} HT une seule fois, offerte avec l’engagement 12 mois. Jamais refacturée en cas de reprise.` },
  { t: 'Sans engagement', d: 'Vous arrêtez à la fin de n’importe quel mois, depuis votre espace client.' },
  { t: 'Prix affichés', d: 'Hors taxes, par mois et par commerce. Facture disponible chaque mois dans votre espace.' },
]

export default function PricingPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary">
<Nav />
<section className="section_hero">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap is-pricing is-padding">
<h1 className="heading-style-h1">Deux offres simples, dès 29 € par mois</h1>
<div className="hero_content-wrap is-about is-load">
<p className="text-size-regular is-white">Clients et cartes illimités dans les deux offres. Commencez par un mois gratuit, choisissez ensuite, et changez quand vous voulez.</p>
</div>
<div className="button_group">
<div className="primary_btn is-pricing">
<div className="hero_btn-flex is-pricing">
<div className="hero_btn-title">Mensuel</div>
<div className="toggle_track">
<div className="toggle_knob">
</div>
</div>
<div className="hero_btn-title is-muted">12 mois</div>
</div>
<div className="blog_save-btn-wrap">
<div className="text-size-xxxsmall">−15 %</div>
</div>
</div>
</div>
</div>
</div>
<div className="hero_card-flex">
<div className="hero_free-card is-free">
<div className="pricing_free-content-wrap">
<h2 className="heading-style-h6">{OFFRES.starter.nom}</h2>
<div className="pricing_free-content-card">
<div className="text-size-regular">La carte complète pour fidéliser un commerce : Wallet, scan, messages automatiques et statistiques.</div>
<div className="pricing_price-stack">
<h2 className="heading-style-h6">{OFFRES.starter.prix}/<span className="pricing_free-span">mois HT</span>
</h2>
<h2 className="heading-style-h6 is-annual">{OFFRES.starter.engage}/<span className="pricing_free-span">mois HT</span>
</h2>
</div>
</div>
</div>
<div className="pricing_included-line-flex">
<div className="pricing_fee-line">
</div>
<div className="text-size-regular is-center is-included">Ce qui est inclus</div>
<div className="pricing_fee-line">
</div>
</div>
<div className="pricing_key-points-wrap">
<Check>Clients et cartes illimités</Check>
<Check>5 campagnes par semaine</Check>
<Check>Anniversaire, relance, avis Google</Check>
<Check>Proximité sur 1 adresse</Check>
<Check>Équipe et téléphones illimités</Check>
</div>
<a href={CTA_HREF} className="button_get-started w-inline-block">
<div className="text-size-regular is-btn">Essayer Starter</div>
</a>
</div>
<div className="pricing_pro-card-wrap">
<div className="pricing_pro-content-wrap">
<h2 className="heading-style-h6">{OFFRES.pro.nom}</h2>
<div className="pricing_free-content-card">
<div className="text-size-regular">Tout Starter, sans limite, et notre équipe finalise votre carte pour qu’elle soit 100 % à votre image.</div>
</div>
<div className="pricing_price-stack">
<h2 className="heading-style-h6">{OFFRES.pro.prix}/<span className="pricing_free-span">mois HT</span>
</h2>
<h2 className="heading-style-h6 is-annual">{OFFRES.pro.engage}/<span className="pricing_free-span">mois HT</span>
</h2>
</div>
</div>
<div className="pricing_included-line-flex is-pro">
<div className="pricing_pro-line">
</div>
<div className="text-size-regular is-white is-included-pro">Tout Starter, plus</div>
<div className="pricing_pro-line">
</div>
</div>
<div className="pricing_key-points-wrap">
<Check white>Campagnes illimitées</Check>
<Check white>Proximité sur 3 adresses</Check>
<Check white>Carte finalisée à la main</Check>
<Check white>Sans mention Loyna</Check>
<Check white>Support prioritaire</Check>
</div>
<a href={CTA_HREF} className="button_get-started-white w-inline-block">
<div className="text-size-regular is-white">Essayer Pro</div>
</a>
</div>
<div className="hero_free-card is-business">
<div className="pricing_free-content-wrap">
<h2 className="heading-style-h6">Réseau</h2>
<div className="pricing_free-content-card">
<div className="text-size-regular">Pour les enseignes à plusieurs boutiques et les franchises : une carte commune, des statistiques par point de vente.</div>
<h2 className="heading-style-h6 is-size">Sur devis</h2>
</div>
</div>
<div className="pricing_included-line-flex">
<div className="pricing_fee-line">
</div>
<div className="text-size-regular is-center is-included">Ce qui est inclus</div>
<div className="pricing_fee-line">
</div>
</div>
<div className="pricing_key-points-wrap">
<Check>Tout Pro</Check>
<Check>Proximité sur toutes vos adresses</Check>
<Check>Statistiques par boutique</Check>
<Check>Rôles et accès par équipe</Check>
<Check>Interlocuteur dédié</Check>
</div>
<a href="/contact" className="button_get-started w-inline-block">
<div className="text-size-regular is-btn">Nous contacter</div>
</a>
</div>
</div>
</div>
</section>
</div>
<section className="section_compare">
<div className="container-large">
<div className="pricing_compare-title-wrap">
<h2 className="heading-style-h2">Comparer les offres</h2>
<div className="text-size-regular is-center is-scroll">Tout ce qui est inclus, ligne par ligne. Les prix sont hors taxes, par mois et par commerce.</div>
</div>
<div className="pricing_compare-plan-flex is-heading">
<div>
</div>
<div className="pricing_compare-heading-wrap">
<div className="text-size-medium">Starter</div>
</div>
<div className="pricing_compare-heading-wrap">
<div className="text-size-medium">Pro</div>
</div>
<div className="pricing_compare-heading-wrap is-margin">
<div className="text-size-medium">Réseau</div>
</div>
</div>
{COMPARATIF.map(([label, ...cols]) =>
  cols.some((c) => typeof c === 'boolean') ? (
<div className="pricing_compare-plan-flex is-img" key={label}>
<div className="pricing_team-access-title">
<div className="text-size-regular is-size">{label}</div>
</div>
{cols.map((c, i) => <div className="pricing_correct-logo-wrap" key={i}>{c ? OUI : NON}</div>)}
</div>
  ) : (
<div className="pricing_compare-plan-flex" key={label}>
<div className="text-size-regular is-size">{label}</div>
{cols.map((c, i) => <div className="text-size-regular is-size" key={i}>{c}</div>)}
</div>
  ),
)}
<div className="pricing_terms">
{CONDITIONS.map((c) => (
<div className="pricing_term" key={c.t}>
<div className="pricing_term-title">{c.t}</div>
<p>{c.d}</p>
</div>
))}
</div>
<Reassurance />
</div>
</section>
<section className="section_upgrade">
<div className="container-large">
<div className="upgrade_wrap">
<div className="mobile_img-wrap is-upgrade">
<div className="upgrade_mobile-wrap">
<img width={464} height={447} src="/img/iphone-14-pro-6-.webp" loading="lazy" alt="Écran d’envoi d’un message à 128 clients dans Loyna Business" className="mobile_img" />
</div>
</div>
<div className="syntra_wrap">
<h2 className="heading-style-display is-left">Avec Pro, on s’occupe de votre carte</h2>
<p className="text-size-regular text-color-black">Notre équipe retouche votre logo, dessine des tampons à vos initiales et retire la mention Loyna. Vous recevez aussi une courte vidéo et des visuels pour présenter la carte en boutique et sur vos réseaux.</p>
<div className="pricing_highlight-title">Et en plus :</div>
<div className="pricing_highlight-wrap is-upgrade">
<Check>Autant de campagnes que vous voulez</Check>
<Check>Proximité sur 3 adresses</Check>
<Check>Réponse prioritaire du support</Check>
</div>
</div>
</div>
</div>
</section>

<Faq title="Questions sur les tarifs" intro="Essai, engagement, factures : tout ce qu’il faut savoir avant de choisir." items={FAQ_TARIFS} />

<FinalCta title="Un mois pour essayer, avec vos vrais clients" />
<Footer />
</div>

</>
  )
}
