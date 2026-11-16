/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CTA_HREF } from '@/content/site'

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
<h1 className="heading-style-h1">Des tarifs simples pour fidéliser sans compter</h1>
<div className="hero_content-wrap is-about is-load">
<p className="text-size-regular is-white">Commencez gratuitement, passez à Pro quand vous êtes prêt. Sans engagement, sans frais d'installation et sans matériel à acheter.</p>
</div>
<div className="button_group">
<div className="primary_btn is-pricing">
<div className="hero_btn-flex is-pricing">
<div className="hero_btn-title">Mensuel</div>
<div className="toggle_track">
<div className="toggle_knob">
</div>
</div>
<div className="hero_btn-title is-muted">Annuel</div>
</div>
<div className="blog_save-btn-wrap">
<div className="text-size-xxxsmall">2 mois offerts</div>
</div>
</div>
</div>
</div>
</div>
<div className="hero_card-flex">
<div className="hero_free-card is-free">
<div className="pricing_free-content-wrap">
<h2 className="heading-style-h6">Découverte</h2>
<div className="pricing_free-content-card">
<div className="text-size-regular">Lancez votre première carte de fidélité gratuitement et découvrez Fidly avec les fonctionnalités essentielles.</div>
<div className="pricing_price-stack">
<h2 className="heading-style-h6">0 €/<span className="pricing_free-span">Mensuel</span>
</h2>
<h2 className="heading-style-h6 is-annual">0 €/<span className="pricing_free-span">Annuel</span>
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
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">1 carte de fidélité</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Jusqu'à 100 clients</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Tampon en un scan</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Statistiques essentielles</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Apple & Google Wallet</div>
</div>
</div>
<a href={CTA_HREF} className="button_get-started w-inline-block">
<div className="text-size-regular is-btn">Commencer</div>
</a>
</div>
<div className="pricing_pro-card-wrap">
<div className="pricing_pro-content-wrap">
<h2 className="heading-style-h6">pRO</h2>
<div className="pricing_free-content-card">
<div className="text-size-regular">Clients illimités, notifications et campagnes : tout Fidly pour faire revenir vos clients plus souvent.</div>
</div>
<div className="pricing_price-stack">
<h2 className="heading-style-h6">19 €/<span className="pricing_free-span">Mensuel</span>
</h2>
<h2 className="heading-style-h6 is-annual">190 €/<span className="pricing_free-span">Annuel</span>
</h2>
</div>
</div>
<div className="pricing_included-line-flex is-pro">
<div className="pricing_pro-line">
</div>
<div className="text-size-regular is-white is-included-pro">Ce qui est inclus</div>
<div className="pricing_pro-line">
</div>
</div>
<div className="pricing_key-points-wrap">
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-2-.svg" loading="lazy" alt="" className="shared_list-item-logo" />
<div className="text-size-regular is-white is-large">Clients illimités</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-2-.svg" loading="lazy" alt="" className="shared_list-item-logo" />
<div className="text-size-regular is-white is-large">Notifications push illimitées</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-2-.svg" loading="lazy" alt="" className="shared_list-item-logo" />
<div className="text-size-regular is-white is-large">Campagnes et relances automatiques</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-2-.svg" loading="lazy" alt="" className="shared_list-item-logo" />
<div className="text-size-regular is-white is-large">Statistiques avancées</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-2-.svg" loading="lazy" alt="" className="shared_list-item-logo" />
<div className="text-size-regular is-white is-large">Synchro multi-boutiques</div>
</div>
</div>
<a href={CTA_HREF} className="button_get-started-white w-inline-block">
<div className="text-size-regular is-white">Passer à Pro</div>
</a>
</div>
<div className="hero_free-card is-business">
<div className="pricing_free-content-wrap">
<h2 className="heading-style-h6">réseau</h2>
<div className="pricing_free-content-card">
<div className="text-size-regular">Pour les réseaux et franchises : toutes les fonctionnalités Pro, plusieurs boutiques, gestion d'équipe et accompagnement dédié.</div>
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
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Tout le plan Pro</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Comptes équipe</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Multi-boutiques</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Statistiques consolidées</div>
</div>
<div className="pricing_key-highlight-flex">
<img src="/img/frame-2147235673-1-.svg" loading="lazy" alt="Icône de validation" className="shared_list-item-logo" />
<div className="text-size-regular text-color-black">Accompagnement dédié</div>
</div>
</div>
<a href={CTA_HREF} className="button_get-started w-inline-block">
<div className="text-size-regular is-btn">Commencer</div>
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
<div className="text-size-regular is-center is-scroll">Comparez les fonctionnalités côte à côte pour trouver l'offre Fidly adaptée à votre commerce.</div>
</div>
<div className="pricing_compare-plan-flex is-heading">
<div>
</div>
<div className="pricing_compare-heading-wrap">
<div className="text-size-medium">Découverte</div>
</div>
<div className="pricing_compare-heading-wrap">
<div className="text-size-medium">Pro</div>
</div>
<div className="pricing_compare-heading-wrap is-margin">
<div className="text-size-medium">Réseau</div>
</div>
</div>
<div className="pricing_compare-plan-flex">
<div className="text-size-regular is-size">Fonctionnalités</div>
<div className="text-size-regular is-size">0 €</div>
<div className="text-size-regular is-size">19 €</div>
<div className="text-size-regular is-size">Sur devis</div>
</div>
<div className="pricing_compare-plan-flex">
<div className="text-size-regular is-size">Clients</div>
<div className="text-size-regular is-size">100 max</div>
<div className="text-size-regular is-size">Illimité</div>
<div className="text-size-regular is-size">Illimité</div>
</div>
<div className="pricing_compare-plan-flex">
<div className="text-size-regular is-size">Statistiques</div>
<div className="text-size-regular is-size">Essentielles</div>
<div className="text-size-regular is-size">Avancées</div>
<div className="text-size-regular is-size">Avancées</div>
</div>
<div className="pricing_compare-plan-flex">
<div className="text-size-regular is-size">Notifications</div>
<div className="text-size-regular is-size">—</div>
<div className="text-size-regular is-size">Illimitées</div>
<div className="text-size-regular is-size">Illimitées</div>
</div>
<div className="pricing_compare-plan-flex is-img">
<div className="pricing_team-access-title">
<div className="text-size-regular is-size">Comptes équipe</div>
</div>
<div className="pricing_correct-logo-wrap">
<img src="/img/vector-46-.svg" loading="lazy" alt="" className="pricing_correct-img" />
</div>
<div className="pricing_correct-logo-wrap">
<img src="/img/vector-46-.svg" loading="lazy" alt="" className="pricing_correct-img" />
</div>
<div className="pricing_correct-logo-wrap">
<img src="/img/icon-park-outline_check-correct.svg" loading="lazy" alt="" className="pricing_correct-img is-width" />
</div>
</div>
<div className="pricing_compare-plan-flex is-img">
<div className="pricing_team-access-title">
<div className="text-size-regular is-size">Support prioritaire</div>
</div>
<div className="pricing_correct-logo-wrap">
<img src="/img/vector-46-.svg" loading="lazy" alt="" className="pricing_correct-img" />
</div>
<div className="pricing_correct-logo-wrap">
<img src="/img/icon-park-outline_check-correct.svg" loading="lazy" alt="" className="pricing_correct-img is-width" />
</div>
<div className="pricing_correct-logo-wrap">
<img src="/img/icon-park-outline_check-correct.svg" loading="lazy" alt="" className="pricing_correct-img is-width" />
</div>
</div>
</div>
</section>
<section className="section_upgrade">
<div className="container-large">
<div className="upgrade_wrap">
<div className="mobile_img-wrap is-upgrade">
<div className="upgrade_mobile-wrap">
<img width={464} height={447} src="/img/iphone-14-pro-6-.webp" loading="lazy" alt="iPhone affichant l'application Fidly" className="mobile_img" />
</div>
</div>
<div className="syntra_wrap">
<h2 className="heading-style-display is-left">Pourquoi passer à Pro ?</h2>
<p className="text-size-regular text-color-black">Débloquez les notifications, les campagnes automatiques et les statistiques avancées pour faire revenir vos clients plus souvent.</p>
<div className="pricing_highlight-title">Points clés :</div>
<div className="pricing_highlight-wrap is-upgrade">
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
