"""Assemble les pages Next.js de 6-fidelite à partir du JSX traduit (_fr/).
- extrait la nav (div.nav_bar) et le footer (section.section_footer) en composants partagés
- réécrit les liens vers les routes françaises, branche les CTA sur CTA_HREF
"""
import os, re

SRC, APP, COMP = '_fr', 'src/app', 'src/components'

ROUTES = {
    'home': '', 'features': 'fonctionnalites', 'pricing': 'tarifs', 'about-us': 'a-propos',
    'contact': 'contact', 'blog': 'blog', 'privacy-policy': 'confidentialite',
    'terms-and-conditions': 'cgu', 'thanks': 'merci',
}
BLOG = {
    'future-of-cms': 'faire-revenir-ses-clients-en-hiver',
    'cms-user-experience': 'carte-papier-ou-digitale',
    'cms-trends-2023': 'reussir-ses-notifications-push',
    'cms-for-ecommerce': 'lire-ses-statistiques-de-fidelite',
    'cms-customization': 'rgpd-commercants',
    'optimizing-cms-content': 'idees-de-recompenses',
}
LINKS = {
    '/features': '/fonctionnalites', '/pricing': '/tarifs', '/about-us': '/a-propos',
    '/privacy-policy': '/confidentialite', '/terms-and-conditions': '/cgu', '/thanks': '/merci',
    '/changelog': '/blog', 'mailto:hello@company.com': 'mailto:bonjour@fidly.fr', 'tel:+1123987654321': 'tel:+33472000000',
}


def block(src, start_pat):
    """Renvoie (début, fin) du bloc d'élément balancé qui commence à start_pat."""
    i = src.index(start_pat)
    tag = re.match(r'<([a-z0-9]+)', src[i:]).group(1)
    depth, j = 0, i
    for m in re.finditer(r'<(/?)' + tag + r'\b[^>]*?(/?)>', src[i:]):
        if m.group(2):
            continue
        depth += -1 if m.group(1) else 1
        if depth == 0:
            j = i + m.end()
            break
    return i, j


def fix_links(s):
    for a, b in LINKS.items():
        s = s.replace(f'href="{a}"', f'href="{b}"')
    for a, b in BLOG.items():
        s = s.replace(f'href="/blog-template/{a}"', f'href="/blog/{b}"')
    # CTA « Essai gratuit » / « Commencer » … : une seule constante
    def cta(m):
        tag = m.group(0)
        if re.search(r'className="[^"]*(btn|button)[^"]*"', tag) and 'href="/contact"' in tag:
            return tag.replace('href="/contact"', 'href={CTA_HREF}')
        return tag
    s = re.sub(r'<a [^>]*>', cta, s)
    s = s.replace('<a href="/', '<Link href="/').replace('<a href={CTA', '<a href={CTA')
    # referme les <Link> ouverts (on ne remplace que les liens internes)
    out, stack = [], []
    for m in re.finditer(r'(<Link href="[^"]*"[^>]*>|<a\b[^>]*>|</a>)', s):
        pass
    return s


def links_to_next(s):
    """<a href="/..."> internes -> <Link>, en gérant les fermetures correspondantes."""
    res, pos, stack = [], 0, []
    for m in re.finditer(r'<a\b([^>]*)>|</a>', s):
        res.append(s[pos:m.start()])
        if m.group(0) == '</a>':
            res.append('</Link>' if stack and stack.pop() else '</a>')
        else:
            attrs = m.group(1)
            internal = re.search(r'href="/[^"]*"', attrs) is not None
            stack.append(internal)
            res.append(('<Link' if internal else '<a') + attrs + '>')
        pos = m.end()
    res.append(s[pos:])
    return ''.join(res)


def prep(s):
    for a, b in LINKS.items():
        s = s.replace(f'href="{a}"', f'href="{b}"')
    for a, b in BLOG.items():
        s = s.replace(f'href="/blog-template/{a}"', f'href="/blog/{b}"')

    def cta(m):
        tag = m.group(0)
        if re.search(r'className="[^"]*(btn|button)[^"]*"', tag) and 'href="/contact"' in tag:
            return tag.replace('href="/contact"', 'href={CTA_HREF}')
        return tag
    s = re.sub(r'<a\b[^>]*>', cta, s)
    s = s.replace(' aria-current="page"', '').replace(' w--current"', '"')
    return links_to_next(s)


def body_of(name):
    src = open(os.path.join(SRC, name + '.tsx'), encoding='utf8').read()
    src = src[src.index('<>') + 2: src.rindex('</>')]
    return src


os.makedirs(COMP, exist_ok=True)
home = body_of('home')
a, b = block(home, '<div data-animation="default" className="nav_bar w-nav"')
nav = prep(home[a:b])
a2, b2 = block(home, '<section className="section_footer">')
footer = prep(home[a2:b2])

open(os.path.join(COMP, 'NavRaw.tsx'), 'w', encoding='utf8').write(
    "import Link from 'next/link'\nimport { CTA_HREF } from '@/content/site'\n\n"
    "/* Barre de navigation d'origine (desktop). Le menu mobile est géré par <Nav>. */\n"
    "export function NavRaw() {\n  return (\n" + nav + "\n  )\n}\n")
open(os.path.join(COMP, 'Footer.tsx'), 'w', encoding='utf8').write(
    "import Link from 'next/link'\nimport { CTA_HREF } from '@/content/site'\n\n"
    "export function Footer() {\n  return (\n" + footer + "\n  )\n}\n")

for name, route in ROUTES.items():
    s = body_of(name)
    a, b = block(s, '<div data-animation="default" className="nav_bar w-nav"')
    s = s[:a] + '<Nav />' + s[b:]
    a, b = block(s, '<section className="section_footer">')
    s = s[:a] + '<Footer />' + s[b:]
    s = prep(s)
    d = os.path.join(APP, route) if route else APP
    os.makedirs(d, exist_ok=True)
    imports = "import Link from 'next/link'\nimport { Nav } from '@/components/Nav'\nimport { Footer } from '@/components/Footer'\nimport { CTA_HREF } from '@/content/site'\n"
    fn = ''.join(w.capitalize() for w in re.split(r'[-_]', name)) + 'Page'
    open(os.path.join(d, 'page.tsx'), 'w', encoding='utf8').write(
        "/* eslint-disable @next/next/no-img-element */\n" + imports +
        f"\nexport default function {fn}() {{\n  return (\n<>\n{s}\n</>\n  )\n}}\n")

# Modèle d'article
s = body_of('blog-template__future-of-cms')
a, b = block(s, '<div data-animation="default" className="nav_bar w-nav"')
s = s[:a] + '<Nav />' + s[b:]
a, b = block(s, '<section className="section_footer">')
s = s[:a] + '<Footer />' + s[b:]
os.makedirs(os.path.join(APP, 'blog', '[slug]'), exist_ok=True)
open(os.path.join('_article-raw.tsx'), 'w', encoding='utf8').write(prep(s))
print('ok')
