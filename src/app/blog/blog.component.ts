import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;         // ex: "Janvier 2026"
  readTime: string;     // ex: "8 min"
  cover: string;        // ex: "/blog/seo-marrakech.webp"
  coverAlt: string;

  // SEO (optionnel)
  seoTitle?: string;
  seoDescription?: string;
  datePublishedISO?: string; // ex "2026-01-10"
  dateModifiedISO?: string;  // ex "2026-01-12"
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton domaine
  siteUrl = 'https://vynexstudio.com';
  slug = '/blog/';
  canonicalUrl = this.siteUrl + this.slug;


  private stripTrailingSlash(path: string): string {
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
    return path;
  }
  
  nav(pathWithSlash: string, ev: Event) {
    ev.preventDefault();
    // route interne Angular (souvent sans slash)
    this.router.navigateByUrl(this.stripTrailingSlash(pathWithSlash));
  }

  // ⚠️ Coordonnées (pour LocalBusiness JSON-LD)
  city = 'Casablanca';
  contactPhone = '+212644071444';
  contactEmail = 'contact@vynex.ma';

  // SEO
  metaTitle = 'Blog SEO & Conversion | Conseils marketing & web | Vynexstudio';
  metaDescription =
    'Articles pratiques sur SEO, Google Ads, conversion, landing pages et sites web au Maroc. Conseils concrets pour attirer plus de clients et générer plus de leads.';

  heroTitle = 'Blog';
  heroSubtitle = 'SEO, conversion et conseils pratiques pour votre business.';

  categories: string[] = ['Tous', 'SEO', 'Google Ads', 'Conversion', 'Site web', 'Tracking'];
  selectedCategory = 'Tous';



  whatsappLink =
  'https://wa.me/212644071444?text=' +
  encodeURIComponent('Bonjour VynexStudio, je veux un audit SEO / Ads pour générer plus de clients. Mon site : ');

  posts: BlogPost[] = [
    {
      title: 'SEO au Maroc : comment être visible sur Google en 2026',
      slug: 'seo-maroc-visibilite-google-2026',
      excerpt:
        'Les bases + les techniques qui marchent (structure, pages services, FAQ, schema, vitesse, contenu).',
      category: 'SEO',
      date: 'Janvier 2026',
      readTime: '8 min',
      cover: '/seo.webp',
      coverAlt: 'SEO au Maroc : visibilité sur Google',
      seoTitle: 'SEO au Maroc (2026) : guide complet pour être visible sur Google',
      seoDescription:
        'Guide SEO complet : structure multi-pages, contenu, optimisation technique, performance et stratégies pour générer des clients via Google.',
      datePublishedISO: '2026-01-15',
      dateModifiedISO: '2026-01-15',
    },
    {
      title: 'Pourquoi votre site ne génère pas de clients',
      slug: 'site-ne-genere-pas-clients-correction',
      excerpt:
        "Votre site reçoit des visites mais aucune demande ? Découvrez les vraies raisons et les optimisations concrètes pour transformer les visiteurs en contacts.",
      category: 'Conversion',
      date: 'Janvier 2026',
      readTime: '9 min',
      cover: '/siteweb.webp',
      coverAlt: 'Site web qui ne génère pas de clients',
      seoTitle: 'Pourquoi votre site ne génère pas de clients (solutions concrètes)',
      seoDescription:
        "Un site peut être beau et inefficace. Analyse des erreurs fréquentes et des leviers qui transforment un site passif en générateur de leads.",
      datePublishedISO: '2026-01-18',
      dateModifiedISO: '2026-01-18',
    },
    
    {
      title: 'Site web professionnel : ce qui rassure un client (et déclenche le contact)',
      slug: 'site-web-professionnel-confiance-client',
      excerpt:
        "Un prospect décide très vite s’il vous fait confiance. Voici les signaux concrets qui rendent votre site crédible et augmentent les demandes (appel, WhatsApp, devis).",
      category: 'Site web',
      date: 'Janvier 2026',
      readTime: '8 min',
      cover: '/proweb.webp',
      coverAlt: 'Site web professionnel qui inspire confiance et génère des demandes',
      seoTitle: 'Site web professionnel : les signaux de confiance qui augmentent les demandes',
      seoDescription:
        "Structure, preuves, messages, vitesse, contact : les éléments qui rassurent un prospect et améliorent le taux de prise de contact sur votre site.",
      datePublishedISO: '2026-01-20',
      dateModifiedISO: '2026-01-20',
    },
    
    
  ];

  get filteredPosts(): BlogPost[] {
    if (this.selectedCategory === 'Tous') return this.posts;
    return this.posts.filter((p) => p.category === this.selectedCategory);
  }

  setCategory(c: string) {
    this.selectedCategory = c;
    // ✅ bonus SEO UX : update JSON-LD ItemList selon filtres
    this.injectBlogJsonLd();
  }

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.applySeo();
    this.setCanonical();

    // JSON-LD
    this.injectLocalBusinessJsonLd();  // optionnel mais fort pour crédibilité
    this.injectBlogJsonLd();           // Blog/CollectionPage + ItemList
    this.injectFaqJsonLd();            // FAQPage pour page Blog
    this.injectBreadcrumbJsonLd();     // Breadcrumb
  }

  private applySeo(): void {
    this.title.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    const ogImage = `${this.siteUrl}/seo.webp`;
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    // OpenGraph
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.companyName });
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.metaTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.metaDescription });

    // ✅ bonus
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

  // ✅ LocalBusiness (même logique que page contact)
  private injectLocalBusinessJsonLd(): void {
    const id = 'jsonld-vynex-localbusiness';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: this.companyName,
      url: this.siteUrl,
      telephone: this.contactPhone,
      email: this.contactEmail,
      address: {
        '@type': 'PostalAddress',
        addressLocality: this.city,
        addressCountry: 'MA',
      },
      areaServed: 'MA',
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.doc.head.appendChild(script);
  }

  // ✅ Blog/CollectionPage + ItemList
  private injectBlogJsonLd(): void {
    const id = 'jsonld-vynex-blog';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const items = this.filteredPosts.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${this.siteUrl}/blog/${p.slug}/`,
      item: {
        '@type': 'BlogPosting',
        headline: p.seoTitle ?? p.title,
        description: p.seoDescription ?? p.excerpt,
        image: p.cover ? this.siteUrl + p.cover : undefined,
        datePublished: p.datePublishedISO,
        dateModified: p.dateModifiedISO ?? p.datePublishedISO,
        author: {
          '@type': 'Organization',
          name: this.companyName,
          url: this.siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: this.companyName,
          url: this.siteUrl,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${this.siteUrl}/blog/${p.slug}/`,
        },
      },
    }));

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${this.companyName} Blog`,
      url: this.canonicalUrl,
      description: this.metaDescription,
      publisher: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      blogPost: this.filteredPosts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.seoTitle ?? p.title,
        url: `${this.siteUrl}/blog/${p.slug}/`,
        datePublished: p.datePublishedISO,
        dateModified: p.dateModifiedISO ?? p.datePublishedISO,
      })),
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items,
      },
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.doc.head.appendChild(script);
  }

  // ✅ FAQ Blog
  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-blog';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const faqs = [
      {
        q: 'À quoi sert le blog Vynexstudio ?',
        a: "Partager des conseils pratiques pour attirer plus de clients : SEO, Ads, conversion et stratégie digitale.",
      },
      {
        q: 'Publiez-vous des guides SEO spécifiques au Maroc ?',
        a: "Oui. On adapte les stratégies SEO aux marchés locaux (ville, requêtes, intention, services).",
      },
      {
        q: 'Puis-je vous confier mon SEO ou Google Ads ?',
        a: "Oui. Nous gérons des campagnes orientées ROI avec tracking conversions et reporting clair.",
      },
      {
        q: 'Comment choisir entre SEO et Google Ads ?',
        a: "Ads = résultats rapides (immédiat). SEO = acquisition durable (long terme). Le meilleur combo : Ads + SEO.",
      },
    ];

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
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

  // ✅ BreadcrumbList
  private injectBreadcrumbJsonLd(): void {
    const id = 'jsonld-vynex-breadcrumb-blog';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
