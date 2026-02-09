import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type FaqItem = { q: string; a: string };
type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type Pack = { title: string;price: number; priceHint: string; who: string; includes: string[] };

@Component({
  selector: 'app-service-site-ecommerce',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-site-ecommerce.component.html',
  styleUrls: ['./service-site-ecommerce.component.css'],
})
export class ServiceSiteEcommerceComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton vrai domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ Mets ton WhatsApp
  whatsappNumber = '+212644071444';
  trackWhatsapp(source: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'lead',
        event_label: source,
      });
    }
  }
  

  slug = '/services/site-ecommerce/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO
  metaTitle = 'Création de site e-commerce au Maroc | Vynexstudio (Ventes, Paiement, SEO)';
  metaDescription =
    "Vynex crée des sites e-commerce au Maroc : boutique rapide, paiement, livraison, catalogue, tracking, SEO et Google Ads. Un tunnel optimisé pour vendre. Devis gratuit.";

  // Page content
  heroTitle = 'Création de site e-commerce au Maroc';
  heroSubtitle =
    "Une boutique en ligne performante qui vend : tunnel optimisé, paiement, livraison, tracking conversion, SEO et Google Ads (option).";

  bullets: string[] = [
    'Tunnel de vente optimisé (conversion)',
    'Paiement, livraison, catalogue & promotions',
    'SEO e-commerce + pages catégories/produits',
    'Tracking (GA/Pixel/Clarity) + events',
  ];

  features: Feature[] = [
    {
      title: 'Tunnel qui convertit',
      desc: "Navigation claire, fiches produit convaincantes, panier/checkout optimisés, CTA visibles.",
    },
    {
      title: 'Paiement & livraison',
      desc: "Intégration du mode de paiement et des règles de livraison (zones, tarifs, options).",
    },
    {
      title: 'Catalogue solide',
      desc: "Catégories, filtres, variantes (taille/couleur), stock, promos et codes promo.",
    },
    {
      title: 'SEO e-commerce',
      desc: "Structure, performance, indexation, balises, pages catégories/produits optimisées.",
    },
    {
      title: 'Tracking & analytics',
      desc: "Événements (add-to-cart, checkout, purchase) pour mesurer et améliorer.",
    },
    {
      title: 'Évolutif & sécurisé',
      desc: "Base solide, bonnes pratiques, maintenance et évolutions possibles.",
    },
  ];

  steps: Step[] = [
    { n: '1', title: 'Cadrage', desc: 'Produits, catalogue, paiement, livraison, objectifs & planning.' },
    { n: '2', title: 'Maquette UX', desc: 'Design “trust” + parcours d’achat (mobile first).' },
    { n: '3', title: 'Développement', desc: 'Boutique, panier, checkout, compte client.' },
    { n: '4', title: 'SEO & tracking', desc: 'Balises, performance, events conversion, pixels.' },
    { n: '5', title: 'Mise en ligne', desc: 'Tests (paiement, commandes), checklist & formation.' },
  ];

  packs: Pack[] = [
    {
      title: 'E-commerce Essentiel',
      price : 3000,
      priceHint: 'Pour démarrer vite',
      who: 'Petites boutiques / catalogues simples',
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
      price : 3500,
      priceHint: 'Conversion + tracking',
      who: 'Marques / commerces avec objectifs de ventes',
      includes: [
        'Tunnel optimisé + upsell/cross-sell',
        'Tracking conversion (events)',
        'Pages SEO catégories/produits',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
    {
      title: 'E-commerce Growth',
      price : 4500,
      priceHint: 'SEO + Ads',
      who: 'Accélération ventes',
      includes: [
        'SEO avancé (structure + contenu)',
        'Tracking conversion (events)',
        'Pages SEO catégories/produits',
        
        'Dashboards & reporting',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Quel est le délai pour un site e-commerce ?',
      a: "En général 2 à 4 semaines selon le nombre de produits, les fonctionnalités et la validation du design.",
    },
    {
      q: 'Pouvez-vous intégrer le paiement et la livraison ?',
      a: "Oui. On configure le paiement et les règles de livraison (zones, tarifs, options) selon votre besoin.",
    },
    {
      q: 'Est-ce optimisé SEO pour Google ?',
      a: "Oui : structure, balises, performance, pages produits/catégories. On peut aussi faire une stratégie SEO mensuelle.",
    },
    {
      q: 'Est-ce que je peux gérer les produits moi-même ?',
      a: "Oui. Vous aurez une interface simple pour gérer produits, stocks, prix, promos et commandes (selon la solution choisie).",
    },
    {
      q: 'Proposez-vous Google Ads ?',
      a: "Oui. On peut gérer Google Ads pour obtenir des ventes rapidement, puis optimiser selon les performances.",
    },
  ];

  related = [
    { title: 'SEO (référencement naturel)', link: '/seo/' },
    { title: 'Compagne publicitaire', link: '/googleAds/' },
    { title: 'Site vitrine', link: '/services/site-vitrine/' },
    { title: 'Logiciel de gestion', link: '/services/logiciel-gestion/' },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis pour un site e-commerce.');
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
    this.injectServiceJsonLd();
    this.injectFaqJsonLd();
    this.injectBreadcrumbJsonLd();
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

  private injectServiceJsonLd(): void {
    const id = 'jsonld-vynex-service-ecommerce';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Création de site e-commerce',
      provider: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      areaServed: 'MA',
      serviceType: 'E-commerce / Développement Web',
      url: this.canonicalUrl,
      description: this.metaDescription,
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.doc.head.appendChild(script);
  }

  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-ecommerce';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqJsonLd);
    this.doc.head.appendChild(script);
  }

  private injectBreadcrumbJsonLd(): void {
    const id = 'jsonld-vynex-breadcrumb-ecommerce';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services/' },
        { '@type': 'ListItem', position: 3, name: 'Site e-commerce', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
