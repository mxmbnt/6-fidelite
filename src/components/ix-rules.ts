/** Règles d'apparition reprises des timelines IX3 de Syntra (cf. Interactions.tsx). */
export type From = { o?: number; x?: string; y?: string; s?: number }
export type Rule = { sel: string; on: 'load' | 'scroll'; from: From; d?: number; delay?: number }

const fadeUp = (y = '30%'): From => ({ o: 0, y })
const zoom = (s: number): From => ({ o: 0, s })

export const RULES: Rule[] = [
  // — Accueil / global
  { sel: '.heading-style-h1', on: 'load', from: fadeUp() },
  { sel: '.hero_content-wrap.is-load', on: 'load', from: fadeUp('40%'), delay: 0.15 },
  { sel: '.button_group.is-hero', on: 'load', from: fadeUp('50%'), delay: 0.3 },
  { sel: '.hero_phone-left-img', on: 'load', from: fadeUp('12%'), d: 1, delay: 0.6 },
  { sel: '.hero_phone-right-img', on: 'load', from: fadeUp('12%'), d: 1, delay: 0.95 },
  { sel: '.download_app-wrap', on: 'scroll', from: zoom(0.8) },
  { sel: '.heading-style-h2', on: 'scroll', from: fadeUp() },
  { sel: '.heading-style-display', on: 'scroll', from: fadeUp() },
  { sel: '.text-size-regular.text-color-black', on: 'scroll', from: fadeUp() },
  { sel: '.content-logo-wrap', on: 'scroll', from: fadeUp() },
  { sel: '.mobile_img', on: 'scroll', from: fadeUp('20%') },
  { sel: '.pricing_highlight-title', on: 'scroll', from: fadeUp('40%'), d: 0.7 },
  { sel: '.pricing_key-highlight-flex', on: 'scroll', from: fadeUp('60%'), d: 0.7, delay: 0.15 },
  { sel: '.user_card-wrap', on: 'scroll', from: zoom(0.9) },
  { sel: '.user_img-wrap', on: 'scroll', from: zoom(0.9) },
  { sel: '.user_card-content', on: 'scroll', from: zoom(0.9) },
  { sel: '.faq_content-wrap', on: 'scroll', from: fadeUp() },
  { sel: '.faq_wrapper', on: 'scroll', from: zoom(0.96) },
  { sel: '.syntra_img-wrap', on: 'scroll', from: fadeUp() },
  { sel: '.footer_copyright-flex', on: 'scroll', from: fadeUp() },
  { sel: '.hero_content-wrap.is-boost', on: 'scroll', from: fadeUp() },
  { sel: '.boost_phone-right-img', on: 'scroll', from: zoom(0.7) },
  { sel: '.boost_phone-left-img', on: 'scroll', from: zoom(0.7) },
  { sel: '.button_group.is-scroll', on: 'scroll', from: fadeUp() },
  { sel: '.text-size-regular.is-c', on: 'scroll', from: fadeUp() },
  { sel: '.heading-style-h3.is-feature', on: 'scroll', from: fadeUp() },
  { sel: '.text-size-regular.is-user', on: 'scroll', from: fadeUp() },
  { sel: '.syntra_wrap', on: 'scroll', from: fadeUp() },
  { sel: '.feature_card-wrap:not(.is-standout-card)', on: 'scroll', from: zoom(0.8) },
  { sel: '.shared_image-4', on: 'scroll', from: zoom(0.8) },
  { sel: '.experience_logo-wrap', on: 'scroll', from: zoom(0.96) },
  { sel: '.growth_content-card', on: 'scroll', from: zoom(0.8) },
  { sel: '.growth_card-img', on: 'scroll', from: fadeUp('25%'), d: 0.9 },
  { sel: '.growth_card-content-alt.is-growth', on: 'scroll', from: zoom(0.8) },
  { sel: '.text-size-regular.is-center', on: 'scroll', from: fadeUp('40%') },
  // — Fonctionnalités
  { sel: '.button_group.is-feature.is-app', on: 'load', from: fadeUp() },
  { sel: '.hero_content-wrap.is-feature', on: 'load', from: fadeUp() },
  { sel: '.text-size-regular.is-white.is-large.is-hero', on: 'load', from: fadeUp() },
  { sel: '.hero_img', on: 'load', from: fadeUp('28%'), d: 1.1, delay: 0.4 },
  { sel: '.hero_float-card.is-left', on: 'load', from: { o: 0, x: '-14%' }, d: 0.9, delay: 1 },
  { sel: '.hero_float-card.is-right', on: 'load', from: { o: 0, x: '14%' }, d: 0.9, delay: 1.2 },
  { sel: '.feature_conversation-img.is-width', on: 'scroll', from: fadeUp() },
  { sel: '.text-size-regular.is-scroll', on: 'scroll', from: fadeUp() },
  { sel: '.security_card-flex', on: 'scroll', from: zoom(0.96) },
  // — Tarifs
  { sel: '.primary_btn.is-pricing', on: 'load', from: fadeUp('50%') },
  { sel: '.hero_free-card.is-free', on: 'scroll', from: zoom(0.96) },
  { sel: '.hero_free-card.is-business', on: 'scroll', from: zoom(0.96) },
  { sel: '.pricing_compare-plan-flex', on: 'scroll', from: fadeUp() },
  // — À propos
  { sel: '.hero_img-wrap', on: 'load', from: fadeUp(), d: 1 },
  { sel: '.hero_content-wrap.is-about.is-left', on: 'load', from: fadeUp() },
  { sel: '.button_group.is-feature.is-left', on: 'load', from: fadeUp() },
  { sel: '.feature_conversation-wrap.is-story', on: 'scroll', from: zoom(0.96) },
  { sel: '.story_card', on: 'scroll', from: zoom(0.96) },
  { sel: '.feature_card-wrap.is-standout-card', on: 'scroll', from: zoom(0.96) },
  { sel: '.value_card-wrap', on: 'scroll', from: zoom(0.96) },
  // — Contact
  { sel: '.form_block', on: 'scroll', from: { o: 0, x: '20%' } },
  { sel: '.contact_get-in-touch', on: 'scroll', from: { o: 0, x: '-20%' } },
  // — Blog
  { sel: '.hero_content-wrap.is-blog', on: 'load', from: fadeUp('60%') },
  { sel: '.primary_btn.is-blog', on: 'load', from: fadeUp('60%') },
  { sel: '.blog_card', on: 'scroll', from: zoom(0.9) },
  { sel: '.olivia_flex-wrap', on: 'load', from: fadeUp() },
  { sel: '.blog_date-wrap.is-blog', on: 'load', from: fadeUp('60%') },
  { sel: '.blog_template-img .blog_img-cms', on: 'load', from: zoom(0.9) },
  { sel: '.blog_rich-wrap', on: 'scroll', from: fadeUp('40%') },
  // — Pages légales / merci
  { sel: '.hero_content-wrap.is-privacy', on: 'load', from: fadeUp('60%') },
  { sel: '.error_img.is-width', on: 'load', from: fadeUp() },
  { sel: '.text-size-regular.is-center.is-white', on: 'load', from: fadeUp() },
  { sel: '.error_btn-wrap', on: 'load', from: fadeUp('40%') },
]

