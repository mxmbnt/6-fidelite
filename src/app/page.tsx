/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CTA_HREF } from '@/content/site'

export default function HomePage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-home">
<img src="/img/background-animated-sharp-v2.webp" loading="lazy" alt="Fond abstrait bleu quadrillé, en dégradé vers le blanc." className="hero_bg-img" />
<Nav />
<section className="section_hero is-section-relative">
<div className="container-large">
<div className="hero_wrap is-flex">
<div className="hero_title-wrap">
<h1 className="heading-style-h1">La fidélité client, dans le téléphone</h1>
<div className="hero_content-wrap is-load">
<p className="text-size-regular is-white">Avec Fidly, vos clients ajoutent votre carte à leur Wallet, cumulent leurs tampons en un scan et reviennent plus souvent.</p>
</div>
<div className="button_group is-hero">
<a href={CTA_HREF} className="primary_btn w-inline-block">
<div className="hero_btn">
<div className="hero_btn-flex">
<div className="btn-text-wrap">
<div className="text-1">Essai gratuit</div>
<div className="text-2">Essai gratuit</div>
</div>
<img loading="lazy" src="/img/frame-2147235889.svg" alt="" className="button_logo" />
</div>
</div>
</a>
<a href={CTA_HREF} className="secondary_btn w-inline-block">
<div className="demo-text-wrap">
<div className="static-text">Voir une démo</div>
<div className="absolute-text">Voir une démo</div>
</div>
</a>
</div>
</div>
<div className="hero_img-wrap is-height">
<img src="/img/iphone-14-pro-f4a5e.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="hero_phone-left-img" />
<img src="/img/iphone-14-pro-1--f1cac.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="hero_phone-right-img" />
</div>
</div>
</div>
</section>
</div>
<section className="section_marquee-alt">
<div className="container-large">
<section id="Clients" className="section_marquee">
<div className="padding-section-medium-alt">
<div className="marquee_component-alt">
<div className="marquee_list-alt">
<div className="marquee_component">
<div className="marquee_list">
<div className="marquee_alt-wrap">
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
<img loading="lazy" src="/img/69454139b45ab895bdf1b10e_mask-group-79-.svg" alt="" className="marquee_logo" />
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</section>
<section className="section_synta">
<div className="container-large">
<div className="synta_wrap">
<div className="mobile_img-wrap">
<img src="/img/iphone-14-pro.webp" loading="lazy" alt="iPhone affichant le tableau de bord Fidly" className="mobile_img" />
</div>
<div className="syntra_right-wrap">
<div className="syntra_wrap">
<h2 className="heading-style-h2">Pourquoi Fidly ?</h2>
<p className="text-size-regular text-color-black">Fidly est bien plus qu'une carte à tampons. C'est un outil complet pour faire revenir vos clients : carte dans le Wallet, notifications, campagnes et statistiques. Sans matériel, sans application à télécharger, et prêt en 5 minutes.</p>
</div>
<div className="pricing_highlight-title">Points clés :</div>
<div className="pricing_highlight-wrap">
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Carte ajoutée en un scan</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Notifications sur l'écran de verrouillage</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Données hébergées en France</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Sans engagement, sans matériel</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section_work">
<div className="container-large">
<div className="work_wraps">
<div className="work_wrap">
<h2 className="heading-style-h2">Comment ça marche</h2>
<p className="text-size-regular is-80">Créez votre carte, partagez votre QR code et commencez à fidéliser dès aujourd'hui.</p>
</div>
<div className="download_app-wrap">
<img loading="lazy" src="/img/group-1982249813.svg" alt="icône bleue" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">Étape 1 - Créez votre carte</div>
<div className="text-size-small is-step">Logo, couleurs et récompense en 5 min</div>
</div>
</div>
<div className="download_app-wrap is-sign-up">
<img loading="lazy" src="/img/group-1982249813.svg" alt="icône bleue" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">Étape 2 - Vos clients l'ajoutent</div>
<div className="text-size-small is-step">Un scan, et la carte est dans leur Wallet</div>
</div>
</div>
<div className="download_app-wrap is-chatting">
<img loading="lazy" src="/img/group-1982249813.svg" alt="icône bleue" />
<div className="download_title-wrap">
<div className="text-size-large is-step-title">Étape 3 - Ils cumulent les tampons</div>
<div className="text-size-small is-chatting">Un scan en caisse à chaque passage</div>
</div>
</div>
<img loading="lazy" src="/img/group-1982249866.svg" alt="animation" className="work_absolute-img" />
</div>
</div>
</section>
<section className="section_feature">
<div className="container-large">
<div className="feature_title-wrap">
<h2 className="heading-style-display">Des fonctionnalités pensées pour les commerçants</h2>
<div className="feature_content-wrap">
<p className="text-size-regular is-center">De la création de votre carte au suivi de vos clients, Fidly vous donne tous les outils pour fidéliser simplement.</p>
</div>
</div>
<div className="feature_card-flex">
<div className="feature_card-wrap">
<div className="smart_img-wrap">
<img alt="" loading="lazy" src="/img/grid-bg-2.webp" className="feature_img" />
</div>
<div className="feature_logo-flex">
<div className="social-icon">
<img src="/img/hugeicons_auto-conversations.svg" loading="lazy" alt="Icône cartes Wallet" className="feature_logo-img" />
</div>
<h3 className="heading-style-h3">Cartes Wallet</h3>
</div>
<div className="feature_card-content">
<p className="text-size-regular">Vos clients ajoutent votre carte à leur Wallet en scannant simplement un QR code.</p>
</div>
</div>
<div className="feature_card-wrap">
<div className="smart_img-wrap">
<img alt="" loading="lazy" src="/img/grid-bg-1.webp" className="feature_img" />
</div>
<div className="feature_logo-flex">
<div className="social-icon">
<img src="/img/material-symbols-light_productivity.svg" loading="lazy" alt="Icône tampon" className="feature_logo-img" />
</div>
<h3 className="heading-style-h3">Tampon en un scan</h3>
</div>
<div className="feature_card-content">
<p className="text-size-regular">Un scan en caisse et le tampon est ajouté. La récompense se débloque toute seule.</p>
</div>
</div>
<div className="feature_card-wrap">
<div className="smart_img-wrap">
<img alt="" loading="lazy" src="/img/grid-bg-3.webp" className="feature_img" />
</div>
<div className="feature_logo-flex">
<div className="social-icon">
<img src="/img/carbon_ibm-cloud-code-engine.svg" loading="lazy" alt="Icône campagnes" className="feature_logo-img" />
</div>
<h3 className="heading-style-h3">Campagnes & notifications</h3>
</div>
<div className="feature_card-content">
<p className="text-size-regular">Envoyez offres et relances directement sur le téléphone de vos clients.</p>
</div>
</div>
</div>
</div>
</section>
<section className="section_experience">
<div className="container-large">
<div className="experience_title-wrap">
<h2 className="heading-style-h2">Une expérience fluide, en caisse comme en ligne</h2>
<div className="experience_content-wrap">
<p className="text-size-regular is-center">Fidly combine la technologie des Wallets mobiles avec une interface claire, pour une expérience simple pour vous comme pour vos clients.</p>
</div>
</div>
<div className="experience_background-img">
<div className="experience_flex-wrap">
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/mingcute_lightning-line.svg" loading="lazy" alt="Icône rapidité" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">Tampon en 2 secondes</div>
</div>
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/ri_device-line.svg" loading="lazy" alt="Icône appareils" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">Synchro multi-boutiques</div>
</div>
</div>
<div className="experience_flex-wrap is-modern">
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/clarity_design-line.svg" loading="lazy" alt="Icône design" className="feature_logo-img" />
</div>
<div className="text-size-regular is-c">Carte à vos couleurs</div>
</div>
<div className="experience_logo-wrap">
<div className="social-icon is-experience is-r">
<img src="/img/mdi_smart-card-outline.svg" loading="lazy" alt="Icône carte" className="feature_logo-img" />
</div>
<div className="text-size-regular is-r is-font">Offres personnalisées</div>
</div>
</div>
<div className="experience_flex-wrap is-dark-light">
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/material-symbols-light_support.svg" loading="lazy" alt="Icône support" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">iPhone et Android</div>
</div>
<div className="experience_logo-wrap">
<div className="social-icon is-experience">
<img src="/img/mdi_stopwatch-secure-outline.svg" loading="lazy" alt="Icône sécurité" className="feature_logo-img" />
</div>
<div className="text-size-regular is-center is-font">Données sécurisées</div>
</div>
</div>
<img width={939} height={939} src="/img/group-1982249867.webp" loading="lazy" alt="iPhone affichant le tableau de bord" className="shared_image-4" />
</div>
</div>
</section>
<section className="section_built">
<div className="container-large">
<div className="synta_wrap is-invert">
<div className="built-title-wrap">
<div className="syntra_wrap">
<h2 className="heading-style-h2">Pensé pour chaque commerce</h2>
<p className="text-size-regular text-color-black">Boulangerie, café, salon de coiffure ou réseau de boutiques : Fidly s'adapte à votre activité et à vos clients.</p>
</div>
<div className="pricing_highlight-wrap is-top-margin">
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">
<span className="text-weight-medium">Boulangeries :</span> le 10e pain offert, sans carton</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">
<span className="text-weight-medium">Cafés :</span> fidélisez vos habitués du matin</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">
<span className="text-weight-medium">Coiffeurs :</span> relancez entre deux rendez-vous</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">
<span className="text-weight-medium">Réseaux :</span> pilotez toutes vos boutiques</div>
</div>
</div>
</div>
<div className="mobile_img-wrap">
<div className="mobile_img-user">
<img src="/img/iphone-14-pro-2--b2ee0.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="mobile_img" />
</div>
</div>
</div>
</div>
</section>
<section className="section_growth-trusted">
<div className="container-large">
<div className="growth_title-wrap">
<h2 className="heading-style-h2">Conçu pour grandir, adopté par les commerçants</h2>
<div className="growth_content-wrap">
<p className="text-size-regular is-growth">Fidélisez mieux et développez votre chiffre d'affaires grâce à des statistiques en temps réel, directement dans votre poche.</p>
</div>
</div>
<div className="growth_wrap-grid">
<div className="growth_flex-wrap">
<div className="growth_card-wrap is-height">
<div className="growth_content-card">
<div className="countries_title-wrap">
<div className="text-size-xxsmall">Pays</div>
</div>
<div className="growth_card-content">
<div className="text-size-xsmall">Des commerces équipés dans toute l'Europe</div>
</div>
<div className="growth_img-wrap">
<div data-fb-count-time="3000" data-fb-count="true" data-fb-count-target="20" className="text-size-xxlarge">20</div>
</div>
</div>
<div className="growth_color-shadow">
</div>
</div>
<div className="growth_card-wrap is-second is-gif">
<img src="/img/chart-card.webp" loading="lazy" alt="" className="growth_card-img" />
</div>
<div className="growth_card-wrap is-height">
<div className="growth_content-card">
<div className="countries_title-wrap">
<div className="text-size-xxsmall">Satisfaction</div>
</div>
<div className="growth_card-content">
<div className="text-size-xsmall">des commerçants recommandent Fidly.</div>
</div>
<div className="growth_img-wrap is-ai">
<div data-fb-count-time="3000" data-fb-count="true" data-fb-count-target="98" className="text-size-xxlarge">98</div>
</div>
</div>
<div className="growth_color-shadow">
</div>
</div>
</div>
<div className="growth_flex-wrap is-users">
<div className="growth_card-wrap is-second">
<img src="/img/grid-fade.webp" loading="lazy" alt="" className="growth_card-img" />
</div>
<div className="growth_card-wrap is-active-users">
<div className="growth_card-content-alt is-growth">
<div className="countries_title-wrap">
<div className="text-size-xxsmall">Cartes actives</div>
</div>
<div className="growth_card-content is-active">
<div className="text-size-xsmall">Des clients fidélisés dans les Wallets</div>
</div>
<div className="growth_img-wrap is-font">
<div data-fb-count-time="3000" data-fb-count="true" data-fb-count-target="120" className="text-size-xxlarge is-font">120</div>
<div className="text-size-xxlarge is-font">K</div>
<div className="text-size-xxlarge is-font">+</div>
</div>
</div>
<div className="growth_color-shadow is-user">
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section_user">
<div className="container-large">
<div className="user_title-wrap">
<h2 className="heading-style-h2">Ce qu'en disent les commerçants</h2>
<div className="user_content-wrap is-user">
<p className="text-size-regular is-user">Découvrez comment Fidly aide les commerces de proximité à faire revenir leurs clients. Des retours de commerçants qui l'utilisent chaque jour au comptoir.</p>
</div>
</div>
<div className="user_flex-wrap is-ayesha">
<div className="user_img-wrap">
<img src="/img/frame-2147235961.webp" loading="lazy" alt="jeune femme consultant son téléphone" className="user_img" />
</div>
<div className="user_card-content">
<div className="text-size-regular is-animate">“Mes clients adorent avoir leur carte dans le téléphone : plus de carton oublié à la maison. En trois mois, la moitié de mes habitués l'ont adoptée et je vois clairement qui revient, et quand. Les notifications du vendredi font vraiment la différence.”</div>
<div className="user_name-flex">
<div className="user_name-wrap">
<div className="text-size-xmedium is-animate">Camille R.</div>
<div className="text-size-small is-animate">Boulangerie Le Fournil</div>
</div>
<a href="https://www.linkedin.com/" target="_blank" className="social-icon is-linkedin w-inline-block">
<img src="/img/vector-47-.svg" loading="lazy" alt="Icône réseau social" className="user_social" />
</a>
</div>
</div>
</div>
<div className="user_flex-wrap is-daniel">
<div className="user_card-wrap">
<div className="text-size-regular is-animate">“Installé en dix minutes, sans aucun matériel. Mes clients scannent et c'est tamponné.”</div>
<div className="user_name-flex is-daniel">
<div className="user_name-wrap">
<div className="text-size-xmedium is-animate">Mehdi B.</div>
<div className="text-size-small is-animate">Café Bastide</div>
</div>
<a href="https://www.linkedin.com/" target="_blank" className="social-icon is-linkedin w-inline-block">
<img src="/img/vector-47-.svg" loading="lazy" alt="Icône réseau social" className="user_social" />
</a>
</div>
</div>
<div className="user_card-wrap">
<div className="text-size-regular is-animate">“Les campagnes de relance m'ont fait revenir des clientes que je n'avais pas vues depuis des mois.”</div>
<div className="user_name-flex is-daniel">
<div className="user_name-wrap">
<div className="text-size-xmedium is-animate">Julie T.</div>
<div className="text-size-small is-animate">Salon Mèche Rebelle</div>
</div>
<a href="https://www.linkedin.com/" target="_blank" className="social-icon is-linkedin w-inline-block">
<img src="/img/vector-47-.svg" loading="lazy" alt="Icône réseau social" className="user_social" />
</a>
</div>
</div>
<div className="user_card-wrap">
<div className="text-size-regular is-animate">“Je gère mes trois boutiques depuis un seul tableau de bord. Simple et efficace.”</div>
<div className="user_name-flex is-daniel">
<div className="user_name-wrap">
<div className="text-size-xmedium is-animate">Thomas L.</div>
<div className="text-size-small is-animate">Fleuriste Pétales & Co</div>
</div>
<a href="https://www.linkedin.com/" target="_blank" className="social-icon is-linkedin w-inline-block">
<img src="/img/vector-47-.svg" loading="lazy" alt="Icône réseau social" className="user_social" />
</a>
</div>
</div>
</div>
</div>
</section>
<section className="section_faq">
<div className="container-large">
<div className="faq_title-wrap">
<h2 className="heading-style-h2">Questions fréquentes</h2>
<div className="faq_content-wrap">
<div className="text-size-regular is-faq">Toutes les réponses pour bien démarrer avec Fidly et en tirer le meilleur.</div>
</div>
</div>
<div className="faq_content">
<div className="faq_wrapper">
<a role="button" tabIndex={0} className="faq_question w-inline-block">
<div className="faq_question-wrapper">
<div className="heading-style-h5 is-w-400">Comment démarrer avec Fidly ?</div>
</div>
<div className="faq_icon-wrapper">
<img loading="lazy" src="/img/plus.svg" alt="" className="button_arrow-img" />
</div>
</a>
<div className="faq_answer">
<div className="margin-bottom margin-medium">
<div className="faq_answer-text text-color-secondary">Créez votre compte, personnalisez votre carte (logo, couleurs, récompense) et imprimez votre QR code : vos premiers clients peuvent l'ajouter à leur Wallet en moins de 5 minutes.</div>
</div>
</div>
</div>
<div className="faq_wrapper">
<a role="button" tabIndex={0} className="faq_question w-inline-block">
<div className="faq_question-wrapper">
<div className="heading-style-h5 is-w-400">Les données de mes clients sont-elles protégées ?</div>
</div>
<div className="faq_icon-wrapper">
<img loading="lazy" src="/img/plus.svg" alt="" className="button_arrow-img" />
</div>
</a>
<div className="faq_answer">
<div className="margin-bottom margin-medium">
<div className="faq_answer-text text-color-secondary">Oui. Vos données sont hébergées en France, chiffrées et traitées dans le respect du RGPD. Elles vous appartiennent et sont exportables à tout moment.</div>
</div>
</div>
</div>
<div className="faq_wrapper">
<a role="button" tabIndex={0} className="faq_question w-inline-block">
<div className="faq_question-wrapper">
<div className="heading-style-h5 is-w-400">Faut-il un matériel ou une tablette en caisse ?</div>
</div>
<div className="faq_icon-wrapper">
<img loading="lazy" src="/img/plus.svg" alt="" className="button_arrow-img" />
</div>
</a>
<div className="faq_answer">
<div className="margin-bottom margin-medium">
<div className="faq_answer-text text-color-secondary">Non. Votre smartphone suffit pour scanner la carte de vos clients. Vous pouvez aussi utiliser une tablette ou un ordinateur si vous le souhaitez.</div>
</div>
</div>
</div>
<div className="faq_wrapper">
<a role="button" tabIndex={0} className="faq_question w-inline-block">
<div className="faq_question-wrapper">
<div className="heading-style-h5 is-w-400">Fidly fonctionne-t-il sur iPhone et Android ?</div>
</div>
<div className="faq_icon-wrapper">
<img loading="lazy" src="/img/plus.svg" alt="" className="button_arrow-img" />
</div>
</a>
<div className="faq_answer">
<div className="margin-bottom margin-medium">
<div className="faq_answer-text text-color-secondary">Oui. La carte s'ajoute à Apple Wallet sur iPhone et à Google Wallet sur Android, sans application à télécharger pour vos clients.</div>
</div>
</div>
</div>
<div className="faq_wrapper">
<a role="button" tabIndex={0} className="faq_question w-inline-block">
<div className="faq_question-wrapper">
<div className="heading-style-h5 is-w-400">Puis-je envoyer des offres à mes clients ?</div>
</div>
<div className="faq_icon-wrapper">
<img loading="lazy" src="/img/plus.svg" alt="" className="button_arrow-img" />
</div>
</a>
<div className="faq_answer">
<div className="margin-bottom margin-medium">
<div className="faq_answer-text text-color-secondary">Oui. Envoyez des notifications directement sur l'écran de verrouillage de vos clients : offre du moment, récompense disponible ou message de relance pour les clients inactifs.</div>
</div>
</div>
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
