/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Check, Faq, FinalCta, MetiersMarquee, PrimaryBtn, Reassurance, SecondaryBtn } from '@/components/Blocks'
import { FAQ_GENERALE, OFFRES } from '@/content/site'

/** Messages automatiques présentés à la place des témoignages du template */
const MESSAGES = [
  { titre: 'Relance', quand: 'Après 60 jours sans visite', texte: '“Ça fait un moment ! Passez cette semaine, on vous offre un tampon en plus.”' },
  { titre: 'Plus qu’un passage', quand: 'Quand la récompense est proche', texte: '“Encore une visite et votre baguette est offerte.”' },
  { titre: 'Avis Google', quand: 'Après la 3e visite', texte: '“Vous aimez venir chez nous ? Un avis nous aide beaucoup, ça prend 30 secondes.”' },
]

export default function HomePage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-home">
<img src="/img/background-animated-sharp-v2.webp" loading="lazy" alt="" className="hero_bg-img" />
<Nav />
<section className="section_hero is-section-relative">
<div className="container-large">
<div className="hero_wrap is-flex">
<div className="hero_title-wrap">
<h1 className="heading-style-h1">Vos clients reviennent plus souvent</h1>
<div className="hero_content-wrap is-load">
<p className="text-size-regular is-white">Votre carte de fidélité, dans Apple Wallet et Google Wallet. Vos clients l’ajoutent en scannant un QR code : pas d’application, pas de compte, pas de carton qui se perd.</p>
</div>
<div className="button_group is-hero">
<PrimaryBtn />
<SecondaryBtn label="Voir les tarifs" href="/tarifs" />
</div>
<Reassurance light />
</div>
<div className="hero_img-wrap is-height">
<img src="/img/iphone-14-pro-f4a5e.webp" loading="lazy" alt="Carte de fidélité d’une boulangerie dans Apple Wallet : 6 tampons sur 10" className="hero_phone-left-img" />
<img src="/img/iphone-14-pro-1--f1cac.webp" loading="lazy" alt="Écran de verrouillage : « Plus qu’un passage ! Votre baguette offerte vous attend. »" className="hero_phone-right-img" />
</div>
</div>
</div>
</section>
</div>

<MetiersMarquee />

<section className="section_synta">
<div className="container-large">
<div className="synta_wrap">
<div className="mobile_img-wrap">
<img src="/img/iphone-14-pro.webp" loading="lazy" alt="Tableau de bord Loyna : 412 passages, 128 clients, 37 récompenses" className="mobile_img" />
</div>
<div className="syntra_right-wrap">
<div className="syntra_wrap">
<h2 className="heading-style-h2">La carte à tampons, sans ses défauts</h2>
<p className="text-size-regular text-color-black">Un carton se perd, s’oublie dans un autre portefeuille et se tamponne en douce. La carte Loyna vit dans le téléphone de vos clients : toujours sur eux, impossible à copier, à jour à chaque passage. Et entre deux visites, vous gardez le contact.</p>
</div>
<div className="pricing_highlight-title">En bref :</div>
<div className="pricing_highlight-wrap">
<Check>Ajoutée en 10 secondes, sans application</Check>
<Check>iPhone (Apple Wallet) et Android (Google Wallet)</Check>
<Check>Votre téléphone suffit pour scanner</Check>
<Check>Données hébergées en France, RGPD intégré</Check>
</div>
</div>
</div>
</div>
</section>

<section className="section_work">
<div className="container-large">
<div className="work_wraps">
<div className="work_wrap">
<h2 className="heading-style-h2">Trois étapes, et c’est parti</h2>
<p className="text-size-regular is-80">Pas de matériel à commander, pas de formation. Votre carte peut être dans la poche de vos clients dès aujourd’hui.</p>
</div>
<div className="download_app-wrap">
<img loading="lazy" src="/img/group-1982249813.svg" alt="" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">1. Vous créez votre carte</div>
<div className="text-size-small is-step">Votre nom, vos couleurs, votre récompense</div>
</div>
</div>
<div className="download_app-wrap is-sign-up">
<img loading="lazy" src="/img/group-1982249813.svg" alt="" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">2. Votre client scanne le QR code</div>
<div className="text-size-small is-step">La carte s’ajoute à son téléphone en un geste</div>
</div>
</div>
<div className="download_app-wrap is-chatting">
<img loading="lazy" src="/img/group-1982249813.svg" alt="" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">3. Vous scannez à chaque passage</div>
<div className="text-size-small is-chatting">La récompense se débloque toute seule</div>
</div>
</div>
<img loading="lazy" src="/img/group-1982249866.svg" alt="" className="work_absolute-img" />
</div>
</div>
</section>

