/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Check, Faq, FinalCta, MetiersMarquee, PrimaryBtn, Reassurance, SecondaryBtn } from '@/components/Blocks'
import { FAQ_GENERALE } from '@/content/site'

export const metadata: Metadata = {
  title: 'Fonctionnalités',
  description: 'Carte Apple Wallet et Google Wallet, scan en caisse, messages automatiques, notification de proximité et statistiques : tout ce que fait Loyna.',
}

const SECURITE = [
  { icon: '/img/fluent-mdl2_encryption.svg', t: 'Hébergé en France', d: 'Les données sont chiffrées et hébergées en France. Personne d’autre que vous n’y a accès.' },
  { icon: '/img/material-symbols_privacy-tip-outline-rounded.svg', t: 'RGPD intégré', d: 'Consentements séparés et jamais pré-cochés : vos clients choisissent ce qu’ils acceptent de recevoir.' },
  { icon: '/img/gala_data.svg', t: 'Des messages espacés', d: 'Jamais plus d’un message commercial par jour et par client. Votre carte reste une bonne nouvelle, pas un spam.' },
]

export default function FeaturesPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-home">
<img src="/img/background-animated-sharp-v2.webp" loading="lazy" alt="" className="hero_bg-img is-height" />
<Nav />
<section className="section_hero is-section-relative">
<div className="container-large">
<div className="hero_wrap is-phone">
<div className="hero_title-wrap is-left">
<h1 className="heading-style-h1 is-large is-font">Tout ce qu’il faut pour qu’ils reviennent</h1>
<div className="hero_content-wrap is-feature">
<p className="text-size-regular is-white is-large is-hero">Une carte dans leur téléphone, un scanner dans le vôtre, et des messages qui partent tout seuls. Le reste, c’est votre accueil qui s’en charge.</p>
</div>
<div className="button_group is-feature is-app">
<PrimaryBtn />
<SecondaryBtn label="Voir les tarifs" href="/tarifs" />
</div>
<Reassurance light />
</div>
<div className="hero_img-wrap is-phone">
<div className="hero_phone-clip">
<img src="/img/bw39b3op0btyxanigu6cltakgxs.webp" loading="lazy" alt="Carte de fidélité d’un salon de coiffure dans Apple Wallet" className="hero_img is-phone" />
</div>
<div className="hero_float-card is-left">
<div className="hero_float-icon">
<img src="/img/5n4hksk3xyr68m239ec75oeva.webp" loading="lazy" alt="" className="hero_float-icon-img" />
</div>
<div className="hero_float-body">
<div className="hero_float-title">Nouvelle cliente</div>
<div className="hero_float-text">Léa vient d’ajouter votre carte à son téléphone.</div>
</div>
</div>
<div className="hero_float-card is-right">
<div className="hero_float-icon is-align-center">
<img src="/img/yhi2zuwv3aig0uws29vafhrlhvc.webp" loading="lazy" alt="" className="hero_float-icon-img" />
</div>
<div className="hero_float-body">
<div className="hero_float-title is-align-center">8 tampons sur 10 : plus que 2 passages</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<MetiersMarquee />

<section className="section_feature">
<div className="container-large">
<div className="feature_title-wrap">
<h2 className="heading-style-display">Du comptoir à leur écran</h2>
<div className="feature_content-wrap">
<div className="text-size-regular is-c">Trois briques simples qui se complètent : la carte, le scan, les messages.</div>
</div>
</div>
<div className="feature_card-flex is-feature">
<div className="feature_conversation-wrap">
<div className="feature_title-conversation">
<h3 className="heading-style-h3 is-feature">Une carte dans leur téléphone</h3>
<div className="text-size-regular is-scroll">Vos clients scannent votre QR code et la carte rejoint Apple Wallet ou Google Wallet. Pas d’application, pas de mot de passe. Elle se met à jour toute seule à chaque passage, et s’affiche sur leur écran quand ils passent près de chez vous.</div>
</div>
<div className="feature_img-wrap">
<img width={348} height={339} src="/img/iphone-14-pro-690e7.webp" loading="lazy" alt="Carte de fidélité Café Bastide dans Apple Wallet, 4 tampons sur 10" className="feature_conversation-img is-width" />
</div>
</div>
<div className="feature_conversation-wrap">
<div className="feature_title-conversation">
<h3 className="heading-style-h3 is-feature">Au comptoir, un scan suffit</h3>
<div className="text-size-regular is-scroll">Avec l’application Loyna Business, vous scannez la carte en deux secondes. Un passage n’est jamais compté deux fois, vous pouvez annuler une erreur, et la récompense se débloque d’elle-même. Tampons ou points, à vous de choisir.</div>
</div>
<div className="feature_img-wrap is-feature">
<img width={348} height={339} src="/img/iphone-14-pro-1-.webp" loading="lazy" alt="Écran de scan : passage validé, 7 tampons sur 10" className="feature_conversation-img is-width" />
</div>
</div>
</div>
<div className="feature_conversation-wrap is-creative">
<div className="feature_title-conversation is-creative">
<h3 className="heading-style-h3 is-feature">Des messages qui partent tout seuls</h3>
<div className="text-size-regular is-scroll">Anniversaire le jour J, relance après 60 jours d’absence, « plus qu’un passage », demande d’avis Google après la 3e visite : vous activez, Loyna envoie. Et quand vous avez une actu, vous écrivez un message et choisissez qui le reçoit. Pas de SMS à payer.</div>
</div>
<div className="feature_img-wrap is-right-img">
<img width={348} height={388} src="/img/iphone-14-pro-2-.webp" loading="lazy" alt="Écran de rédaction d’un message envoyé à 128 clients" className="feature_conversation-img is-width" />
</div>
</div>
</div>
</section>

