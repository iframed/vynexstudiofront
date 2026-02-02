import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type FaqItem = { q: string; a: string };
type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type Pack = { title: string; priceHint: string; who: string; includes: string[] };

@Component({
  selector: 'app-service-seo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-seo.component.html',
  styleUrls: ['./service-seo.component.css'],
})
export class ServiceSeoComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ Mets ton WhatsApp
  whatsappNumber = '+212644071444';

  slug = '/seo/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO (page)
  metaTitle = 'Agence Digital SEO au Maroc | Vynexstudio (Référencement naturel, trafic & leads)';
  metaDescription =
    "Vynexstudio améliore votre visibilité sur Google : audit SEO, optimisation technique, contenu, netlinking, SEO local (Marrakech/Casa…). Objectif : plus de trafic et plus de clients. Devis gratuit.";

  heroTitle = 'Agence digital SEO au Maroc (Référencement naturel)';
  heroSubtitle =
    "Augmentez votre visibilité sur Google et recevez plus de demandes clients. Audit, optimisation technique, contenu, SEO local et stratégie durable.";

  bullets: string[] = [
    'Audit SEO complet + plan d’action clair',
    'Optimisation technique (vitesse, indexation, structure)',
    'Contenu & pages services (1 service = 1 page SEO)',
    'SEO local (Marrakech, Casablanca…) + Google Business Profile',
  ];

  features: Feature[] = [
    {
      title: 'Visibilité Google',
      desc: 'On cible les mots-clés qui apportent des clients, pas juste du trafic “vide”.',
    },
    {
      title: 'SEO technique',
      desc: 'Indexation, performance, structure Hn, maillage interne, schema, erreurs.',
    },
    {
      title: 'Contenu optimisé',
      desc: 'Pages services, pages locales et articles blog qui répondent à l’intention.',
    },
    {
      title: 'SEO local',
      desc: 'Optimisation Google Business Profile + pages villes + preuves & avis.',
    },
    {
      title: 'Netlinking',
      desc: 'Acquisition de liens de qualité (progressif) pour renforcer l’autorité.',
    },
    {
      title: 'Reporting clair',
      desc: 'Suivi positions, trafic, conversions, leads et recommandations concrètes.',
    },
  ];

  steps: Step[] = [
    { n: '1', title: 'Audit', desc: 'Technique, contenu, concurrence, mots-clés, opportunités.' },
    { n: '2', title: 'Plan SEO', desc: 'Priorités, pages à créer, quick wins, KPI & calendrier.' },
    { n: '3', title: 'Optimisation', desc: 'Performance, structure, meta, internal linking, schema.' },
    { n: '4', title: 'Contenu', desc: 'Pages services/ville + articles blog orientés conversion.' },
    { n: '5', title: 'Autorité', desc: 'Netlinking progressif + réputation + citations locales.' },
    { n: '6', title: 'Suivi', desc: 'Reporting + amélioration continue (conversion + positions).' },
  ];

  packs: Pack[] = [
    {
      title: 'Audit SEO',
      priceHint: 'Diagnostic complet',
      who: 'Pour savoir quoi corriger',
      includes: [
        'Audit technique + indexation',
        'Analyse mots-clés & concurrence',
        'Plan d’action priorisé',
        'Recommandations conversion',
      ],
    },
    {
      title: 'SEO Mensuel',
      priceHint: 'Trafic + leads',
      who: 'Entreprise qui veut grandir',
      includes: [
        'Optimisations techniques continues',
        'Création/optimisation de contenu',
        'SEO local si besoin',
        'Reporting mensuel KPI',
      ],
    }
    
  ];

  kpis = [
    { k: 'Trafic organique', v: 'Visiteurs depuis Google' },
    { k: 'Positions', v: 'Top 3 / Top 10 sur mots-clés' },
    { k: 'Leads', v: 'Formulaires, appels, WhatsApp' },
    { k: 'Conversion', v: 'Taux visiteurs → demandes' },
  ];

  faqs: FaqItem[] = [
    {
      q: 'En combien de temps le SEO donne des résultats ?',
      a: "Généralement 2 à 4 mois pour des premiers résultats, puis accélération selon le secteur et la concurrence.",
    },
    {
      q: 'SEO ou Google Ads : lequel est mieux ?',
      a: "Google Ads donne des résultats immédiats. Le SEO construit une acquisition durable. Idéalement : Ads au début + SEO long terme.",
    },
    {
      q: 'Est-ce que vous faites le SEO local ?',
      a: "Oui : optimisation Google Business Profile, pages locales et stratégie avis/citations.",
    },
    {
      q: 'Est-ce que vous fournissez le contenu ?',
      a: "Oui. On peut rédiger et optimiser les pages et articles, ou travailler avec votre contenu.",
    },
    {
      q: 'Comment suivez-vous les performances ?',
      a: "On suit positions, trafic, et surtout conversions (formulaire/WhatsApp/appels). Reporting clair chaque mois.",
    },
  ];

  related = [
    { title: 'Google Ads', link: '/googleAds/' },
    { title: 'Site vitrine', link: '/services/site-vitrine/' },
    { title: 'Site e-commerce', link: '/services/site-ecommerce/' },
    { title: 'Logiciel de gestion', link: '/services/logiciel-gestion/' },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite améliorer mon référencement SEO.');
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
    const id = 'jsonld-vynex-service-seo';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SEO (Référencement naturel)',
      provider: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      areaServed: 'MA',
      serviceType: 'SEO / Référencement naturel',
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
    const id = 'jsonld-vynex-faq-seo';
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
    const id = 'jsonld-vynex-breadcrumb-seo';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services' },
        { '@type': 'ListItem', position: 3, name: 'SEO', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
