import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type ServiceCard = {
  title: string;
  desc: string;
  link: string;
  badge?: string;
  points: string[];
};

type Block = { title: string; desc: string; points: string[]; link?: string };
type FaqItem = { q: string; a: string };

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
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
  

  slug = '/services/';
  canonicalUrl = this.siteUrl + this.slug;

  metaTitle = 'Agence web Casablanca | Services web & création de sites web – Vynexstudio';
  metaDescription =
    "Agence web à Casablanca : création de sites internet, plateformes web, logiciels de gestion, SEO et Google Ads. Des services web pensés pour générer des demandes. Devis rapide.";

  heroSubtitle =
    "Sites Web rapides, SEO local et campagnes Ads orientées résultats. L'objectif : plus d'appels, de WhatsApp et de demandes qualifiées — pas juste un beau site.";

  // Cards services (conserve ta logique)
  cards: ServiceCard[] = [
    {
      title: 'Création de site web',
      badge: 'Sites internet',
      desc: "Sites vitrines, e-commerce et plateformes web conçus pour convertir et performer.",
      link: '/services/creation-site-web/',
      points: ['Site vitrine', 'Site e-commerce', 'Plateforme web', 'Performance & SEO'],
    },
    {
      title: 'Logiciel de gestion',
      badge: 'Outils internes',
      desc: "Développement de logiciels web pour gérer vos opérations, clients et processus.",
      link: '/services/logiciel-gestion/',
      points: ['Backoffice sur mesure', 'Gestion clients', 'Process métier', 'Automatisation'],
    },
    {
      title: 'SEO & Acquisition',
      badge: 'Visibilité',
      desc: "Plus de visibilité et de demandes grâce au référencement naturel et aux campagnes Google Ads.",
      link: '/services/seo/',
      points: ['SEO', 'SEO local', 'Google Ads', 'Tracking conversions'],
    },
  ];

  // ✅ Contenu SEO utile (visiteur)
  audiences: Block[] = [
    {
      title: 'PME & entreprises locales',
      desc: "Pour recevoir des demandes depuis Google et transformer les visites en contacts.",
      points: ['SEO local (Casablanca & régions)', 'WhatsApp / formulaires / appels', 'Pages services orientées conversion'],
    },
    {
      title: 'Indépendants & cabinets',
      desc: "Pour rassurer et expliquer clairement vos services, avec une image professionnelle.",
      points: ['Positionnement clair', 'Pages “preuves” (avis / réalisations)', 'Suivi des demandes (tracking)'],
    },
    {
      title: 'E-commerce & marques',
      desc: "Pour vendre en ligne avec un parcours simple, rapide et mesurable.",
      points: ['Tunnel d’achat optimisé', 'Tracking conversion', 'SEO catégories/produits + Ads si besoin'],
    },
  ];

  choose: Block[] = [
    {
      title: 'Site vitrine',
      desc: "Idéal si vous vendez un service : l’objectif est d’obtenir des appels, des WhatsApp et des formulaires.",
      points: ['Pages claires (offre → preuves → contact)', 'SEO local', 'Conversion (CTA visibles)'],
      link: '/services/site-vitrine/',
    },
    {
      title: 'Site e-commerce',
      desc: "Idéal si vous vendez des produits : l’objectif est d’augmenter les ventes et suivre les conversions.",
      points: ['Catalogue & fiches produit', 'Paiement / livraison', 'Tracking achat + Ads possible'],
      link: '/services/site-ecommerce/',
    },
    {
      title: 'Plateforme web',
      desc: "Idéal si vous avez un besoin métier : espace client, backoffice, SaaS, automatisations.",
      points: ['Comptes & rôles', 'Dashboard', 'Évolutif selon votre croissance'],
      link: '/services/plateforme-web/',
    },
  ];

  process: Block[] = [
    {
      title: 'Cadrage',
      desc: "On clarifie votre objectif (leads / ventes / automatisation) et les priorités.",
      points: ['Cible & message', 'Structure des pages', 'KPI à suivre'],
    },
    {
      title: 'Design & contenu',
      desc: "On crée une interface claire et des textes orientés conversion (sans “blabla”).",
      points: ['UX mobile first', 'Preuves (avis / réalisations)', 'CTA & sections clés'],
    },
    {
      title: 'Technique & performance',
      desc: "On sécurise, on accélère, et on prépare l’indexation Google.",
      points: ['Core Web Vitals', 'Sitemap + canonical', 'Tracking (WhatsApp/formulaire)'],
    },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Quels services propose une agence web à Casablanca ?',
      a: "Chez Vynexstudio : création de sites (vitrine, e-commerce, plateforme), développement sur mesure, SEO, Google Ads et tracking des conversions.",
    },
    {
      q: 'Quel type de site est le plus rentable ?',
      a: "Pour les services : un site vitrine orienté demandes. Pour les produits : e-commerce. Pour un besoin métier : plateforme web. On vous conseille selon votre objectif.",
    },
    {
      q: 'Est-ce que vous travaillez uniquement à Casablanca ?',
      a: "Nous sommes basés à Casablanca, mais nous travaillons partout au Maroc et à distance.",
    },
    {
      q: 'Est-ce que le SEO est inclus ?',
      a: "On met une base SEO technique sur les sites (structure, titles/meta, sitemap, indexation). Une stratégie SEO mensuelle peut être ajoutée pour accélérer.",
    },
    {
      q: 'Comment mesurez-vous les demandes (WhatsApp / formulaire) ?',
      a: "On peut activer le tracking : clic WhatsApp, envoi formulaire, appels, puis suivi dans Analytics/Ads pour savoir ce qui génère des clients.",
    },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynexstudio, je souhaite un devis pour un projet.');
    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.applySeo();
    this.setCanonical();
    this.injectBreadcrumbJsonLd();

    // ✅ Bonus SEO “propre” (sans keyword stuffing)
    this.injectLocalBusinessJsonLd();
    this.injectServicesItemListJsonLd();
    this.injectFaqJsonLd();
  }

  private applySeo(): void {
    this.title.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.companyName });
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.metaTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.metaDescription });
  }

  private setCanonical(): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', this.canonicalUrl);
  }

  private injectBreadcrumbJsonLd(): void {
    const id = 'jsonld-vynex-breadcrumb-services';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.canonicalUrl },
      ],
    };

    this.appendJsonLd(id, data);
  }

  // ✅ LocalBusiness simple (sans inventer adresse/horaires)
  private injectLocalBusinessJsonLd(): void {
    const id = 'jsonld-vynex-localbusiness';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: this.companyName,
      url: this.siteUrl,
      areaServed: 'MA',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Casablanca',
        addressCountry: 'MA',
      },
    };

    this.appendJsonLd(id, data);
  }

  // ✅ Liste des services (Google comprend mieux la page Services)
  private injectServicesItemListJsonLd(): void {
    const id = 'jsonld-vynex-services-itemlist';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: this.cards.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.title,
        url: this.siteUrl + c.link.replace(/\/$/, ''),
      })),
    };

    this.appendJsonLd(id, data);
  }

  // ✅ FAQ schema
  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-services';
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
