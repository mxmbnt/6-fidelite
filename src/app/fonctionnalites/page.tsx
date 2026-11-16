/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CTA_HREF } from '@/content/site'

export default function FeaturesPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-home">
<img src="/img/background-animated-sharp-v2.webp" loading="lazy" alt="Fond abstrait bleu quadrillé, en dégradé vers le blanc." className="hero_bg-img is-height" />
<Nav />
<section className="section_hero is-section-relative">
<div className="container-large">
<div className="hero_wrap is-phone">
<div className="hero_title-wrap is-left">
<h1 className="heading-style-h1 is-large is-font">Tout pour fidéliser, dans une seule app</h1>
<div className="hero_content-wrap is-feature">
<p className="text-size-regular is-white is-large is-hero">Cartes Wallet, notifications, campagnes et statistiques : découvrez les outils qui font revenir vos clients, réunis dans une seule application.</p>
</div>
<div className="button_group is-feature is-app">
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
<div className="hero_img-wrap is-phone">
<div className="hero_phone-clip">
<img src="/img/bw39b3op0btyxanigu6cltakgxs.webp" loading="lazy" alt="Écran de smartphone montrant l'application" className="hero_img is-phone" />
</div>
<div className="hero_float-card is-left">
<div className="hero_float-icon">
<img src="/img/5n4hksk3xyr68m239ec75oeva.webp" loading="lazy" alt="Icône de synchronisation" className="hero_float-icon-img" />
</div>
<div className="hero_float-body">
<div className="hero_float-title">Bienvenue chez Fidly</div>
<div className="hero_float-text">Votre carte est prête : partagez votre QR code en caisse.</div>
</div>
</div>
<div className="hero_float-card is-right">
<div className="hero_float-icon is-align-center">
<img src="/img/yhi2zuwv3aig0uws29vafhrlhvc.webp" loading="lazy" alt="Icône de smartphone" className="hero_float-icon-img" />
</div>
<div className="hero_float-body">
<div className="hero_float-title is-align-center">La fidélité nouvelle génération, dans le Wallet</div>
</div>
</div>
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
<section className="section_feature">
<div className="container-large">
<div className="feature_title-wrap">
<h2 className="heading-style-display">Des fonctionnalités pensées pour les commerçants</h2>
<div className="feature_content-wrap">
<div className="text-size-regular is-c">De la création de votre carte au suivi de vos clients, Fidly vous donne tous les outils pour fidéliser simplement.</div>
</div>
</div>
<div className="feature_card-flex is-feature">
<div className="feature_conversation-wrap">
<div className="feature_title-conversation">
<h3 className="heading-style-h3 is-feature">Cartes Wallet</h3>
<div className="text-size-regular is-scroll">Vos clients ajoutent votre carte à Apple Wallet ou Google Wallet en scannant un QR code. Pas d'application à télécharger, pas de compte à créer : la carte est toujours dans leur poche et se met à jour à chaque passage.</div>
</div>
<div className="feature_img-wrap">
<img width={348} height={339} src="/img/iphone-14-pro-690e7.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="feature_conversation-img is-width" />
</div>
</div>
<div className="feature_conversation-wrap">
<div className="feature_title-conversation">
<h3 className="heading-style-h3 is-feature">Tampon en un scan</h3>
<div className="text-size-regular is-scroll">Scannez la carte de votre client avec votre smartphone : le tampon s'ajoute instantanément. Récompense débloquée ? Le client est prévenu sur son écran de verrouillage.</div>
</div>
<div className="feature_img-wrap is-feature">
<img width={348} height={339} src="/img/iphone-14-pro-1-.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="feature_conversation-img is-width" />
</div>
</div>
</div>
<div className="feature_conversation-wrap is-creative">
<div className="feature_title-conversation is-creative">
<h3 className="heading-style-h3 is-feature">Campagnes & notifications</h3>
<div className="text-size-regular is-scroll">Envoyez une offre du moment, une récompense d'anniversaire ou une relance aux clients inactifs. Les notifications s'affichent directement sur l'écran de vos clients, sans passer par les emails ou les SMS payants.</div>
</div>
<div className="feature_img-wrap is-right-img">
<img width={348} height={388} src="/img/iphone-14-pro-2-.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="feature_conversation-img is-width" />
</div>
</div>
</div>
</section>
<section className="section_synta">
<div className="container-large">
<div className="synta_wrap is-vertical">
<div className="mobile_img-wrap is-insight-img">
<img src="/img/iphone-14-pro.webp" loading="lazy" alt="iPhone affichant le tableau de bord Fidly" className="mobile_img" />
</div>
<div className="syntra_wrap">
<h2 className="heading-style-display is-synta is-left-align">Statistiques & insights</h2>
<p className="text-size-regular text-color-black">Suivez vos visites, vos meilleurs clients et l'effet de chaque campagne dans un tableau de bord clair, mis à jour en temps réel.</p>
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
<section className="section_cross">
<div className="container-large">
<div className="synta_wrap is-invert">
<div className="syntra_wrap is-cross">
<h2 className="heading-style-display is-cross-title">Multi-boutiques</h2>
<div className="cross_content-wrap">
<p className="text-size-regular text-color-black">Gérez plusieurs points de vente, équipes et cartes depuis un seul compte, sur mobile comme sur ordinateur.</p>
</div>
<div className="pricing_highlight-title">Points clés :</div>
<div className="pricing_highlight-wrap">
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
<div className="mobile_img-wrap is-cross-img">
<img width={464} height={447} src="/img/iphone-14-pro-4-.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="mobile_img" />
</div>
</div>
</div>
</section>
<section className="section_security">
<div className="container-large">
<div className="security_title-wrap">
<h2 className="heading-style-display">Sécurité & confidentialité</h2>
<div className="security_content-wrap">
<div className="text-size-regular is-center">Les données de vos clients sont protégées par une sécurité de niveau bancaire. Vous gardez le contrôle de vos informations à tout moment.</div>
</div>
</div>
<div className="security_flex-wrap">
<div className="security_card-flex">
<img src="/img/group-1982249817.svg" loading="lazy" alt="" className="shared_line-img" />
<div className="security_card-wrap">
<div className="social-icon is-security">
<img src="/img/fluent-mdl2_encryption.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-xxmedium">Données chiffrées</div>
<div className="text-size-regular">Les informations de vos clients sont chiffrées de bout en bout et hébergées en France.</div>
</div>
</div>
<div className="security_card-flex">
<img src="/img/group-1982249817.svg" loading="lazy" alt="" className="shared_line-img" />
<div className="security_card-wrap">
<div className="social-icon is-security">
<img src="/img/material-symbols_privacy-tip-outline-rounded.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-xxmedium">Conforme au RGPD</div>
<div className="text-size-regular">Fidly ne collecte que les données utiles à la fidélité, avec le consentement explicite de vos clients.</div>
</div>
</div>
<div className="security_card-flex">
<img src="/img/group-1982249817.svg" loading="lazy" alt="" className="shared_line-img" />
<div className="security_card-wrap">
<div className="social-icon is-security">
<img src="/img/gala_data.svg" loading="lazy" alt="" className="feature_logo-img" />
</div>
<div className="text-size-xxmedium">Vos données vous appartiennent</div>
<div className="text-size-regular">Exportez ou supprimez vos données à tout moment : vous en restez l'unique propriétaire.</div>
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
