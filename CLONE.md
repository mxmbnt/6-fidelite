# 6-fidelite — « Loyna », SaaS fictif de carte de fidélité mobile (template Webflow « Syntra », licence achetée)

## Démarrer
```bash
npm install && npm run dev
```

## Où modifier
- **Contenus partagés** (lien et libellé du CTA, offres et prix, FAQ, métiers, réassurance) : `src/content/site.ts`
- **Blocs communs** (FAQ, bandeau final, bandeau métiers, boutons) : `src/components/Blocks.tsx`
- **Pages** : `src/app/*/page.tsx` (JSX d'origine, textes FR) ; nav `src/components/Nav.tsx`, pied de page `src/components/Footer.tsx`
- **Articles** : `src/content/blog.ts` (`/blog/[slug]`)
- **Design** : `src/app/globals.css` (tokens en tête, CSS Webflow, remappage, interactions)

## Animations d'origine recréées sans GSAP
`src/components/Interactions.tsx` + `ix-rules.ts` reprennent les ~70 timelines IX3 du template
(apparitions au chargement/défilement avec mêmes durées et décalages), compteurs 20/98/120K,
bandeau défilant, survols (textes qui glissent, cartes), FAQ, onglets, interrupteur de tarifs, menu mobile.

## À savoir
- Palette inspirée de loyna.fr : violet `#7d1bf1` / `#6512cf`, encre `#111316`, police Plus Jakarta Sans. Images du template recolorées du bleu au violet.
- Les écrans de téléphone sont des **maquettes générées** (carte Wallet, notifications, scan, tableau de bord, campagne, éditeur, clients) : à remplacer par de vraies captures de l'app.
- Le logo « Syntra » (SVG vectorisé) est remplacé par un logo texte « Loyna ».
- `_source/`, `_jsx/`, `_fr/`, `_raw/` : matière première de la conversion (non utilisée au build).
