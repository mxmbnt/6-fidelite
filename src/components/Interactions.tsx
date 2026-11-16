'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Équivalent sans dépendance des interactions Webflow IX3 (GSAP) du template Syntra.
 * Les règles ci-dessous reprennent, sélecteur par sélecteur, les timelines d'origine
 * (durée, décalage, opacité / translation / échelle). Déclenchement :
 *  - « load »   : au chargement de la page
 *  - « scroll » : quand le haut de l'élément atteint 85 % de la hauteur de l'écran (start: top 85%)
 * Plus les widgets Webflow : FAQ, onglets (w-tabs), interrupteur de tarifs, formulaires.
 */
import { RULES, type From, type Rule } from './ix-rules'

const EASE = 'cubic-bezier(.215,.61,.355,1)' // power2.out (ease 8 de Webflow)

function transformOf(f: From) {
  const t: string[] = []
  if (f.x || f.y) t.push(`translate(${f.x ?? '0'}, ${f.y ?? '0'})`)
  if (f.s !== undefined) t.push(`scale(${f.s})`)
  return t.join(' ')
}

function setupReveals() {
  const seen = new Set<Element>()
  const toPlay: { el: HTMLElement; rule: Rule; stagger: number }[] = []
  for (const rule of RULES) {
    const els = Array.from(document.querySelectorAll<HTMLElement>(rule.sel))
    els.forEach((el, i) => {
      if (seen.has(el)) return
      seen.add(el)
      el.dataset.ix = rule.on
      el.style.visibility = 'visible'
      el.style.opacity = String(rule.from.o ?? 1)
      el.style.transform = transformOf(rule.from)
      // décalage « position » des timelines multi-éléments (points clés)
      const stagger = rule.sel === '.pricing_key-highlight-flex' ? i * 0.15 : 0
      toPlay.push({ el, rule, stagger })
    })
  }
  const play = (el: HTMLElement, rule: Rule, stagger: number) => {
    el.style.transition = `opacity ${rule.d ?? 0.8}s ${EASE} ${(rule.delay ?? 0) + stagger}s, transform ${rule.d ?? 0.8}s ${EASE} ${(rule.delay ?? 0) + stagger}s`
    el.style.opacity = '1'
    el.style.transform = 'none'
  }
  const byEl = new Map(toPlay.map((p) => [p.el, p]))
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const p = byEl.get(e.target as HTMLElement)
        if (p) play(p.el, p.rule, p.stagger)
        io.unobserve(e.target)
      }
    },
    { rootMargin: '0px 0px -15% 0px' },
  )
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      for (const p of toPlay) p.rule.on === 'load' ? play(p.el, p.rule, p.stagger) : io.observe(p.el)
    }),
  )
  return () => io.disconnect()
}

function setupWidgets() {
  const off: (() => void)[] = []
  const on = (el: Element, type: string, fn: EventListener) => {
    el.addEventListener(type, fn)
    off.push(() => el.removeEventListener(type, fn))
  }

  // FAQ : hauteur 0 -> auto + rotation de l'icône
  document.querySelectorAll<HTMLElement>('.faq_question').forEach((q) => {
    const answer = q.nextElementSibling as HTMLElement | null
    if (!answer) return
    answer.style.height = '0px'
    const toggle = (ev: Event) => {
      ev.preventDefault() // le lien du template (href="#") ne doit pas renvoyer en haut de page
      const open = q.classList.toggle('is-open')
      q.setAttribute('aria-expanded', String(open))
      answer.style.height = open ? answer.scrollHeight + 'px' : '0px'
    }
    q.setAttribute('aria-expanded', 'false')
    on(q, 'click', toggle)
    on(q, 'keydown', (ev) => {
      const k = (ev as KeyboardEvent).key
      if (k === 'Enter' || k === ' ') toggle(ev)
    })
  })

  // Onglets Webflow (w-tabs) : blog, histoire (à propos)
  document.querySelectorAll<HTMLElement>('.w-tabs').forEach((tabs) => {
    const links = Array.from(tabs.querySelectorAll<HTMLElement>(':scope > .w-tab-menu .w-tab-link, :scope > * > .w-tab-menu .w-tab-link'))
    const panes = Array.from(tabs.querySelectorAll<HTMLElement>('.w-tab-pane'))
    links.forEach((link) =>
      on(link, 'click', (ev) => {
        ev.preventDefault()
        const name = link.dataset.wTab
        links.forEach((l) => l.classList.toggle('w--current', l === link))
        panes.forEach((p) => {
          const active = p.dataset.wTab === name
          p.classList.toggle('w--tab-active', active)
          if (active) {
            p.style.opacity = '0'
            requestAnimationFrame(() => {
              p.style.transition = 'opacity .3s ease'
              p.style.opacity = '1'
            })
          }
        })
        // À propos : l'image de gauche suit l'onglet
        const imgs = Array.from(document.querySelectorAll<HTMLElement>('.story_left-img'))
        const idx = links.indexOf(link)
        imgs.forEach((img, i) => {
          img.style.transition = 'opacity .5s ease'
          img.style.opacity = i === idx ? '1' : '0'
        })
      }),
    )
  })

  // Tarifs : interrupteur Mensuel / Annuel
  document.querySelectorAll<HTMLElement>('.primary_btn.is-pricing').forEach((btn) => {
    on(btn, 'click', (ev) => {
      ev.preventDefault()
      const annual = btn.classList.toggle('is-annual-on')
      const knob = btn.querySelector<HTMLElement>('.toggle_knob')
      if (knob) knob.style.transform = annual ? 'translateX(24px)' : ''
      document.querySelectorAll<HTMLElement>('.heading-style-h6:has(.pricing_free-span):not(.is-annual)').forEach((h) => (h.style.opacity = annual ? '0' : ''))
      document.querySelectorAll<HTMLElement>('.heading-style-h6.is-annual:has(.pricing_free-span)').forEach((h) => (h.style.opacity = annual ? '1' : ''))
      btn.querySelectorAll<HTMLElement>('.hero_btn-title').forEach((t, i) => (t.style.color = annual && i === 0 ? '#8a8f98' : ''))
    })
  })

  // Compteurs (attributs fb-count du template) : 0 -> cible en fb-count-time ms à l'apparition
  const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-fb-count]'))
  const cio = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      const el = e.target as HTMLElement
      cio.unobserve(el)
      const target = Number(el.dataset.fbCountTarget || el.textContent || 0)
      const time = Number(el.dataset.fbCountTime || 2000)
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / time)
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  })
  counters.forEach((c) => cio.observe(c))
  off.push(() => cio.disconnect())

  // Formulaires : message de succès Webflow (// TEMPLATE: brancher un endpoint)
  document.querySelectorAll<HTMLFormElement>('.w-form form').forEach((form) => {
    on(form, 'submit', (ev) => {
      ev.preventDefault()
      const wrap = form.closest('.w-form')
      const submit = form.querySelector<HTMLInputElement>('[type="submit"]')
      if (submit?.dataset.wait) submit.value = submit.dataset.wait
      setTimeout(() => {
        form.style.display = 'none'
        wrap?.querySelector('.w-form-done')?.classList.add('is-visible')
      }, 500)
    })
  })

  return () => off.forEach((f) => f())
}

export function Interactions() {
  const pathname = usePathname()
  useEffect(() => {
    const a = setupReveals()
    const b = setupWidgets()
    return () => {
      a()
      b()
    }
  }, [pathname])
  return null
}