<section className="section_feature">
<div className="container-large">
<div className="feature_title-wrap">
<h2 className="heading-style-display">Une carte qui travaille pour vous</h2>
<div className="feature_content-wrap">
<p className="text-size-regular is-center">Vos clients n’ont rien à penser. Vous non plus : Loyna s’occupe de compter, de récompenser et de rappeler.</p>
</div>
</div>
<div className="feature_card-flex">
<div className="feature_card-wrap">
<div className="smart_img-wrap">
<img alt="" loading="lazy" src="/img/grid-bg-2.webp" className="feature_img" />
</div>
<div className="feature_logo-flex">
<div className="social-icon">
<img src="/img/hugeicons_auto-conversations.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<h3 className="heading-style-h3">Toujours dans leur poche</h3>
</div>
<div className="feature_card-content">
<p className="text-size-regular">La carte rejoint leurs billets et leurs cartes d’embarquement. Et quand ils passent près de chez vous, elle s’affiche sur leur écran.</p>
</div>
</div>
<div className="feature_card-wrap">
<div className="smart_img-wrap">
<img alt="" loading="lazy" src="/img/grid-bg-1.webp" className="feature_img" />
</div>
<div className="feature_logo-flex">
<div className="social-icon">
<img src="/img/material-symbols-light_productivity.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<h3 className="heading-style-h3">Un passage, un scan</h3>
</div>
<div className="feature_card-content">
<p className="text-size-regular">Vous scannez, le tampon s’ajoute. Pas de double scan par erreur, et un bouton pour annuler si besoin.</p>
</div>
</div>
<div className="feature_card-wrap">
<div className="smart_img-wrap">
<img alt="" loading="lazy" src="/img/grid-bg-3.webp" className="feature_img" />
</div>
<div className="feature_logo-flex">
<div className="social-icon">
<img src="/img/carbon_ibm-cloud-code-engine.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<h3 className="heading-style-h3">Des messages qui partent seuls</h3>
</div>
<div className="feature_card-content">
<p className="text-size-regular">Anniversaire, relance, récompense proche, demande d’avis : vous réglez une fois, Loyna envoie au bon moment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="section_experience">
<div className="container-large">
<div className="experience_title-wrap">
<h2 className="heading-style-h2">Pensée pour le comptoir</h2>
<div className="experience_content-wrap">
<p className="text-size-regular is-center">Rien à installer, rien à acheter. Tout passe par le téléphone : le leur pour la carte, le vôtre pour scanner.</p>
</div>
</div>
<div className="experience_background-img">
<div className="experience_flex-wrap">
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/mingcute_lightning-line.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">Scan en 2 secondes</div>
</div>
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/ri_device-line.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">Toute l’équipe connectée</div>
</div>
</div>
<div className="experience_flex-wrap is-modern">
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/clarity_design-line.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-regular is-c">Carte à vos couleurs</div>
</div>
<div className="experience_logo-wrap">
<div className="social-icon is-experience is-r">
<img src="/img/mdi_smart-card-outline.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-regular is-r is-font">Tampons ou points</div>
</div>
</div>
<div className="experience_flex-wrap is-dark-light">
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/material-symbols-light_support.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">iPhone et Android</div>
</div>
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/mdi_stopwatch-secure-outline.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">Données en France</div>
</div>
</div>
<img width={939} height={939} src="/img/group-1982249867.webp" loading="lazy" alt="Carte de fidélité dans Apple Wallet" className="shared_image-4" />
</div>
</div>
</section>

