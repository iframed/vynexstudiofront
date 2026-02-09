// service-creation-site-web.component.ts
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type PriceHint = { title: string; value: string };
type FaqItem = { q: string; a: string };

type WebOffer = {
  title: string;
  badge?: string;
  hint: string;
  forWho: string;
  link: string;
  points: string[];
  featured?: boolean;
};

@Component({
  selector: 'app-service-creation-site-web',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-creation-site-web.component.html',
  styleUrls: ['./service-creation-site-web.component.css'],
})
export class ServiceCreationSiteWebComponent implements OnInit {
  companyName = 'Vynexstudio';
  siteUrl = 'https://vynexstudio.com';
  whatsappNumber = '+212644071444';

  trackWhatsapp(source: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'lead',
        event_label: source,
      });
    }
  }
  

  slug = '/services/creation-site-web/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO (adapté à l'intention "agence + ROI + conversion")
  metaTitle = 'Création de site web au Maroc | Agence Web Vynexstudio (SEO + Tracking)';
  metaDescription =
    'Agence de création de site web au Maroc : vitrine, e-commerce ou plateforme. Site rapide, base SEO (sitemap, indexation) + tracking WhatsApp/formulaire. Devis rapide.';

  // HERO (H1 proche Rhillane, mais safe)
  heroTitle =
    'Création de site web au Maroc : sites vitrines, e-commerce & plateformes — performance + SEO + tracking';
  heroSubtitle =
    'Nous créons des sites web professionnels au Maroc (vitrine, e-commerce ou plateforme) avec un objectif clair : générer des demandes et des ventes. Design moderne, performance (Core Web Vitals), base SEO technique (titles, sitemap, indexation) et tracking WhatsApp/formulaire inclus.';
  bullets: string[] = [
    'Site rapide (Core Web Vitals) + expérience mobile parfaite',
    'Conversion : CTA, formulaire, appels & WhatsApp',
    'Base SEO technique : titles, sitemap, indexation Google',
    'Tracking inclus : mesurer WhatsApp & formulaires (ce qui rapporte)',
  ];

  // Features (si tu les utilises plus bas plus tard)
  features: Feature[] = [
    { title: 'Design premium', desc: 'Un design moderne qui inspire confiance et donne une image sérieuse.' },
    { title: 'Performance', desc: 'Temps de chargement rapide et expérience fluide sur mobile.' },
    { title: 'Conversion', desc: 'CTA, formulaire et WhatsApp pour transformer les visites en demandes.' },
    { title: 'Base SEO', desc: 'Structure propre, titles/meta, sitemap et mise en place de l’indexation.' },
    { title: 'Sécurité', desc: 'HTTPS/SSL, bonnes pratiques et configuration propre.' },
    { title: 'Tracking', desc: 'Mesure des clics WhatsApp + formulaire pour savoir ce qui marche.' },
  ];

  // Offres
  webOffers: WebOffer[] = [
    {
      title: 'Site vitrine',
      badge: 'Le plus demandé',
      hint: 'Leads',
      forWho: 'Idéal pour obtenir des appels / WhatsApp / demandes.',
      link: '/services/site-vitrine/',
      points: ['Accueil + services + confiance', 'Formulaire + WhatsApp', 'SEO local', 'Performance mobile'],
      featured: true,
    },
    {
      title: 'Site e-commerce',
      badge: 'Vente',
      hint: 'Boutique',
      forWho: 'Idéal pour vendre des produits en ligne.',
      link: '/services/site-ecommerce/',
      points: ['Catalogue + filtres', 'Paiement', 'Commandes', 'Pages produits SEO'],
    },
    {
      title: 'Plateforme web',
      badge: 'Sur-mesure',
      hint: 'SaaS',
      forWho: 'Idéal pour un espace client / SaaS / marketplace.',
      link: '/services/plateforme-web/',
      points: ['Comptes & rôles', 'Dashboard', 'Backoffice admin', 'Évolutif'],
    },
  ];

  // Steps
  steps: Step[] = [
    { n: '1', title: 'Brief & objectif', desc: 'Activité, cible, offre et objectif (leads / vente / espace client).' },
    { n: '2', title: 'Structure & maquette', desc: 'Plan des pages + maquette rapide. Validation avant intégration.' },
    { n: '3', title: 'Développement', desc: 'Responsive + performance + tracking (WhatsApp / formulaire).' },
    { n: '4', title: 'SEO technique', desc: 'Titles/meta, sitemap, indexation Google + base SEO locale.' },
    { n: '5', title: 'Mise en ligne', desc: 'Déploiement, tests et site opérationnel.' },
  ];

  // Prix
  priceHints: PriceHint[] = [
    { title: 'Site vitrine', value: 'À partir de 1700Dhs (selon pages & contenu)' },
    { title: 'E-commerce', value: 'À partir de 3500Dhs (selon produits & paiement)' },
    { title: 'Plateforme', value: 'Sur devis (selon fonctionnalités)' },
  ];

  // FAQ
  faqs: FaqItem[] = [
    {
      q: 'Combien coûte la création d’un site web ?',
      a: 'Le prix dépend des pages, du contenu et des fonctionnalités (paiement, réservation, espace client). On vous conseille la meilleure option selon votre objectif.',
    },
    {
      q: 'Quels sont les délais ?',
      a: 'Vitrine : 7–14 jours. E-commerce : 2–5 semaines. Plateforme : sur planning selon les fonctionnalités.',
    },
    {
      q: 'Le site sera-t-il visible sur Google ?',
      a: 'Oui : on met la base SEO technique (structure, titles, meta, sitemap, indexation). Le SEO mensuel est possible pour accélérer.',
    },
    {
      q: 'Est-ce que WhatsApp et le formulaire sont inclus ?',
      a: 'Oui : WhatsApp + formulaire. Et on peut activer le tracking pour mesurer les demandes.',
    },
    {
      q: 'Vous travaillez dans quelles villes ?',
      a: 'Marrakech, Casablanca, Rabat et partout au Maroc — ainsi qu’à distance.',
    },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je veux créer un site web. Pouvez-vous me conseiller ?');
    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    // Title + meta
    this.title.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // Canonical
    this.setCanonical();

    // OG/Twitter
    this.injectOpenGraph();

    // JSON-LD (breadcrumb + service + faq)
    this.injectBreadcrumbJsonLd();
    this.injectServiceJsonLd();
    this.injectFaqJsonLd();
  }

  private setCanonical(): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = this.canonicalUrl;
  }

  private injectOpenGraph(): void {
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.companyName });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.metaTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.metaDescription });
  }

  private injectBreadcrumbJsonLd(): void {
    const id = 'jsonld-vynex-breadcrumb-creation-site-web';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services/' },
        { '@type': 'ListItem', position: 3, name: 'Création de site web', item: this.canonicalUrl },
      ],
    };

    this.appendJsonLd(id, data);
  }

  private injectServiceJsonLd(): void {
    const id = 'jsonld-vynex-service-creation-site-web';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Création de site web au Maroc',
      serviceType: 'Website development',
      description: this.metaDescription,
      provider: {
        '@type': 'Organization',
        name: this.companyName,
        url: this.siteUrl,
      },
      areaServed: 'MA',
      url: this.canonicalUrl,
      offers: this.webOffers.map((o) => ({
        '@type': 'Offer',
        name: o.title,
        url: this.siteUrl + o.link,
      })),
    };

    this.appendJsonLd(id, data);
  }

  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-creation-site-web';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };

    this.appendJsonLd(id, data);
  }

  private appendJsonLd(id: string, data: any): void {
    const s = this.doc.createElement('script');
    s.id = id;
    s.type = 'application/ld+json';
    s.text = JSON.stringify(data);
    this.doc.head.appendChild(s);
  }
}
