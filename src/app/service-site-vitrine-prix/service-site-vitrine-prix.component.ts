// service-site-vitrine-prix.component.ts
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type Pack = { title: string; price: number; who: string; includes: string[]; featured?: boolean };
type Feature = { title: string; desc: string };
type TableRow = { need: string; for: string; price: string };
type FaqItem = { q: string; a: string };

@Component({
  selector: 'app-service-site-vitrine-prix',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-site-vitrine-prix.component.html',
  styleUrls: ['./service-site-vitrine-prix.component.css'],
})
export class ServiceSiteVitrinePrixComponent implements OnInit {
  companyName = 'Vynexstudio';

  siteUrl = 'https://vynexstudio.com';
  whatsappNumber = '+212644071444';

  slug = '/services/site-vitrine/prix/';
  canonicalUrl = this.siteUrl + this.slug;

  // ✅ SEO
  metaTitle = 'Prix site web vitrine au Maroc | Tarifs & repères de budget | Vynexstudio';
  metaDescription =
    "Quel est le prix d’un site web vitrine au Maroc ? Repères de tarifs, packs clairs et facteurs qui influencent le budget : pages, contenu, SEO, tracking. Devis rapide.";

  // HERO
  heroTitle = 'Prix site web vitrine au Maroc';
  heroSubtitle =
    "Le prix d’un site web vitrine au Maroc commence généralement à partir de 1500 DH pour un site professionnel prêt à présenter votre activité. Le budget varie selon le nombre de pages, le contenu, les fonctionnalités et l’optimisation SEO.";

  bullets: string[] = [
    'À partir de 1700 DH (repères) selon pages & options',
    'Site mobile + rapide (performance)',
    'WhatsApp + formulaire (génération de leads)',
    'Base SEO technique (indexation, titles, sitemap) + tracking en option',
  ];

  fromPrice = 1500;

  packs: Pack[] = [
    {
      title: 'Site vitrine Essentiel',
      price: 1500,
      who: 'Pour démarrer avec un site propre et pro',
      includes: [
        '3–5 pages (Accueil, Services, À propos, Contact)',
        'Design moderne + responsive',
        'Formulaire + WhatsApp',
        'Base SEO technique + performance',
      ],
      featured: true,
    },
    {
      title: 'Site vitrine Pro',
      price: 2500,
      who: 'Pour une image premium + plus de contenu',
      includes: [
        '5–8 pages + sections avancées',
        'Optimisation conversion (CTA, preuve, structure)',
        'SEO amélioré (maillage interne, contenu mieux structuré)',
        'Tracking leads (WhatsApp/formulaire) en option',
      ],
    },
    {
      title: 'Site vitrine Business',
      price: 3500,
      who: 'Pour les entreprises qui veulent plus de performance',
      includes: [
        'Pages + contenu optimisé (services détaillés)',
        'SEO local (ville) si besoin',
        'Tracking complet (GA4 / events) en option',
        'Accompagnement & mise en ligne',
      ],
    },
  ];

  factors: Feature[] = [
    {
      title: 'Nombre de pages',
      desc: 'Plus il y a de pages (services détaillés, pages ville…), plus le budget augmente.',
    },
    {
      title: 'Contenu',
      desc: 'Rédaction, photos, traduction FR/EN : le contenu impacte fortement le prix.',
    },
    {
      title: 'Design & maquette',
      desc: 'Un design plus premium ou une maquette sur mesure demande plus de temps.',
    },
    {
      title: 'Fonctionnalités',
      desc: 'Blog, réservation, formulaires avancés, multi-langues… ajoutent de la complexité.',
    },
    {
      title: 'SEO & structure',
      desc: 'Une structure SEO plus poussée (maillage, pages ciblées) augmente la valeur et le temps.',
    },
    {
      title: 'Tracking & analytics',
      desc: 'Suivi des leads (WhatsApp/formulaire/appels) pour mesurer et optimiser la conversion.',
    },
  ];

  table: TableRow[] = [
    { need: 'Présence simple', for: 'Indépendant, activité locale, contact WhatsApp', price: '≈ 1500 DH' },
    { need: 'Image professionnelle', for: 'PME, cabinet, artisan, services', price: '≈ 2500 DH' },
    { need: 'Croissance & SEO', for: 'Plus de pages + SEO local + tracking', price: '≈ 3500 DH+' },
  ];

  faqs: FaqItem[] = [
    {
      q: 'Quel est le prix minimum d’un site vitrine ?',
      a: 'En général à partir de 1500 DH pour un site vitrine professionnel (repères). Le prix exact dépend des pages et options.',
    },
    {
      q: 'Pourquoi les prix varient d’un site à l’autre ?',
      a: 'Le budget dépend du nombre de pages, du contenu, du design, des fonctionnalités et du niveau SEO/tracking.',
    },
    {
      q: 'Est-ce que le SEO est inclus ?',
      a: 'La base SEO technique est incluse (structure, titles, sitemap, indexation). Un SEO mensuel est possible pour accélérer.',
    },
    {
      q: 'Est-ce que WhatsApp et le formulaire sont inclus ?',
      a: 'Oui : WhatsApp + formulaire. Le tracking des conversions peut être activé pour mesurer les leads.',
    },
    {
      q: 'Quels sont les délais ?',
      a: 'Souvent 7 à 14 jours selon validations et contenu.',
    },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je veux connaître le prix d’un site vitrine.');
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

    // petit bonus
    this.meta.updateTag({ name: 'theme-color', content: '#0b1220' });
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
    const id = 'jsonld-vynex-service-vitrine-prix';
    this.doc.getElementById(id)?.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Prix site vitrine',
      provider: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      areaServed: 'MA',
      serviceType: 'Website design / Site vitrine',
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
    const id = 'jsonld-vynex-faq-vitrine-prix';
    this.doc.getElementById(id)?.remove();

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
    const id = 'jsonld-vynex-breadcrumb-vitrine-prix';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services' },
        { '@type': 'ListItem', position: 3, name: 'Site vitrine', item: this.siteUrl + '/services/site-vitrine' },
        { '@type': 'ListItem', position: 4, name: 'Prix', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
