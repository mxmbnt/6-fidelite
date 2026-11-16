/** Articles du blog Fidly (fictifs). Corps en Markdown simple : ## titres, ### sous-titres, - listes, paragraphes. */
export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: 'Conseils' | 'Nouveau' | 'Pratique'
  cover: string
  author: { name: string; bio: string }
  body: string
}

const author = { name: 'Léa Martin', bio: 'Des idées concrètes, testées par des commerçants.' }

export const articles: Article[] = [
  {
    slug: 'faire-revenir-ses-clients-en-hiver',
    title: '5 idées pour faire revenir vos clients cet hiver',
    excerpt: "Récompenses de saison, relances, notifications : nos idées pour l'hiver.",
    date: '4 nov. 2026',
    readTime: '5 min de lecture',
    category: 'Conseils',
    cover: '/img/frame-2147237247.webp',
    author,
    body: `# Introduction

L'hiver est une saison clé pour les commerces de proximité : les clients sortent moins, mais restent fidèles aux adresses qui savent les surprendre. Une carte de fidélité digitale vous donne les moyens de garder le lien, même quand ils ne passent pas devant votre vitrine.

Avec Fidly, tout est centralisé : vos cartes, vos clients, vos statistiques et vos campagnes. Vous voyez en un coup d'œil qui revient, qui s'éloigne et quelle offre fonctionne le mieux.

## Créez une récompense de saison

Une boisson chaude offerte au 8e tampon, une galette à partager en janvier : une récompense limitée dans le temps donne une bonne raison de revenir.

## Relancez les clients inactifs

Fidly repère automatiquement les clients qui ne sont pas venus depuis 30 jours. Un message personnalisé suffit souvent à les faire revenir.

## Les bénéfices

- Plus de visites : vos clients ont une raison concrète de revenir chez vous plutôt qu'ailleurs.
- Moins de friction : plus de carton oublié, la carte est toujours dans le téléphone.
- Des décisions éclairées : vous mesurez l'effet de chaque offre en temps réel.

Programmez vos notifications à l'avance : elles s'affichent directement sur l'écran de verrouillage de vos clients, au moment le plus pertinent.

Grâce au tableau de bord, suivez la progression de chaque campagne et ajustez vos offres sans attendre la fin du mois.

## Conclusion

L'hiver n'est pas une fatalité. Avec une récompense bien choisie, des relances ciblées et une carte toujours à portée de main, vos clients ont toutes les raisons de pousser votre porte. Fidly vous aide à le faire en quelques minutes par semaine.`,
  },
  {
    slug: 'carte-papier-ou-digitale',
    title: 'Carte papier ou digitale : le vrai comparatif',
    excerpt: 'Coût, taux d’utilisation, données : pourquoi les commerçants passent au digital.',
    date: '21 oct. 2026',
    readTime: '6 min de lecture',
    category: 'Conseils',
    cover: '/img/frame-2147237234-1--3c043.webp',
    author,
    body: `# Introduction

La carte en carton a fait ses preuves, mais elle a ses limites : oubliée, perdue, jamais complétée. Et surtout, elle ne vous apprend rien sur vos clients.

## Le coût réel

Impression, tampons, cartes jamais rendues : la carte papier coûte plus cher qu'il n'y paraît. La carte digitale, elle, ne s'imprime pas et ne se perd pas.

## Ce que le digital change

- Une carte toujours dans le téléphone
- Des statistiques sur chaque visite
- La possibilité de relancer vos clients

## Conclusion

Passer au digital ne signifie pas perdre le contact humain : c'est au contraire un moyen de le prolonger entre deux visites.`,
  },
  {
    slug: 'reussir-ses-notifications-push',
    title: 'Réussir ses notifications push sans lasser ses clients',
    excerpt: 'Fréquence, ton, horaires : les bonnes pratiques pour des messages qui font revenir.',
    date: '7 oct. 2026',
    readTime: '4 min de lecture',
    category: 'Pratique',
    cover: '/img/6a7c084b06d902f3cebbc741_frame-202147237234.webp',
    author,
    body: `# Introduction

Une notification bien pensée fait revenir un client ; une notification de trop le fait désinstaller votre carte.

## Les bonnes pratiques

- Une à deux notifications par mois maximum
- Un message court, avec une offre claire
- Le bon moment : la veille d'un week-end, avant le déjeuner

## Conclusion

Testez, mesurez dans votre tableau de bord, et gardez ce qui fonctionne.`,
  },
  {
    slug: 'lire-ses-statistiques-de-fidelite',
    title: 'Lire ses statistiques de fidélité en 5 minutes',
    excerpt: 'Visites, récompenses, clients inactifs : les 3 chiffres à suivre chaque semaine.',
    date: '23 sept. 2026',
    readTime: '5 min de lecture',
    category: 'Pratique',
    cover: '/img/6a7c085ed49da6e0d238634e_frame-202147237234-20-1-.webp',
    author,
    body: `# Introduction

Pas besoin d'être expert en données : trois chiffres suffisent pour piloter votre fidélité.

## Les 3 chiffres clés

- Le nombre de visites fidélisées par semaine
- Le taux de récompenses utilisées
- Le nombre de clients inactifs depuis 30 jours

## Conclusion

Cinq minutes par semaine suffisent pour repérer ce qui marche et ajuster vos offres.`,
  },
  {
    slug: 'rgpd-commercants',
    title: 'RGPD : ce que tout commerçant doit savoir',
    excerpt: 'Collecter des données clients en toute sérénité, avec les bons réflexes.',
    date: '9 sept. 2026',
    readTime: '7 min de lecture',
    category: 'Nouveau',
    cover: '/img/frame-2147237234-2--805f7.webp',
    author,
    body: `# Introduction

Collecter les coordonnées de vos clients implique quelques obligations simples.

## Les bons réflexes

- Ne collecter que les données utiles
- Recueillir un consentement clair pour les communications
- Permettre à chacun d'accéder à ses données ou de les supprimer

## Conclusion

Fidly est conçu pour vous aider à respecter ces règles sans y penser au quotidien.`,
  },
  {
    slug: 'idees-de-recompenses',
    title: '10 idées de récompenses qui marchent vraiment',
    excerpt: 'Café offert, réduction, cadeau surprise : nos meilleurs exemples par métier.',
    date: '26 août 2026',
    readTime: '5 min de lecture',
    category: 'Nouveau',
    cover: '/img/image10.webp',
    author,
    body: `# Introduction

La récompense est le cœur de votre carte : elle doit être désirable et atteignable.

## Nos idées par métier

- Boulangerie : la 10e baguette offerte
- Café : une boisson offerte au 8e passage
- Coiffeur : un soin offert à la 5e visite
- Fleuriste : un bouquet de saison au 10e achat

## Conclusion

Testez une récompense pendant un mois, mesurez, puis ajustez.`,
  },
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
