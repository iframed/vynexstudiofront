import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type FaqItem = { q: string; a: string };
type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type Pack = { title: string; priceHint: string; who: string; includes: string[] };

@Component({
  selector: 'app-service-plateforme-web',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-plateforme-web.component.html',
  styleUrls: ['./service-plateforme-web.component.css'],
})
export class ServicePlateformeWebComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ Mets ton WhatsApp
  whatsappNumber = '+212644071444';

  slug = '/services/plateforme-web/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO
  metaTitle =
    'Développement de plateforme web au Maroc | Vynex (SaaS, Marketplace, Espace client)';
  metaDescription =
    "Vynex développe des plateformes web sur mesure au Maroc : SaaS, marketplace, réservation, espace client, paiement, rôles, dashboard, API. Une solution scalable orientée produit. Devis gratuit.";

  heroTitle = 'Développement de plateforme web au Maroc';
  heroSubtitle =
    "Créez une application web moderne (SaaS, marketplace, réservation) avec espace utilisateur, paiement, dashboard admin et automatisations.";

  bullets: string[] = [
    'Espace utilisateurs (inscription, profils, rôles)',
    'Paiement & abonnements (SaaS) + facturation',
    'Dashboard admin + modération + reporting',
    'API & intégrations (email, WhatsApp, services externes)',
  ];

  features: Feature[] = [
    {
      title: 'SaaS / Abonnements',
      desc: 'Plans, essais gratuits, paiement, renouvellement, factures et accès par rôle.',
    },
    {
      title: 'Marketplace',
      desc: 'Comptes vendeurs, produits/services, commissions, modération, notifications.',
    },
    {
      title: 'Réservation / RDV',
      desc: 'Calendrier, disponibilités, paiement, confirmation automatique, relances.',
    },
    {
      title: 'Espace client',
      desc: 'Historique, commandes, documents, support, notifications, statut en temps réel.',
    },
    {
      title: 'Admin & analytics',
      desc: 'Backoffice complet : gestion utilisateurs, contenu, KPI, exports, permissions.',
    },
    {
      title: 'Scalable & sécurisé',
      desc: 'Architecture propre, sécurité, logs, backups, monitoring et évolutions faciles.',
    },
  ];

  steps: Step[] = [
    { n: '1', title: 'Découverte', desc: 'Objectifs, utilisateurs, MVP, KPI, concurrence.' },
    { n: '2', title: 'UX/UI', desc: 'Wireframes, parcours, maquettes, design system.' },
    { n: '3', title: 'MVP', desc: 'Développement du cœur produit + tests + release.' },
    { n: '4', title: 'Paiement & rôles', desc: 'Abonnements, permissions, admin, notifications.' },
    { n: '5', title: 'Scalabilité', desc: 'Performance, sécurité, monitoring, backups.' },
    { n: '6', title: 'Croissance', desc: 'Améliorations continues + fonctionnalités avancées.' },
  ];

  packs: Pack[] = [
    {
      title: 'MVP',
      priceHint: 'Lancer vite',
      who: 'Startups / idées à valider',
      includes: [
        'Cœur produit + espace utilisateur',
        'Dashboard admin simple',
        'Déploiement + tests',
        'Plan d’évolution',
      ],
    },
    {
      title: 'SaaS Pro',
      priceHint: 'Abonnements & paiement',
      who: 'Plateforme commercialisée',
      includes: [
        'Plans & abonnements',
        'Factures & emails automatiques',
        'Rôles & permissions',
        'Reporting + exports',
      ],
    },
    {
      title: 'Marketplace / Enterprise',
      priceHint: 'Solution complète',
      who: 'Produits complexes & multi-acteurs',
      includes: [
        'Comptes vendeurs/clients',
        'Commission + modération',
        'API & intégrations',
        'Sécurité renforcée + SLA',
      ],
    },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Plateforme web vs logiciel de gestion : quelle différence ?',
      a: "Une plateforme web est utilisée aussi par vos clients/partenaires (espace utilisateur). Un logiciel de gestion est plutôt interne (CRM/ERP). Une plateforme inclut souvent un backoffice.",
    },
    {
      q: 'Pouvez-vous développer un SaaS avec abonnements ?',
      a: "Oui : plans, essai gratuit, paiement, renouvellement, factures et accès par rôle.",
    },
    {
      q: 'Est-ce évolutif ?',
      a: "Oui. On démarre par un MVP, puis on ajoute des modules. L’architecture est pensée pour grandir.",
    },
    {
      q: 'Pouvez-vous faire une marketplace ?',
      a: "Oui : vendeurs, produits/services, commandes, commissions, modération et notifications.",
    },
    {
      q: 'Combien de temps pour livrer ?',
      a: "Un MVP peut sortir en quelques semaines. La durée dépend du nombre de modules et intégrations.",
    },
  ];

  related = [
    { title: 'Logiciel de gestion', link: '/services/platforme-web/' },
    { title: 'Application web', link: '/services/platforme-web/' },
    { title: 'SEO (référencement naturel)', link: '/seo/' },
    { title: 'Google Ads', link: '/googleAds/' },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis pour une plateforme web.');
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
    const id = 'jsonld-vynex-service-plateforme-web';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Développement de plateforme web',
      provider: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      areaServed: 'MA',
      serviceType: 'Développement de plateforme web / SaaS',
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
    const id = 'jsonld-vynex-faq-plateforme-web';
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
    const id = 'jsonld-vynex-breadcrumb-plateforme-web';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services' },
        { '@type': 'ListItem', position: 3, name: 'Plateforme web', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
