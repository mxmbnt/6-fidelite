/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { FinalCta } from '@/components/Blocks'
import { CTA_HREF } from '@/content/site'

export default function ContactPage() {
  return (
<>

<div className="page-wrapper">
<div className="background-color-primary is-contact">
<Nav />
<section className="section_hero">
<div className="container-large">
<div className="hero_wrap is-about">
<div className="hero_title-wrap is-pricing">
<h1 className="heading-style-h1">Contact</h1>
<div className="hero_content-wrap is-about is-load">
<p className="text-size-regular is-white">Une vraie personne vous répond, depuis Montpellier, du lundi au vendredi. On peut même créer votre carte avec vous au téléphone.</p>
</div>
</div>
</div>
</div>
</section>
</div>
<section className="section_contact">
<div className="container-large">
<div className="contact_wrap">
<div className="contact_get-in-touch">
<div className="contact_touch-title-wrap">
<h2 className="heading-style-h4">Contactez-nous</h2>
<div className="text-size-regular">Une question avant de vous lancer, un coup de main pour créer votre carte ? Écrivez-nous ou demandez à être rappelé.</div>
</div>
<div className="contact_detail-flex">
<div className="live-chat_wrap">
<div className="contact_logo-wrap">
<img src="/img/token_chat.svg" loading="lazy" alt="" className="live-chat_logo" />
</div>
<div className="shared_div-block">
<div className="text-size-xmedium is-black">Être rappelé</div>
<div className="text-size-small is-contact">Laissez votre numéro dans le formulaire, on vous rappelle sans engagement.</div>
</div>
<a href="#email-form" className="text-size-small is-blue">Remplir le formulaire</a>
</div>
<div className="live-chat_wrap">
<div className="contact_logo-wrap">
<img src="/img/material-symbols_mail-outline.svg" loading="lazy" alt="" className="live-chat_logo" />
</div>
<div className="shared_div-block">
<div className="text-size-xmedium is-black">Par e-mail</div>
<div className="text-size-small is-contact">Nous vous répondons par email sous 24 h.</div>
</div>
<a href="mailto:contact@loyna.fr" className="text-size-small is-blue">contact@loyna.fr</a>
</div>
</div>
<div className="contact_detail-flex is-detail">
<div className="live-chat_wrap">
<div className="contact_logo-wrap">
<img src="/img/solar_phone-linear.svg" loading="lazy" alt="" className="live-chat_logo" />
</div>
<div className="shared_div-block">
<div className="text-size-xmedium is-black">Téléphone</div>
<div className="text-size-small is-contact">Appelez-nous du lundi au vendredi, 9 h–18 h.</div>
</div>
<a href="tel:+33472000000" className="text-size-small is-blue">04 72 00 00 00</a>
</div>
<div className="live-chat_wrap">
<div className="contact_logo-wrap">
<img src="/img/mingcute_location-line.svg" loading="lazy" alt="" className="live-chat_logo" />
</div>
<div className="shared_div-block">
<div className="text-size-xmedium is-black">Adresse</div>
<div className="text-size-small is-contact">Conçue à Montpellier.</div>
</div>
<div className="text-size-small is-blue">Loyna, Fabrègues (34690), près de Montpellier</div>
</div>
</div>
</div>
<div className="form_block w-form">
<form id="email-form" name="email-form" data-name="Email Form" method="get" className="form_wrapper" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
<label htmlFor="First-Name" className="text-size-small is-form">Prénom</label>
<input className="form_text-field w-input" maxLength={256} name="First-Name" data-name="First Name" placeholder="Prénom" type="text" id="First-Name" required />
<label htmlFor="Last-Name" className="text-size-small is-form">Commerce</label>
<input className="form_text-field w-input" maxLength={256} name="Last-Name" data-name="Last Name" placeholder="Nom de votre commerce" type="text" id="Last-Name" />
<label htmlFor="Email-Address" className="text-size-small is-form">Adresse email</label>
<input className="form_text-field is-email w-input" maxLength={256} name="Email-Address" data-name="Email Address" placeholder="Adresse email" type="text" id="Email-Address" required />
<label htmlFor="Phone-Number" className="text-size-small is-form">Téléphone</label>
<input className="form_text-field is-phone w-input" maxLength={256} name="Phone-Number" data-name="Phone Number" placeholder="Téléphone" type="text" id="Phone-Number" required />
<label htmlFor="Msg" className="text-size-small is-form">Message</label>
<input className="form_text-field is-message w-input" maxLength={256} name="Msg" data-name="Msg" placeholder="Écrivez votre message ici…" type="text" id="Msg" required />
<input type="submit" data-wait="Envoi en cours…" className="form_submit-button w-button" value="Envoyer" />
</form>
<div className="form_success-message w-form-done">
<div>Merci ! Votre message a bien été envoyé.</div>
</div>
<div className="w-form-fail">
<div>Oups ! Une erreur est survenue lors de l'envoi du formulaire.</div>
</div>
</div>
</div>
</div>
</section>
<FinalCta />
<Footer />
</div>

</>
  )
}