<section className="section_built">
<div className="container-large">
<div className="synta_wrap is-invert">
<div className="built-title-wrap">
<div className="syntra_wrap">
<h2 className="heading-style-h2">Votre métier, votre récompense</h2>
<p className="text-size-regular text-color-black">Tampons pour le pain du matin, points pour les gros paniers, cadeau d’anniversaire pour les rendez-vous espacés : la carte s’adapte à la façon dont vos clients viennent chez vous.</p>
</div>
<div className="pricing_highlight-wrap is-top-margin">
<Check><span className="text-weight-medium">Boulangeries et cafés :</span> le 10e café offert, sans carton à tamponner</Check>
<Check><span className="text-weight-medium">Coiffeurs et barbiers :</span> un rappel quand un client tarde à revenir</Check>
<Check><span className="text-weight-medium">Restaurants et snacks :</span> la carte s’affiche quand ils passent devant</Check>
<Check><span className="text-weight-medium">Instituts et ongleries :</span> une attention le jour de l’anniversaire</Check>
</div>
</div>
<div className="mobile_img-wrap">
<div className="mobile_img-user">
<img src="/img/iphone-14-pro-2--b2ee0.webp" loading="lazy" alt="Carte de fidélité d’un salon de coiffure : 8 tampons sur 10" className="mobile_img" />
</div>
</div>
</div>
</div>
</section>

<section className="section_growth-trusted">
<div className="container-large">
<div className="growth_title-wrap">
<h2 className="heading-style-h2">Vous voyez enfin qui revient</h2>
<div className="growth_content-wrap">
<p className="text-size-regular is-growth">Clients actifs, passages, récompenses, clients qui décrochent : tout est dans votre tableau de bord, et un bilan arrive chaque mois avec des conseils concrets.</p>
</div>
</div>
<div className="growth_wrap-grid">
<div className="growth_flex-wrap">
<div className="growth_card-wrap is-height">
<div className="growth_content-card">
<div className="countries_title-wrap">
<div className="text-size-xxsmall">Clients</div>
</div>
<div className="growth_card-content">
<div className="text-size-xsmall">ont ajouté la carte à leur téléphone</div>
</div>
<div className="growth_img-wrap">
<div data-fb-count-time="2500" data-fb-count="true" data-fb-count-target="128" className="text-size-xxlarge">128</div>
</div>
</div>
<div className="growth_color-shadow">
</div>
</div>
<div className="growth_card-wrap is-second is-gif">
<div className="mini_chart" aria-hidden="true">
<div className="mini_chart-head"><span className="mini_chart-icon"></span><span className="mini_chart-lines"><i></i><i></i></span><span className="mini_chart-pill">+18 %</span></div>
<svg viewBox="0 0 240 90" className="mini_chart-svg"><defs><linearGradient id="mc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7d1bf1" stopOpacity=".22"/><stop offset="1" stopColor="#7d1bf1" stopOpacity="0"/></linearGradient></defs><path d="M4 74 L40 62 L72 68 L104 48 L136 52 L168 30 L200 34 L236 12 L236 90 L4 90 Z" fill="url(#mc)"/><path d="M4 74 L40 62 L72 68 L104 48 L136 52 L168 30 L200 34 L236 12" fill="none" stroke="#7d1bf1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="168" cy="30" r="5" fill="#fff" stroke="#7d1bf1" strokeWidth="3"/></svg>
<div className="mini_chart-foot">Passages par semaine</div>
</div>
</div>
<div className="growth_card-wrap is-height">
<div className="growth_content-card">
<div className="countries_title-wrap">
<div className="text-size-xxsmall">Récompenses</div>
</div>
<div className="growth_card-content">
<div className="text-size-xsmall">offertes ce mois-ci, sans rien calculer</div>
</div>
<div className="growth_img-wrap is-ai">
<div data-fb-count-time="2500" data-fb-count="true" data-fb-count-target="37" className="text-size-xxlarge">37</div>
</div>
</div>
<div className="growth_color-shadow">
</div>
</div>
</div>
<div className="growth_flex-wrap is-users">
<div className="growth_card-wrap is-second">
<div className="mini_report">
<div className="mini_report-tag">Bilan mensuel</div>
<p>Chaque mois, un résumé de votre fidélité et 3 conseils concrets pour faire revenir plus de clients.</p>
</div>
</div>
<div className="growth_card-wrap is-active-users">
<div className="growth_card-content-alt is-growth">
<div className="countries_title-wrap">
<div className="text-size-xxsmall">Passages</div>
</div>
<div className="growth_card-content is-active">
<div className="text-size-xsmall">enregistrés ce mois-ci en un scan</div>
</div>
<div className="growth_img-wrap is-font">
<div data-fb-count-time="2500" data-fb-count="true" data-fb-count-target="412" className="text-size-xxlarge is-font">412</div>
</div>
</div>
<div className="growth_color-shadow is-user">
</div>
</div>
</div>
</div>
<p className="growth_note">Exemple fictif : une boulangerie après trois mois.</p>
</div>
</section>

