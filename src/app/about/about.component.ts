import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type Value = { title: string; desc: string };
type FaqItem = { q: string; a: string };
type Stat = { k: string; v: string };

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ Mets ton WhatsApp
  whatsappNumber = '+212644071444';

  slug = '/a-propos/';
  canonicalUrl = this.siteUrl + this.slug;

  metaTitle = 'À propos de Vynexstudio | Agence web, logiciels & SEO au Maroc';
  metaDescription =
    "Vynexstudio accompagne les entreprises au Maroc dans la création de sites web, plateformes, logiciels et stratégie SEO/Ads. Objectif : croissance, crédibilité et conversion.";

  heroTitle = 'Vynexstudio';
  heroSubtitle =
    "Nous créons des solutions digitales modernes (sites web, e-commerce, plateformes, logiciels) et nous optimisons votre acquisition (SEO & Ads). Notre objectif : vous apporter des résultats concrets.";

  stats: Stat[] = [
    { k: 'Projets livrés', v: 'Sites, plateformes, outils internes' },
    { k: 'Approche', v: 'Qualité + performance + SEO + conversion' },
    { k: 'Clients', v: 'PME, services, e-commerce, startups' },
    { k: 'Objectif', v: 'Plus de leads et croissance durable' },
  ];

  values: Value[] = [
    {
      title: 'Orientation résultats',
      desc: "On pense conversion : WhatsApp, formulaires, tracking, messages clairs, confiance.",
    },
    {
      title: 'Qualité & performance',
      desc: "Un site rapide, stable et bien structuré améliore l’expérience + Google.",
    },
    {
      title: 'Transparence',
      desc: "Planning clair, livraisons par étapes, explications simples.",
    },
    {
      title: 'Sur-mesure',
      desc: "On adapte la solution à votre métier, votre budget et vos objectifs.",
    },
    {
      title: 'Sécurité',
      desc: "Bonnes pratiques, rôles/permissions, sauvegardes et monitoring selon besoin.",
    },
    {
      title: 'Partenariat long terme',
      desc: "Maintenance, évolutions, SEO mensuel et optimisation continue.",
    },
  ];

  steps = [
    { n: '1', title: 'Comprendre votre besoin', desc: 'Cible, objectifs, offre, pages & contenus.' },
    { n: '2', title: 'Design confiance', desc: 'Maquette moderne, validation rapide.' },
    { n: '3', title: 'Développement', desc: 'Performance, sécurité, responsive.' },
    { n: '4', title: 'SEO & tracking', desc: 'Meta, structure, indexation, conversions.' },
    { n: '5', title: 'Lancement', desc: 'Mise en ligne + checklist + support.' },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Vynexstudio est une agence ou une équipe freelance ?',
      a: "Vynexstudio est une équipe orientée delivery : design, dev et acquisition (SEO/Ads) avec un process clair.",
    },
    {
      q: 'Travaillez-vous uniquement au Maroc ?',
      a: "Nous travaillons principalement au Maroc, mais aussi à distance selon les projets.",
    },
    {
      q: 'Quel type de projets réalisez-vous ?',
      a: "Sites vitrines, e-commerce, plateformes web (SaaS / marketplace), logiciels de gestion et apps mobiles.",
    },
    {
      q: 'Proposez-vous un accompagnement après livraison ?',
      a: "Oui : maintenance, ajouts de pages, optimisation SEO, reporting, améliorations.",
    },
    {
      q: 'Comment démarrer ?',
      a: "Vous nous contactez (formulaire ou WhatsApp). On vous pose quelques questions puis on propose une estimation claire.",
    },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynexstudio, je souhaite discuter de mon projet.');
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
    this.injectOrgJsonLd();
    this.injectBreadcrumbJsonLd();
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

  private injectOrgJsonLd(): void {
    const id = 'jsonld-vynex-org';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.companyName,
      url: this.siteUrl,
      description: this.metaDescription,
      areaServed: 'MA',
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private injectBreadcrumbJsonLd(): void {
    const id = 'jsonld-vynex-breadcrumb-about';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'À propos', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-about';
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
}
