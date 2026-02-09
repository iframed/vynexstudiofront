import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type Pack = { title: string; price: number; who: string; includes: string[]; featured?: boolean };
type Card = { title: string; desc: string };
type TableRow = { need: string; for: string; price: string };
type FaqItem = { q: string; a: string };

@Component({
  selector: 'app-service-site-ecommerce-prix',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-site-ecommerce-prix.component.html',
  styleUrls: ['./service-site-ecommerce-prix.component.css'],
})
export class ServiceSiteEcommercePrixComponent implements OnInit {
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
  

  // ✅ URL SEO propre
  slug = '/services/site-ecommerce/prix/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO
  metaTitle = 'Prix site web e-commerce au Maroc | Tarifs boutique en ligne (2026) | Vynexstudio';
  metaDescription =
    "Prix site web e-commerce au Maroc : tarifs clairs pour boutique en ligne (catalogue, paiement, livraison, SEO, tracking). Repères de budget + estimation rapide. Vynexstudio.";

  // HERO
  heroTitle = 'Prix site web e-commerce au Maroc';
  heroSubtitle ="Le prix d’une boutique en ligne au Maroc commence à partir de 3000 DH et varie selon le catalogue, le paiement, la livraison et le niveau d’optimisation SEO.";
  bullets: string[] = [
    'Tarifs clairs (repères) + estimation personnalisée',
    'Budget selon catalogue, paiement et livraison',
    'SEO e-commerce + tracking conversion (option)',
    'Objectif : vendre en ligne avec un tunnel fiable',
  ];

  fromPrice = 3000;

  packs: Pack[] = [
    {
      title: 'E-commerce Essentiel',
      price: 3000,
      featured: true,
      who: 'Pour démarrer vite avec un catalogue simple',
      includes: [
        'Boutique + pages essentielles',
        'Catalogue + fiches produits',
        'Panier + checkout',
        'SEO de base + performance',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
    {
      title: 'E-commerce Pro',
      price: 3500,
      who: 'Pour vendre plus avec conversion & tracking',
      includes: [
        'Tunnel optimisé (mobile + trust)',
        'Tracking conversion (events)',
        'Pages SEO catégories/produits',
        'Paiement & livraison configurés',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
    {
      title: 'E-commerce Growth',
      price: 4500,
      who: 'Pour accélérer (SEO avancé + reporting)',
      includes: [
        'SEO avancé (structure + contenus de base)',
        'Tracking conversion (events)',
        'Pages SEO catégories/produits',
        'Dashboards & reporting',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
  ];

  factors: Card[] = [
    {
      title: 'Nombre de produits & variantes',
      desc: 'Plus il y a de produits (et variantes taille/couleur), plus la mise en place et la structure catalogue prennent du temps.',
    },
    {
      title: 'Paiement',
      desc: 'CB/CMI, PayPal, Stripe, paiement à la livraison… le choix du paiement influence l’intégration et les tests.',
    },
    {
      title: 'Livraison',
      desc: 'Zones, tarifs, transporteurs, click & collect… la logique de livraison impacte la configuration.',
    },
    {
      title: 'Design & pages',
      desc: 'Nombre de pages (accueil, collections, pages SEO, FAQ) et niveau de personnalisation du design.',
    },
    {
      title: 'SEO e-commerce',
      desc: 'Structure catégories/produits, balises, indexation, performance. Plus c’est poussé, plus c’est solide.',
    },
    {
      title: 'Tracking & analytics',
      desc: 'Événements (add-to-cart, checkout, purchase), suivi WhatsApp/appels/formulaires, dashboards.',
    },
  ];

  table: TableRow[] = [
    { need: 'Boutique simple', for: 'Catalogue limité, besoin rapide', price: '≈ 3000–3500 DH' },
    { need: 'Boutique pro', for: 'Ventes régulières + tracking', price: '≈ 3500–4500 DH' },
    { need: 'Boutique avancée', for: 'SEO fort + reporting + options', price: 'Sur devis' },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Combien coûte un site e-commerce au Maroc ?',
      a: "En général, une boutique démarre autour de 3000 DH et augmente selon le catalogue, le paiement, la livraison et les options (SEO/tracking).",
    },
    {
      q: 'Pourquoi le prix varie autant ?',
      a: "Le budget dépend surtout du nombre de produits/variantes, des règles de livraison, du paiement, du design et du niveau d’optimisation SEO.",
    },
    {
      q: 'Le paiement et la livraison sont-ils inclus ?',
      a: "Oui, selon la formule : on configure le paiement et les règles de livraison (zones, tarifs, options) suivant votre besoin.",
    },
    {
      q: 'Est-ce qu’il y a des frais mensuels ?',
      a: "Les repères ci-dessus correspondent à la création. L’hébergement/domaine sont inclus 1 an dans nos packs, puis renouvelables. Maintenance/SEO/Ads sont optionnels.",
    },
    {
      q: 'Pouvez-vous donner un prix exact rapidement ?',
      a: "Oui : envoyez le type de produits, le nombre approximatif, le paiement souhaité, et la livraison. On vous renvoie une estimation claire.",
    },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je veux connaître le prix d’un site e-commerce. Pouvez-vous me faire une estimation ?');
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
    this.injectFaqJsonLd();
    this.injectBreadcrumbJsonLd();
    this.injectWebPageJsonLd();
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

  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-ecommerce-prix';
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

  private injectBreadcrumbJsonLd(): void {
    const id = 'jsonld-vynex-breadcrumb-ecommerce-prix';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services/' },
        { '@type': 'ListItem', position: 3, name: 'Site e-commerce', item: this.siteUrl + '/services/site-ecommerce/' },
        { '@type': 'ListItem', position: 4, name: 'Prix', item: this.canonicalUrl },
      ],
    };

    this.appendJsonLd(id, data);
  }

  // ✅ Page intent “prix” → WebPage JSON-LD (propre + léger)
  private injectWebPageJsonLd(): void {
    const id = 'jsonld-vynex-webpage-ecommerce-prix';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: this.metaTitle,
      description: this.metaDescription,
      url: this.canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: this.companyName,
        url: this.siteUrl,
      },
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
