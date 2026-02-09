import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type FaqItem = { q: string; a: string };
type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type Pack = { title: string; priceHint: string; who: string; includes: string[] };

@Component({
  selector: 'app-service-logiciel-gestion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-logiciel-gestion.component.html',
  styleUrls: ['./service-logiciel-gestion.component.css'],
})
export class ServiceLogicielGestionComponent implements OnInit {
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
  

  slug = '/services/logiciel-gestion/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO
  metaTitle =
    'Logiciel de gestion sur mesure au Maroc | Vynexstudio (CRM/ERP, Dashboard, Automatisation)';
  metaDescription =
    "Vynexstudio développe des logiciels de gestion sur mesure au Maroc : CRM/ERP, dashboards, facturation, stock, RH, workflow, rôles & permissions. Un outil adapté à votre métier. Devis gratuit.";

  // Content
  heroTitle = 'Logiciel de gestion sur mesure au Maroc';
  heroSubtitle =
    "Automatisez vos opérations avec un outil adapté à votre métier : CRM/ERP, dashboards, workflow, facturation, stock, permissions et reporting.";

  bullets: string[] = [
    'Sur-mesure : adapté à votre process métier',
    'Rôles & permissions (admin, équipe, managers)',
    'Dashboards + reporting + exports (Excel/PDF)',
    'Automatisations & intégrations (emails, WhatsApp, API)',
  ];

  features: Feature[] = [
    {
      title: 'Adapté à votre métier',
      desc: "On construit vos écrans et règles comme vous travaillez réellement (pas l’inverse).",
    },
    {
      title: 'CRM / ERP',
      desc: 'Clients, prospects, devis, commandes, factures, suivi et historique.',
    },
    {
      title: 'Gestion stock & produits',
      desc: 'Entrées/sorties, alertes, variantes, inventaires et traçabilité.',
    },
    {
      title: 'Workflow & automatisations',
      desc: 'Statuts, validations, tâches, notifications email/WhatsApp, rappels.',
    },
    {
      title: 'Sécurité & permissions',
      desc: 'Rôles, accès par module, journal d’activité et bonnes pratiques.',
    },
    {
      title: 'Évolutif & maintenable',
      desc: 'Ajout de modules, nouvelles règles, API, mobile, multi-tenant si besoin.',
    },
  ];

  steps: Step[] = [
    { n: '1', title: 'Audit & cadrage', desc: 'On analyse votre process, vos pain points et vos objectifs.' },
    { n: '2', title: 'Spécifications', desc: 'Modules, rôles, écrans, données, règles & intégrations.' },
    { n: '3', title: 'Prototype', desc: 'Maquettes + validation rapide (UX orientée productivité).' },
    { n: '4', title: 'Développement', desc: 'Backend + dashboard + sécurité + tests.' },
    { n: '5', title: 'Déploiement', desc: 'Mise en production, monitoring, sauvegardes.' },
    { n: '6', title: 'Maintenance', desc: 'Support, évolutions, optimisation continue.' },
  ];

  packs: Pack[] = [
    {
      title: 'Starter ',
      priceHint: 'Valider vite',
      who: 'PME / équipes qui veulent un premier module',
      includes: [
        '1–2 modules (ex: clients + devis)',
        'Auth + rôles simples',
        'Dashboard de base',
        'Livraison rapide + support initial',
      ],
    },
    {
      title: 'Business',
      priceHint: 'Le plus demandé',
      who: 'Entreprise avec plusieurs besoins',
      includes: [
        'Modules CRM/ERP (ex: clients, commandes, factures)',
        'Rôles & permissions avancés',
        'Exports & reporting',
        'Workflow + notifications',
      ],
    },
    {
      title: 'Enterprise',
      priceHint: 'Sur-mesure complet',
      who: 'Process complexes / multi-sites',
      includes: [
        'Modules sur mesure + intégrations API',
        'Journal d’audit + sécurité renforcée',
        'Automatisations avancées',
        'SLA maintenance + évolutions',
      ],
    },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Quelle différence entre un logiciel de gestion et un site web ?',
      a: "Un logiciel de gestion sert à gérer vos opérations internes (clients, stock, facturation, workflow). Un site web sert surtout à présenter et acquérir des clients.",
    },
    {
      q: 'Est-ce que c’est vraiment sur mesure ?',
      a: "Oui. On part de votre process métier, puis on construit les modules adaptés (écrans, règles, rôles, automatisations).",
    },
    {
      q: 'Peut-on ajouter des modules plus tard ?',
      a: "Oui. On développe une base évolutive : vous pouvez ajouter modules, intégrations, reporting, etc.",
    },
    {
      q: 'Est-ce sécurisé ?',
      a: "Oui. Authentification, rôles/permissions, bonnes pratiques, sauvegardes, monitoring et logs (selon besoin).",
    },
    {
      q: 'Combien de temps ça prend ?',
      a: "Un MVP peut sortir en quelques semaines. Un ERP complet dépend du nombre de modules et validations.",
    },
  ];

  related = [
    { title: 'Plateforme web', link: '/services/plateforme-web' },
    { title: 'Application web', link: '/services/plateforme-web' },
    { title: 'SEO (référencement naturel)', link: '/seo/' },
    { title: 'Google Ads', link: '/googleAds/' },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis pour un logiciel de gestion.');
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
    const id = 'jsonld-vynex-service-logiciel-gestion';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Logiciel de gestion sur mesure',
      provider: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      areaServed: 'MA',
      serviceType: 'Développement logiciel / CRM / ERP',
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
    const id = 'jsonld-vynex-faq-logiciel-gestion';
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
    const id = 'jsonld-vynex-breadcrumb-logiciel-gestion';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services' },
        { '@type': 'ListItem', position: 3, name: 'Logiciel de gestion', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}

