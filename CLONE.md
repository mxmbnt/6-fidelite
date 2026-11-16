# 6-fidelite — « Fidly », SaaS fictif de carte de fidélité mobile (template Webflow « Syntra », licence achetée)

## Démarrer
```bash
npm install && npm run dev
```

## Où modifier
- **CTA « Essai gratuit / Commencer / Passer à Pro »** : `CTA_HREF` dans `src/content/site.ts`
- **Pages** : `src/app/*/page.tsx` (JSX d'origine, textes FR) ; nav `src/components/Nav.tsx`, pied de page `src/components/Footer.tsx`
- **Articles** : `src/content/blog.ts` (`/blog/[slug]`)
- **Design** : `src/app/globals.css` (tokens en tête, CSS Webflow, remappage, interactions)

## Animations d'origine recréées sans GSAP
`src/components/Interactions.tsx` + `ix-rules.ts` reprennent les ~70 timelines IX3 du template
(apparitions au chargement/défilement avec mêmes durées et décalages), compteurs 20/98/120K,
bandeau défilant, survols (textes qui glissent, cartes), FAQ, onglets, interrupteur de tarifs, menu mobile.

## À savoir
- Les écrans de téléphone sont des **images** du template (interface « Chatbot AI ») : à remplacer par des captures de l'app.
- Le logo « Syntra » (SVG vectorisé) est remplacé par un logo texte « Fidly ».
- `_source/`, `_jsx/`, `_fr/`, `_raw/` : matière première de la conversion (non utilisée au build).
