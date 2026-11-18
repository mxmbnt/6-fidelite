/** Loyna — carte de fidélité digitale (Apple Wallet / Google Wallet) pour les commerces indépendants. */

/** Lien unique de tous les boutons « Essayer 1 mois gratuitement » */
export const CTA_HREF = 'https://loyna.fr/essai/'
export const CTA_LABEL = 'Essayer gratuitement'

export const site = {
  name: 'Loyna',
  tagline: 'La carte de fidélité digitale des commerces indépendants',
  email: 'contact@loyna.fr',
  phone: '04 72 00 00 00',
  city: 'Montpellier',
}

/** Trois garanties répétées sous les CTA */
export const REASSURANCE = ['1 mois offert', 'Sans carte bancaire', 'Sans engagement']

/** Métiers affichés dans le bandeau défilant */
export const METIERS = [
  'Boulangeries', 'Cafés', 'Salons de coiffure', 'Barbiers', 'Restaurants', 'Pizzerias',
  'Instituts de beauté', 'Ongleries', 'Fleuristes', 'Boucheries', 'Traiteurs', 'Snacks',
  'Pressings', 'Épiceries fines', 'Cavistes',
]

/** Offres (prix HT par mois). « engagé » = avec engagement 12 mois (-15 %). */
export const OFFRES = {
  starter: { nom: 'Starter', accroche: 'La carte complète', prix: '29 €', engage: '24,65 €' },
  pro: { nom: 'Pro', accroche: 'On s’occupe de tout', prix: '49 €', engage: '41,65 €' },
  miseEnService: '49 €',
}

export type QR = { q: string; r: string }

export const FAQ_GENERALE: QR[] = [
  {
    q: 'Mes clients doivent-ils télécharger une application ?',
    r: 'Non. Ils scannent votre QR code, remplissent un formulaire de quelques secondes et la carte s’ajoute à Apple Wallet (iPhone) ou Google Wallet (Android), des applications déjà installées sur leur téléphone. Aucun compte à créer, aucun mot de passe.',
  },
  {
    q: 'Faut-il acheter un lecteur ou une tablette ?',
    r: 'Non. Votre smartphone suffit : l’application Loyna Business scanne la carte de vos clients en deux secondes. Vous pouvez ajouter autant de téléphones et de membres d’équipe que vous voulez.',
  },
  {
    q: 'Comment fonctionne l’essai gratuit ?',
    r: 'Vous profitez d’un mois complet, sans donner de carte bancaire. À la fin de l’essai, rien n’est prélevé : votre carte est simplement mise en pause jusqu’à ce que vous choisissiez une offre.',
  },
  {
    q: 'Combien ça coûte ensuite ?',
    r: 'Starter coûte 29 € HT par mois et Pro 49 € HT par mois, sans engagement. Avec un engagement de 12 mois, vous économisez 15 %. Clients et cartes sont illimités dans les deux offres.',
  },
  {
    q: 'Puis-je envoyer des messages à mes clients ?',
    r: 'Oui. Vos messages s’affichent directement sur leur écran de verrouillage, sans SMS ni e-mail à payer. Les messages automatiques (anniversaire, relance, récompense proche, avis Google) partent tout seuls.',
  },
  {
    q: 'Que deviennent les données de mes clients ?',
    r: 'Elles sont hébergées en France, chiffrées et vous appartiennent. Vos clients donnent des consentements séparés, jamais pré-cochés, et vous pouvez exporter vos données en CSV à tout moment.',
  },
]

export const FAQ_TARIFS: QR[] = [
  {
    q: 'Y a-t-il des frais de mise en service ?',
    r: 'La mise en service coûte 49 € HT une seule fois. Elle est offerte si vous vous engagez 12 mois, et elle n’est jamais refacturée si vous reprenez votre abonnement plus tard.',
  },
  {
    q: 'Puis-je changer d’offre ou arrêter quand je veux ?',
    r: 'Oui. Sans engagement, vous arrêtez à la fin de n’importe quel mois. Vous passez de Starter à Pro (ou l’inverse) depuis votre espace client, au prorata.',
  },
  {
    q: 'Comment sont comptées les campagnes ?',
    r: 'Une campagne compte pour une, quel que soit le nombre de clients qui la reçoivent. Le compteur repart à zéro chaque lundi. Les messages automatiques et la notification de proximité ne sont jamais décomptés.',
  },
  {
    q: 'Que se passe-t-il à la fin de l’essai ?',
    r: 'Rien n’est prélevé. Votre carte est mise en pause : vos clients la gardent dans leur téléphone et tout reprend dès que vous choisissez une offre.',
  },
  {
    q: 'Comment se passe le paiement ?',
    r: 'Par carte bancaire, chaque mois ou chaque année selon votre choix. Vos factures sont disponibles à tout moment dans votre espace client.',
  },
]