<section className="section_user">
<div className="container-large">
<div className="user_title-wrap">
<h2 className="heading-style-h2">Les bons messages, au bon moment</h2>
<div className="user_content-wrap is-user">
<p className="text-size-regular is-user">Vous choisissez le ton une fois. Ensuite, Loyna envoie chaque message au bon client, directement sur son écran de verrouillage. Sans SMS à payer, et jamais plus d’un message commercial par jour.</p>
</div>
</div>
<div className="user_flex-wrap is-ayesha">
<div className="user_img-wrap">
<img src="/img/frame-2147235961.webp" loading="lazy" alt="Cliente qui consulte son téléphone" className="user_img" />
</div>
<div className="user_card-content">
<div className="text-size-regular is-animate">“Joyeux anniversaire Camille ! Pour fêter ça, votre croissant est offert toute la semaine. À très vite au Fournil.”</div>
<div className="user_name-flex">
<div className="user_name-wrap">
<div className="text-size-xmedium is-animate">Anniversaire</div>
<div className="text-size-small is-animate">Envoyé automatiquement le jour J</div>
</div>
</div>
</div>
</div>
<div className="user_flex-wrap is-daniel">
{MESSAGES.map((m) => (
<div className="user_card-wrap" key={m.titre}>
<div className="text-size-regular is-animate">{m.texte}</div>
<div className="user_name-flex is-daniel">
<div className="user_name-wrap">
<div className="text-size-xmedium is-animate">{m.titre}</div>
<div className="text-size-small is-animate">{m.quand}</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>

<section className="section_offers">
<div className="container-large">
<div className="offers_head">
<h2 className="heading-style-h2">1 mois gratuit, puis dès 29 € par mois</h2>
<p className="text-size-regular">Deux offres, sans engagement. Clients et cartes illimités dans les deux.</p>
</div>
<div className="offers_grid">
<div className="offer_card">
<div className="offer_name">{OFFRES.starter.nom}</div>
<div className="offer_hook">{OFFRES.starter.accroche}</div>
<div className="offer_price">{OFFRES.starter.prix}<span> HT / mois</span></div>
<ul className="offer_list">
<li>Carte Wallet à vos couleurs</li>
<li>5 campagnes par semaine</li>
<li>Messages automatiques inclus</li>
<li>Notification de proximité (1 adresse)</li>
<li>Équipe et téléphones illimités</li>
</ul>
<Link href="/tarifs" className="offer_btn">Voir le détail</Link>
</div>
<div className="offer_card is-pro">
<div className="offer_badge">Le plus choisi</div>
<div className="offer_name">{OFFRES.pro.nom}</div>
<div className="offer_hook">{OFFRES.pro.accroche}</div>
<div className="offer_price">{OFFRES.pro.prix}<span> HT / mois</span></div>
<ul className="offer_list">
<li>Tout Starter, plus :</li>
<li>Campagnes illimitées</li>
<li>Proximité sur 3 adresses</li>
<li>Carte finalisée par notre équipe, sans mention Loyna</li>
<li>Support prioritaire</li>
</ul>
<Link href="/tarifs" className="offer_btn">Voir le détail</Link>
</div>
</div>
<p className="offers_note">−15 % avec un engagement de 12 mois. Mise en service de {OFFRES.miseEnService} offerte avec l’engagement.</p>
</div>
</section>

<Faq intro="Ce que les commerçants nous demandent le plus souvent avant de se lancer." items={FAQ_GENERALE} />

<FinalCta />
<Footer />
</div>

</>
  )
}
