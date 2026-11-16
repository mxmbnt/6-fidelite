/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CTA_HREF } from '@/content/site'

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
<h1 className="heading-style-h1 is-large is-about">Faire revenir vos clients, simplement</h1>
<div className="hero_content-wrap is-about is-left">
<p className="text-size-regular is-white is-large is-center">Chez Fidly, nous pensons que la fidélité ne devrait plus tenir sur un carton tamponné. Notre mission : donner aux commerces de proximité les mêmes outils que les grandes enseignes, en restant simples et abordables.</p>
</div>
<div className="button_group is-feature is-left">
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
<div className="hero_img-wrap">
<img width={700} height={709} src="/img/group-1982249872.webp" loading="lazy" alt="Écran du tableau de bord Fidly" className="hero_img" />
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
<section className="section_story">
<div className="container-large">
<div className="feature_card-flex">
<div className="story_left-wrap">
<img src="/img/group-1982249873.svg" loading="lazy" alt="motif de fond" className="story_shadow" />
<div className="story_img-wrap">
<img src="/img/story-diagram-1-story.webp" loading="lazy" alt="Cercle bleu abstrait entouré de cercles concentriques et d'une grille en perspective." className="story_left-img" />
<img src="/img/story-diagram-2-mission-v2.webp" loading="lazy" alt="Schéma de la mission Fidly" className="story_left-img is-2" />
<img src="/img/story-diagram-3-vision.webp" loading="lazy" alt="Schéma de la vision Fidly" className="story_left-img is-3" />
</div>
</div>
<div className="feature_conversation-wrap is-story">
<div className="feature_title-conversation is-story">
<h2 className="heading-style-h3 is-feature">Notre histoire</h2>
<div className="text-size-regular">Fidly est né derrière le comptoir d'une boulangerie lyonnaise : des cartes en carton perdues, oubliées, jamais complétées. Nous avons imaginé une carte qui vit dans le téléphone de vos clients, se tamponne en un scan et leur rappelle de revenir.</div>
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
<p className="text-size-regular">Fidly est né d'une idée simple : remplacer la carte en carton par une carte digitale que l'on ne perd jamais. Ce qui n'était qu'un test dans une boulangerie équipe aujourd'hui des milliers de commerces, du café de quartier au réseau de franchises.</p>
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
<h2 className="heading-style-display">Pourquoi choisir Fidly</h2>
<div className="feature_content-wrap is-standout">
<p className="text-size-regular is-center">Fidly combine la puissance des Wallets mobiles avec une interface pensée pour le comptoir.</p>
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
<p className="text-size-regular">Vos données clients vous appartiennent. Fidly est hébergé en France et conforme au RGPD, avec un contrôle total sur vos informations.</p>
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
<img src="/img/iphone-14-pro-90888.webp" loading="lazy" alt="Animation de l'application sur iPhone" className="mobile_img is-size" />
</div>
<div className="syntra_right-wrap">
<div className="syntra_wrap">
<h2 className="heading-style-h2">Une communauté de commerçants</h2>
<p className="text-size-regular text-color-black">Fidly réunit une communauté grandissante de boulangers, cafetiers, coiffeurs, fleuristes et commerçants indépendants qui partagent leurs idées pour fidéliser leurs clients.</p>
</div>
<div className="pricing_highlight-title">Points clés :</div>
<div className="pricing_highlight-wrap">
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Statistiques en temps réel</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Détection des clients inactifs</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Export CSV de vos données</div>
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