<section className="section_synta">
<div className="container-large">
<div className="synta_wrap is-vertical">
<div className="mobile_img-wrap is-insight-img">
<img src="/img/iphone-14-pro.webp" loading="lazy" alt="Tableau de bord Loyna : passages, clients, récompenses" className="mobile_img" />
</div>
<div className="syntra_wrap">
<h2 className="heading-style-display is-synta is-left-align">Des chiffres clairs, sans tableur</h2>
<p className="text-size-regular text-color-black">Combien de clients reviennent, lesquels décrochent, combien de récompenses sont parties : votre tableau de bord répond en un coup d’œil, sur téléphone comme sur ordinateur.</p>
<div className="pricing_highlight-title">Vous y trouvez :</div>
<div className="pricing_highlight-wrap">
<Check>Clients actifs et clients à relancer</Check>
<Check>Un bilan chaque mois, avec des conseils concrets</Check>
<Check>L’export CSV de toutes vos données</Check>
</div>
</div>
</div>
</div>
</section>

<section className="section_work">
<div className="container-large">
<div className="work_wraps">
<div className="work_wrap">
<h2 className="heading-style-h2">Prête en 5 minutes</h2>
<p className="text-size-regular is-80">Vous n’avez besoin que de votre téléphone et de votre logo.</p>
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
<div className="text-size-large is-step-title">2. Vous affichez le QR code</div>
<div className="text-size-small is-step">Sur le comptoir, en vitrine ou sur vos réseaux</div>
</div>
</div>
<div className="download_app-wrap is-chatting">
<img loading="lazy" src="/img/group-1982249813.svg" alt="" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">3. Vous scannez à chaque passage</div>
<div className="text-size-small is-chatting">Loyna s’occupe des récompenses et des rappels</div>
</div>
</div>
<img loading="lazy" src="/img/group-1982249866.svg" alt="" className="work_absolute-img" />
</div>
</div>
</section>

<section className="section_cross">
<div className="container-large">
<div className="synta_wrap is-invert">
<div className="syntra_wrap is-cross">
<h2 className="heading-style-display is-cross-title">Toute l’équipe, toutes vos boutiques</h2>
<div className="cross_content-wrap">
<p className="text-size-regular text-color-black">Chaque employé scanne depuis son propre téléphone, avec les droits que vous lui donnez. Vous gardez la main sur tout, depuis une seule interface.</p>
</div>
<div className="pricing_highlight-title">Pour bien travailler à plusieurs :</div>
<div className="pricing_highlight-wrap">
<Check><span className="text-weight-medium">Rôles :</span> gérant ou employé, chacun ses accès</Check>
<Check><span className="text-weight-medium">Journal d’activité :</span> qui a scanné quoi, et quand</Check>
<Check><span className="text-weight-medium">Corrections tracées :</span> un tampon ajouté à la main reste visible</Check>
<Check><span className="text-weight-medium">Plusieurs adresses :</span> une carte, plusieurs boutiques</Check>
</div>
</div>
<div className="mobile_img-wrap is-cross-img">
<img width={464} height={447} src="/img/iphone-14-pro-4-.webp" loading="lazy" alt="Liste des clients dans Loyna Business" className="mobile_img" />
</div>
</div>
</div>
</section>

<section className="section_security">
<div className="container-large">
<div className="security_title-wrap">
<h2 className="heading-style-display">Des données bien gardées</h2>
<div className="security_content-wrap">
<div className="text-size-regular is-center">Les informations de vos clients vous appartiennent. Loyna les protège et ne s’en sert jamais pour autre chose que votre carte.</div>
</div>
</div>
<div className="security_flex-wrap">
{SECURITE.map((s) => (
<div className="security_card-flex" key={s.t}>
<img src="/img/group-1982249817.svg" loading="lazy" alt="" className="shared_line-img" />
<div className="security_card-wrap">
<div className="social-icon is-security">
<img src={s.icon} loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-xxmedium">{s.t}</div>
<div className="text-size-regular">{s.d}</div>
</div>
</div>
))}
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
