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

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ Mets ton WhatsApp
  whatsappNumber = '+212644071444';

  slug = '/services/';
  canonicalUrl = this.siteUrl + this.slug;

  metaTitle = 'Agence web & marketing digital | Vynexstudio';
  metaDescription =
  "Sites web orientés clients : vitrine, e-commerce, plateformes, SEO et Google Ads. Objectif : plus d'appels, WhatsApp et demandes qualifiées. Devis rapide.";


  heroTitle = "Des services pensés pour générer des clients";
  heroSubtitle =
    "Sites rapides, SEO local et campagnes Ads orientées résultats. L’objectif : plus d’appels, de WhatsApp et de demandes qualifiées — pas juste un beau site.";
  
    

  cards: ServiceCard[] = [
    {
      title: 'Site vitrine',
      badge: 'Idéal pour démarrer',
      desc: "Un site rapide, crédible et optimisé SEO pour générer des appels et demandes.",
      link: '/services/site-vitrine/',
      points: ['Design confiance', 'SEO local', 'Formulaire + WhatsApp', 'Vitesse & performance'],
    },
    {
      title: 'Site e-commerce',
      badge: 'Vendre en ligne',
      desc: "Boutique en ligne moderne : catalogue, paiement, livraison, suivi commandes.",
      link: '/services/site-ecommerce/',
      points: ['Catalogue & filtres', 'Paiement', 'Gestion commandes', 'Pages SEO produits/catégories'],
    },
    {
      title: 'Plateforme web',
      badge: 'SaaS / Marketplace',
      desc: "Application web sur mesure avec espace utilisateur, abonnement/paiement et dashboard admin.",
      link: '/services/plateforme-web/',
      points: ['Espace client', 'Rôles/permissions', 'Paiement/abonnements', 'Backoffice admin'],
    },
    {
      title: 'Logiciel de gestion',
      badge: 'Automatiser',
      desc: "Un outil interne pour gérer clients, opérations, stocks, factures ou planning.",
      link: '/services/logiciel-gestion/',
      points: ['Backoffice complet', 'Process métier', 'Exports & reporting', 'Sécurité & accès'],
    },
    {
      title: 'SEO (référencement naturel)',
      badge: 'Long terme',
      desc: "Plus de visibilité Google avec du contenu, technique, et une stratégie durable.",
      link: '/seo/',
      points: ['Audit & plan', 'Optimisation technique', 'Contenu SEO', 'SEO local'],
    },
    {
      title: 'Campagnes publicitaires',
      badge: 'Résultats rapides',
      desc: "Attirez des prospects immédiatement via Google grâce à des annonces orientées appels, WhatsApp et formulaires.",
      link: '/googleAds/',
      points: [
        'Annonces Google',
        'Landing page dédiée',
        'Tracking des conversions',
        'Optimisation du coût par lead',
      ],
    },
    
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis pour un projet.');
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

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
