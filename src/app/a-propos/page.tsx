/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Faq, FinalCta, MetiersMarquee } from '@/components/Blocks'
import { CTA_HREF, FAQ_GENERALE } from '@/content/site'

export default function AboutUsPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary">
<Nav />
<section className="section_hero is-top-0">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap">
<h1 className="heading-style-h1 is-large is-about">Des outils de grande enseigne, à la taille de votre boutique</h1>
<div className="hero_content-wrap is-about is-left">
<p className="text-size-regular is-white is-large is-center">Les grandes enseignes ont des applis, des cartes et des équipes marketing. Les commerces indépendants ont un comptoir et peu de temps. Loyna est fait pour eux : une carte de fidélité moderne, prête en 5 minutes, à un prix qui a du sens.</p>
</div>
<div className="button_group is-feature is-left">
<a href={CTA_HREF} className="primary_btn w-inline-block">
<div className="hero_btn">
<div className="hero_btn-flex">
<div className="btn-text-wrap">
<div className="text-1">Essayer gratuitement</div>
<div className="text-2">Essayer gratuitement</div>
</div>
<img loading="lazy" src="/img/arrow-cta.svg" alt="" className="button_logo" />
</div>
</div>
</a>
<a href="/fonctionnalites" className="secondary_btn w-inline-block">
<div className="demo-text-wrap">
<div className="static-text">Les fonctionnalités</div>
<div className="absolute-text">Les fonctionnalités</div>
</div>
</a>
</div>
</div>
<div className="hero_img-wrap">
<img width={700} height={709} src="/img/group-1982249872.webp" loading="lazy" alt="Tableau de bord Loyna : 412 passages ce mois-ci" className="hero_img" />
</div>
</div>
</div>
</section>
</div>
<MetiersMarquee />
<section className="section_story">
<div className="container-large">
<div className="feature_card-flex">
<div className="story_left-wrap">
<img src="/img/group-1982249873.svg" loading="lazy" alt="motif de fond" className="story_shadow" />
<div className="story_img-wrap">
<img src="/img/story-diagram-1-story.webp" loading="lazy" alt="Cercle bleu abstrait entouré de cercles concentriques et d'une grille en perspective." className="story_left-img" />
<img src="/img/story-diagram-2-mission-v2.webp" loading="lazy" alt="Schéma de la mission Loyna" className="story_left-img is-2" />
<img src="/img/story-diagram-3-vision.webp" loading="lazy" alt="Schéma de la vision Loyna" className="story_left-img is-3" />
</div>
</div>
<div className="feature_conversation-wrap is-story">
<div className="feature_title-conversation is-story">
<h2 className="heading-style-h3 is-feature">Notre histoire</h2>
<div className="text-size-regular">Loyna est né derrière le comptoir d'une boulangerie montpelliéraine : des cartes en carton perdues, oubliées, jamais complétées. Nous avons imaginé une carte qui vit dans le téléphone de vos clients, se tamponne en un scan et leur rappelle de revenir.</div>
</div>
<div className="feature_img-wrap is-story">
<img width={478} height={226} src="/img/frame-2147237203.webp" loading="lazy" alt="deux amies qui rient en terrasse" className="feature_conversation-img" />
</div>
</div>
<div data-current="Tab 3" data-easing="ease" data-duration-in="300" data-duration-out="100" className="story_tabs w-tabs">
<div className="story_tab-menu w-tab-menu">
<a data-w-tab="Tab 1" className="story_tab-link w-inline-block w-tab-link">
<div>Notre histoire</div>
</a>
<a data-w-tab="Tab 2" className="story_tab-link w-inline-block w-tab-link">
<div>Notre mission</div>
</a>
<a data-w-tab="Tab 3" className="story_tab-link-alt w-inline-block w-tab-link">
<div>Notre vision</div>
</a>
</div>
<div className="story_tab-content w-tab-content">
<div data-w-tab="Tab 1" className="story_pane w-tab-pane">
<div className="story_tab-pane">
<div className="story_text-wrap">
<h3 className="heading-style-h3 is-feature">Notre histoire</h3>
<p className="text-size-regular">Loyna est né d'une idée simple : remplacer la carte en carton par une carte digitale que l'on ne perd jamais. Ce qui n'était qu'un test dans une boulangerie s'adresse aujourd'hui à tous les commerces indépendants, du café de quartier au réseau de franchises.</p>
</div>
<div className="story_about-img-wrap">
<img width={478} height={226} src="/img/frame-2147237203.webp" loading="lazy" alt="deux amies qui rient en terrasse" className="story_vision-img" />
</div>
</div>
</div>
<div data-w-tab="Tab 2" className="story_pane w-tab-pane">
<div className="story_tab-pane">
<div className="story_text-wrap">
<h3 className="heading-style-h3 is-feature">Notre mission</h3>
<p className="text-size-regular">Notre mission est de rendre la fidélisation simple, accessible et rentable pour chaque commerçant. Nous concevons des outils qui se prennent en main en quelques minutes, sans matériel ni compétence technique, pour que vous puissiez vous concentrer sur vos clients.</p>
</div>
<div className="story_about-img-wrap">
<img src="/img/hwrk2xt9eterajldfpcqz1etrns.webp" loading="lazy" alt="Un homme et une femme souriants prennent un selfie en extérieur." className="story_vision-img" />
</div>
</div>
</div>
<div data-w-tab="Tab 3" className="story_pane w-tab-pane w--tab-active">
<div className="story_tab-pane">
<div className="story_text-wrap">
<h3 className="heading-style-h3 is-feature">Notre vision</h3>
<p className="text-size-regular">Nous imaginons des centres-villes vivants, où chaque commerce indépendant peut créer un lien durable avec ses clients, mesurer ce qui fonctionne et rivaliser avec les grandes enseignes grâce à des outils pensés pour lui.</p>
</div>
<div className="story_about-img-wrap">
<img src="/img/jonwfcs0py4zcqrlroj1fk6njo.webp" loading="lazy" alt="Femme souriante regardant son smartphone." className="story_vision-img" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section_standout">
<div className="container-large">
<div className="feature_title-wrap is-standout">
<h2 className="heading-style-display">Pourquoi choisir Loyna</h2>
<div className="feature_content-wrap is-standout">
<p className="text-size-regular is-center">La technologie des Wallets mobiles, avec une interface pensée pour le comptoir.</p>
</div>
</div>
<div className="feature_card-flex">
<div className="feature_card-wrap is-standout-card">
<div className="feature_logo-flex is-standout">
<div className="social-icon">
<img src="/img/lrwgzzveozqinkwm1xvenqsb9u.webp" loading="lazy" alt="Icône d'une personne devant un globe." className="feature_logo-img is-size" />
</div>
<h3 className="heading-style-h3">Pensé pour le comptoir</h3>
</div>
<div className="feature_card-content is-standout">
<p className="text-size-regular">Chaque fonctionnalité est conçue avec des commerçants, pour être utilisée en plein rush, en deux secondes.</p>
</div>
</div>
<div className="feature_card-wrap is-standout-card">
<div className="feature_logo-flex is-standout">
<div className="social-icon">
<img src="/img/eos-icons_ai-1-.svg" loading="lazy" alt="" className="feature_logo-img is-size" />
</div>
<h3 className="heading-style-h3">Apple Wallet et Google Wallet</h3>
</div>
<div className="feature_card-content is-standout">
<p className="text-size-regular">Vos cartes s'ajoutent en un geste au Wallet du téléphone, sans application à télécharger pour vos clients.</p>
</div>
</div>
<div className="feature_card-wrap is-standout-card">
<div className="feature_logo-flex is-standout">
<div className="social-icon">
<img src="/img/material-symbols_privacy-tip-outline.svg" loading="lazy" alt="" className="feature_logo-img is-size" />
</div>
<h3 className="heading-style-h3">Données protégées</h3>
</div>
<div className="feature_card-content is-standout">
<p className="text-size-regular">Vos données clients vous appartiennent. Loyna est hébergé en France et conforme au RGPD, avec un contrôle total sur vos informations.</p>
</div>
</div>
</div>
</div>
</section>
<section className="section_value">
<div className="container-large">
<div className="value_title-wrap">
<h2 className="heading-style-h2">Nos valeurs</h2>
<div className="text-size-regular is-center">Nos valeurs guident chaque fonctionnalité que nous construisons pour les commerçants.</div>
</div>
<div className="value_card-flex">
<div className="value_card-wrap">
<div className="value_card-number">
<div className="text-size-regular is-white">01</div>
</div>
<div className="value_card-img">
<h3 className="heading-style-h5 is-center">Proximité</h3>
<div className="value_img-wrap">
<img src="/img/hugeicons_ai-innovation-03.svg" loading="lazy" alt="" className="shared_card-img" />
</div>
<div className="text-size-regular is-center">Un support humain, basé en France, qui connaît votre métier.</div>
</div>
</div>
<div className="value_card-wrap">
<div className="value_card-number">
<div className="text-size-regular is-white">02</div>
</div>
<div className="value_card-img">
<h3 className="heading-style-h5 is-center">Simplicité</h3>
<div className="value_img-wrap">
<img src="/img/ph_copy-simple.svg" loading="lazy" alt="" className="shared_card-img" />
</div>
<div className="text-size-regular is-center">Une carte prête en 5 minutes, sans matériel.</div>
</div>
</div>
<div className="value_card-wrap">
<div className="value_card-number">
<div className="text-size-regular is-white">03</div>
</div>
<div className="value_card-img">
<h3 className="heading-style-h5 is-center">Confiance</h3>
<div className="value_img-wrap">
<img src="/img/codicon_workspace-trusted.svg" loading="lazy" alt="" className="shared_card-img" />
</div>
<div className="text-size-regular is-center">Des données hébergées en France et conformes au RGPD.</div>
</div>
</div>
<div className="value_card-wrap">
<div className="value_card-number">
<div className="text-size-regular is-white">04</div>
</div>
<div className="value_card-img">
<h3 className="heading-style-h5 is-center">Croissance</h3>
<div className="value_img-wrap">
<img src="/img/fluent_arrow-growth-20-filled.svg" loading="lazy" alt="" className="shared_card-img" />
</div>
<div className="text-size-regular is-center">Aider chaque commerce à faire revenir ses clients plus souvent.</div>
</div>
</div>
</div>
</div>
</section>
<section className="section_global">
<div className="container-large">
<div className="synta_wrap">
<div className="mobile_img-wrap is-height">
<img src="/img/iphone-14-pro-90888.webp" loading="lazy" alt="Éditeur de carte Loyna : nom, couleur et récompense" className="mobile_img is-size" />
</div>
<div className="syntra_right-wrap">
<div className="syntra_wrap">
<h2 className="heading-style-h2">Construit avec des commerçants</h2>
<p className="text-size-regular text-color-black">Chaque écran est testé au comptoir, en plein rush, par des boulangers, des coiffeurs et des fleuristes. Si une action prend plus de deux secondes, on la simplifie.</p>
</div>
<div className="pricing_highlight-title">Nos principes :</div>
<div className="pricing_highlight-wrap">
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Rien à installer pour vos clients</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Des prix affichés, sans surprise</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Vos données restent les vôtres</div>
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
