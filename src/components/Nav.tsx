'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CTA_HREF } from '@/content/site'

/** Navbar Webflow (w-nav, collapse « medium ») : menu mobile en overlay, sans webflow.js */
export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])
  const menu = (
<nav role="navigation" className="nav_menu is-menu w-nav-menu" {...(open ? { "data-nav-menu-open": "" } : {})} style={open ? { transform: "translateY(0px)", transition: "transform 400ms ease" } : undefined}>
<a href="#" className="nav_brand is-hide w-nav-brand">
<span className="nav_logo-img wordmark">Loyna</span>
</a>
<div className="shared_line-color hide">
</div>
<Link href="/fonctionnalites" className="nav_link is-spacing w-nav-link">Fonctionnalités</Link>
<Link href="/tarifs" className="nav_link is-spacing w-nav-link">Tarifs</Link>
<Link href="/blog" className="nav_link is-spacing w-nav-link">Blog</Link>
<Link href="/contact" className="nav_link is-spacing w-nav-link">Contact</Link>
<div className={"nav_menu-btn is-absolute w-nav-button" + (open ? " w--open" : "")} onClick={() => setOpen(false)} role="button" aria-label="Fermer le menu">
<img src="/img/close-1-.webp" loading="lazy" alt="" className="image-2" />
</div>
<div className="shared_line-color hide">
</div>
<a href={CTA_HREF} className="button_primary-wrap w-inline-block">
<div className="button_primary-gradient">
<div className="button_primary-title">Essai gratuit</div>
</div>
</a>
</nav>
  )
  return (
<div data-animation="default" className="nav_bar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-duration="400">
<div className="nav_container">
<nav role="navigation" className="nav_menu w-nav-menu">
<Link href="/" className="brand w-nav-brand">
<span className="nav_logo-img wordmark">Loyna</span>
</Link>
<div className="shared_line-color">
</div>
<div className="nav_link-wrap">
<Link href="/fonctionnalites" className="nav_link is-static w-nav-link">Fonctionnalités</Link>
<Link href="/fonctionnalites" className="nav_link is-absolute w-nav-link">Fonctionnalités</Link>
</div>
<div className="nav_link-wrap">
<Link href="/tarifs" className="nav_link is-static w-nav-link">Tarifs</Link>
<Link href="/tarifs" className="nav_link is-absolute w-nav-link">Tarifs</Link>
</div>
<div className="nav_link-wrap">
<Link href="/blog" className="nav_link is-static w-nav-link">Blog</Link>
<Link href="/blog" className="nav_link is-absolute w-nav-link">Blog</Link>
</div>
<div className="nav_link-wrap">
<Link href="/contact" className="nav_link is-static w-nav-link">Contact</Link>
<Link href="/contact" className="nav_link is-absolute w-nav-link">Contact</Link>
</div>
<div className="shared_line-color">
</div>
<a href={CTA_HREF} className="button_primary-wrap is-nav-menu w-inline-block">
<div className="button_primary-gradient">
<div className="button_primary-title">Essai gratuit</div>
</div>
</a>
</nav>
<Link href="/" className="nav_brand w-nav-brand">
<span className="nav_logo-img wordmark">Loyna</span>
</Link>
{!open && menu}
<div className={"nav_menu-button w-nav-button" + (open ? " w--open" : "")} onClick={() => setOpen((o) => !o)} role="button" aria-label="Menu" aria-expanded={open}>
<div className="icon w-icon-nav-menu">
</div>
<div className="nav_burger">
<div className="nav_burger-top">
<div className="nav_burger-bar-1">
</div>
<div className="nav_burger-bar-2">
</div>
<div className="nav_burger-bar-3">
</div>
</div>
</div>
</div>
</div>
{open && <div className="w-nav-overlay" style={{ display: "block", height: "100vh" }}>{menu}</div>}
</div>
  )
}
