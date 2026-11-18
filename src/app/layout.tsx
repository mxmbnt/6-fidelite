import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Interactions } from '@/components/Interactions'
import { RULES } from '@/components/ix-rules'
import { site } from '@/content/site'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description:
    'Créez votre carte de fidélité digitale en 5 minutes : vos clients l’ajoutent à Apple Wallet ou Google Wallet, cumulent leurs tampons en un scan et reviennent plus souvent.',
}

/* Comme Webflow (w-mod-js), les éléments animés sont masqués avant l'exécution du JS
   puis révélés par <Interactions /> une fois leur état initial posé. */
const IX_HIDE = `@keyframes ix-fallback { to { visibility: visible; } }
html.ix-js :is(${RULES.map((r) => r.sel).join(', ')}) { visibility: hidden; animation: ix-fallback 0s 2s forwards; }`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('ix-js')" }} />
        <style dangerouslySetInnerHTML={{ __html: IX_HIDE }} />
      </head>
      <body>
        {children}
        <Interactions />
      </body>
    </html>
  )
}
