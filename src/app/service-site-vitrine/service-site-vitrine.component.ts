import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

type FaqItem = { q: string; a: string };
type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type Pack = { title: string;price: number; priceHint: string; who: string; includes: string[] };

@Component({
  selector: 'app-service-site-vitrine',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-site-vitrine.component.html',
  styleUrls: ['./service-site-vitrine.component.css'],
})
export class ServiceSiteVitrineComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton vrai domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ Mets ton WhatsApp
  whatsappNumber = '+212644071444';

  // Page info
  slug = '/services/site-vitrine/';
  canonicalUrl = this.siteUrl + this.slug;

  // SEO
  metaTitle = 'Création de site vitrine au Maroc | Vynex (Design, SEO, Conversion)';
  metaDescription =
    "Vynex crée des sites vitrines modernes au Maroc : design premium, performance, SEO, formulaire & WhatsApp, tracking. Idéal pour générer des clients. Devis gratuit.";

  // Page content
  heroTitle = 'Création de site vitrine au Maroc';
  heroSubtitle =
    "Un site rapide, crédible et optimisé SEO pour transformer vos visiteurs en clients. Design moderne, CTA, formulaire, WhatsApp et tracking.";

  bullets: string[] = [
    'Design moderne orienté confiance',
    'SEO technique inclus (balises, performance, indexation)',
    'Formulaire + WhatsApp + tracking conversion',
    'Responsive (mobile/desktop) + vitesse',
  ];

  features: Feature[] = [
    { title: 'Design qui inspire confiance', desc: "Une mise en page claire, des preuves (avis, réalisations), et un message qui convertit." },
    { title: 'SEO dès le départ', desc: "Structure Hn, meta, performance, maillage interne vers vos pages services et blog." },
    { title: 'Vitesse & sécurité', desc: "Optimisation Core Web Vitals, bonnes pratiques et configuration propre." },
    { title: 'Conversion (leads)', desc: "CTA visibles, WhatsApp, formulaire, événements de conversion (GA/Clarity/Pixel si besoin)." },
    { title: 'Contenu optimisé', desc: "Textes orientés clients, bénéfices, FAQ, et sections adaptées à votre activité." },
    { title: 'Support & évolutions', desc: "Maintenance, ajouts de pages, améliorations SEO, et accompagnement." },
  ];

  steps: Step[] = [
    { n: '1', title: 'Cadrage', desc: 'Objectifs, cible, pages, contenu, devis & planning.' },
    { n: '2', title: 'Maquette', desc: 'Design modern “trust”, validation rapide.' },
    { n: '3', title: 'Développement', desc: 'Intégration responsive + performance.' },
    { n: '4', title: 'SEO & tracking', desc: 'Balises, indexation, events, conversions.' },
    { n: '5', title: 'Mise en ligne', desc: 'Checklist + tests + formation courte.' },
  ];

  packs: Pack[] = [
    {
      title: 'Vitrine Essentiel',
      price: 1200,
      priceHint: 'Idéal pour démarrer',
      who: 'Indépendants & petites entreprises',
      includes: [
        '1 page accueil complète',
        'WhatsApp',
        
        'Mise en ligne + support initial',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
    {
      title: 'Vitrine Pro',
      price: 1700,
      priceHint: 'Le meilleur pour convertir',
      who: 'PME & services (lead generation)',
      includes: [
        'Accueil + 2–4 pages',
        'WhatsApp + 1 formulaire',
        'SEO de base',
        'Optimisation vitesse + sécurité',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
    {
      title: 'Vitrine SEO+',
      price: 3500,
      priceHint: 'Pour viser Google',
      who: 'Entreprises qui veulent du trafic',
      includes: [
        'Structure multi-pages SEO (1 service = 1 page)',
        'WhatsApp +formulaires',
        'FAQ schema + maillage interne',
        'Pages locales (Marrakech/Casa…) si besoin',
        'Optimisation vitesse + sécurité',
        'Plan éditorial blog (option)',
        'Nom de domaine inclus (1 an)',
        'Hébergement inclus (1 an)',
      ],
    },
  ];

  faqs: FaqItem[] = [
    { q: 'Combien coûte un site vitrine ?', a: "Ça dépend du nombre de pages, du design et du niveau SEO. On vous envoie un devis clair après un court échange." },
    { q: 'En combien de temps c’est livré ?', a: "En général 1 à 2 semaines pour un site vitrine, selon la réactivité sur les contenus/validations." },
    { q: 'Le SEO est inclus ?', a: "Oui : SEO technique (structure, meta, performance, indexation). Une prestation mensuelle est possible pour accélérer les résultats." },
    { q: 'Est-ce que vous gérez l’hébergement ?', a: "Oui, on peut s’occuper de l’hébergement, du domaine, SSL, emails pro et maintenance." },
    { q: 'Puis-je ajouter des pages plus tard ?', a: "Oui, le site est évolutif : nouvelles pages, blog, formulaires, etc." },
  ];

  related = [
    { title: 'Site e-commerce', link: '/services/site-ecommerce/' },
    { title: 'SEO (référencement naturel)', link: '/services/seo' },
    { title: 'Google Ads', link: '/googleAds/' },
    { title: 'Plateforme web', link: '/services/plateforme-web/' },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis pour un site vitrine.');
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
    this.injectBreadcrumbJsonLd();
  }

  private applySeo(): void {
    this.title.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // OG / Twitter
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

  private injectJsonLd(): void {
    const id = 'jsonld-vynex-service-vitrine';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Création de site vitrine',
      provider: {
        '@type': 'Organization',
        name: this.companyName,
        url: this.siteUrl,
      },
      areaServed: 'MA',
      serviceType: 'Web Design / Développement Web',
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
    const id = 'jsonld-vynex-faq-vitrine';
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
    const id = 'jsonld-vynex-breadcrumb-vitrine';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: this.siteUrl + '/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: this.siteUrl + '/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Site vitrine',
          item: this.canonicalUrl,
        },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
