import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type ServiceCard = {
  title: string;
  desc: string;
  icon: string;
  link: string;
  badge?: string;
};

type ProjectCard = {
  title: string;
  desc: string;
  tag: string;
  link: string;
  metric?: string;
};

type StepItem = { t: string; d: string };
type FaqItem = { q: string; a: string };

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'],
})
export class HomeHeroComponent implements OnInit {
  companyName = 'VynexStudio';

  // ✅ domaine réel
  siteUrl = 'https://vynexstudio.com';
  canonicalUrl = `${this.siteUrl}/`;

  // ✅ Image qui apparait quand tu partages le lien
  // Mets ce fichier en ligne: https://vynexstudio.com/og-cover.jpg
  ogImageUrl = `${this.siteUrl}/VynexStudio _ AgenceWebauMaroc.png`;

  // WhatsApp
  whatsappNumber = '+212644071444';
  trackWhatsapp(source: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'lead',
        event_label: source,
      });
    }
  }
  

  metaTitle =
    'VynexStudio | Agence Web & Développement Logiciel au Maroc (Sites, Apps, SEO, Ads)';
  metaDescription =
    "VynexStudio crée des sites vitrines, e-commerce, plateformes web, logiciels de gestion et applications mobiles au Maroc. SEO & Google Ads pour générer des clients. Devis gratuit.";

  steps: StepItem[] = [
    { t: 'Cadrage', d: 'Objectifs, cible, contenu, plan & devis.' },
    { t: 'Design & UX', d: 'Maquette pro orientée conversion.' },
    { t: 'Développement', d: 'Performance, sécurité, responsive.' },
    { t: 'SEO & Tracking', d: 'Balises, vitesse, events, conversions.' },
    { t: 'Livraison', d: 'Mise en ligne + checklist + formation rapide.' },
    { t: 'Maintenance', d: 'Support, évolutions, optimisation continue.' },
  ];

  services: ServiceCard[] = [
    {
      title: 'Site vitrine',
      desc: 'Un site rapide, crédible et optimisé SEO pour convertir.',
      icon: '🌐',
      link: '/services/site-vitrine/',
      badge: 'Recommandé',
    },
    {
      title: 'E-commerce',
      desc: 'Boutique en ligne performante (paiement, catalogue, tracking).',
      icon: '🛒',
      link: '/services/site-ecommerce/',
    },
    {
      title: 'Plateforme web',
      desc: 'Applications web sur mesure (dashboard, espace client, etc.).',
      icon: '🧩',
      link: '/services/plateforme-web/',
    },
    {
      title: 'Logiciel de gestion',
      desc: 'ERP/CRM sur mesure pour automatiser et gagner du temps.',
      icon: '📊',
      link: '/services/logiciel-gestion/',
    },
    {
      title: 'SEO (référencement naturel)',
      desc: 'Structure, contenu, performance : vous remontez sur Google.',
      icon: '📈',
      link: '/services/seo/',
    },
    {
      title: 'Campagne publicitaire',
      desc: 'Campagnes rentables orientées leads, suivi & optimisation.',
      icon: '🎯',
      link: '/services/google-ads/',
    },
  ];

  projects: ProjectCard[] = [
    {
      title: 'Site vitrine premium',
      desc: 'Design moderne + SEO + formulaire + WhatsApp.',
      tag: 'Vitrine',
      link: '/realisations/',
      metric: 'Rapide',
    },
    {
      title: 'E-commerce conversion',
      desc: 'Tunnel optimisé + tracking + pages rapides.',
      tag: 'E-commerce',
      link: '/realisations/',
      metric: 'Conversion',
    },
    {
      title: 'Dashboard de gestion',
      desc: 'Rôles, statistiques, automatisations, exports.',
      tag: 'Logiciel',
      link: '/realisations/',
      metric: 'Sur-mesure',
    },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Combien de temps pour créer un site ?',
      a: 'Selon le projet : vitrine (1–2 semaines), e-commerce (2–4 semaines), plateforme/logiciel (sur étude).',
    },
    {
      q: 'Le SEO est-il inclus ?',
      a: 'Oui : base SEO (structure, performance, balises, indexation). Une prestation SEO mensuelle est possible pour accélérer les résultats.',
    },
    {
      q: 'Travaillez-vous partout au Maroc ?',
      a: 'Oui. Nous travaillons à distance (Marrakech, Casablanca, Rabat, Agadir…) avec des points de validation clairs.',
    },
    {
      q: 'Proposez-vous maintenance et support ?',
      a: 'Oui : monitoring, mises à jour, sécurité, améliorations et accompagnement.',
    },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent(
      `Bonjour Vynexstudio, je souhaite un devis pour un projet (site / app / logiciel / SEO / Ads).`
    );
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
    this.injectJsonLd();
    this.injectFaqJsonLd();
  }

  private applySeo(): void {
    // Title + Meta base
    this.title.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // Open Graph (Facebook / WhatsApp / LinkedIn)
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.companyName });
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({
      property: 'og:description',
      content: this.metaDescription,
    });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });

    // ✅ IMAGE PREVIEW
    this.meta.updateTag({ property: 'og:image', content: this.ogImageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: 'VynexStudio' });

    // Twitter card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.metaTitle });
    this.meta.updateTag({
      name: 'twitter:description',
      content: this.metaDescription,
    });
    this.meta.updateTag({ name: 'twitter:image', content: this.ogImageUrl });
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

  private injectJsonLd(): void {
    const existing = this.doc.getElementById('jsonld-vynex-home');
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${this.siteUrl}#organization`,
          name: this.companyName,
          url: this.siteUrl,
          // logo: `${this.siteUrl}/logo.webp`,
        },
        {
          '@type': 'WebSite',
          '@id': `${this.siteUrl}#website`,
          url: this.siteUrl,
          name: this.companyName,
          publisher: { '@id': `${this.siteUrl}#organization` },
        },
        {
          '@type': 'WebPage',
          '@id': `${this.canonicalUrl}#webpage`,
          url: this.canonicalUrl,
          name: this.metaTitle,
          description: this.metaDescription,
          isPartOf: { '@id': `${this.siteUrl}#website` },
          about: { '@id': `${this.siteUrl}#organization` },
        },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = 'jsonld-vynex-home';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.doc.head.appendChild(script);
  }

  private injectFaqJsonLd(): void {
    const existing = this.doc.getElementById('jsonld-vynex-faq');
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
    script.id = 'jsonld-vynex-faq';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqJsonLd);
    this.doc.head.appendChild(script);
  }
}
