import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';

type FaqItem = { q: string; a: string };

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;        // ex: "Janvier 2026"
  readTime: string;    // ex: "8 min"
  cover: string;       // ex: "/blog/airbnb-revenus.webp"
  contentHtml: string; // HTML complet de l’article
  faq?: FaqItem[];

  // SEO (optionnel mais recommandé)
  seoTitle?: string;
  seoDescription?: string;
  coverAlt?: string;
  datePublishedISO?: string; // ex: "2026-01-10"
  dateModifiedISO?: string;  // ex: "2026-01-12"
};

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post-component.component.html',
  styleUrls: ['./blog-post-component.component.css'],
})
export class BlogPostComponent implements OnInit, OnDestroy {
  companyName = 'Vynexstudio';

  // ⚠️ Mets ton domaine (important pour canonical + og:image)
  siteUrl = 'https://vynexstudio.com';

  post: Post | null = null;
  safeHtml: SafeHtml = '';

  // Exemple: remplace par ta source réelle (data local, service, API, etc.)
  posts: Post[] = [
    {
      title: 'SEO au Maroc : comment attirer des clients via Google en 2026',
      slug: 'seo-maroc-visibilite-google-2026',
      excerpt:
        'Comment structurer un site, optimiser la technique et le contenu pour capter des recherches qualifiées et transformer Google en source de clients.',
      category: 'SEO',
      date: 'Janvier 2026',
      readTime: '8 min',
      cover: '/seo.webp',
      coverAlt: 'Référencement naturel au Maroc et visibilité Google',
    
      seoTitle: 'SEO au Maroc en 2026 : stratégie concrète pour attirer des clients',
      seoDescription:
        'Stratégie SEO adaptée au marché marocain : structure de site, optimisation technique, contenu orienté intention et suivi des conversions pour générer des clients via Google.',
    
      datePublishedISO: '2026-01-15',
      dateModifiedISO: '2026-01-15',
    
      contentHtml: `
    <h2>Google est devenu le premier point de contact avec vos futurs clients</h2>
    <p>
    Avant de vous appeler ou de vous écrire, un client potentiel cherche.
    Il compare, il observe et il choisit les entreprises qui apparaissent
    clairement sur Google avec un message rassurant.
    </p>
    
    <h2>Pourquoi le référencement naturel reste un levier stratégique</h2>
    <p>
    Le référencement naturel permet de capter une demande existante.
    Contrairement à la publicité, il ne dépend pas d’un budget quotidien
    et construit une visibilité stable dans le temps.
    </p>
    <p>
    Un site bien positionné agit comme un commercial disponible en permanence,
    capable de générer des contacts qualifiés sans interruption.
    </p>
    
    <h2>1. Une structure pensée pour vos services et vos clients</h2>
    <p>
    La base d’un bon référencement repose sur une structure claire.
    Chaque service doit répondre à un besoin précis et disposer
    d’une page dédiée, compréhensible pour l’utilisateur comme pour Google.
    </p>
    <ul>
      <li>Pages services distinctes et ciblées</li>
      <li>Navigation simple et logique</li>
      <li>Maillage interne orienté conversion</li>
    </ul>
    
    <h2>2. Une optimisation technique fiable et durable</h2>
    <p>
    Un site lent ou mal indexé limite fortement sa visibilité.
    La performance technique est un prérequis, pas un bonus.
    </p>
    <ul>
      <li>Chargement rapide sur mobile et desktop</li>
      <li>Indexation maîtrisée des pages utiles</li>
      <li>Structure claire pour les moteurs de recherche</li>
    </ul>
    
    <h2>3. Du contenu aligné sur l’intention de recherche</h2>
    <p>
    Un bon contenu ne cherche pas à plaire à Google,
    mais à répondre précisément à ce que recherche un utilisateur.
    C’est cette adéquation qui permet de générer des demandes réelles.
    </p>
    <p>
    Le contenu doit informer, rassurer et orienter vers l’action.
    </p>
    
    <h2>4. La crédibilité comme levier de visibilité</h2>
    <p>
    Google met en avant les entreprises perçues comme fiables.
    La clarté du message, la cohérence des informations
    et la présence locale jouent un rôle déterminant.
    </p>
    <ul>
      <li>Informations claires et cohérentes</li>
      <li>Preuves de sérieux et d’expertise</li>
      <li>Présence locale structurée</li>
    </ul>
    
    <h2>5. Mesurer les résultats qui comptent vraiment</h2>
    <p>
    Les positions ne sont qu’un indicateur.
    Ce qui importe réellement, ce sont les actions :
    appels, formulaires, messages.
    </p>
    <p>
    Un suivi précis permet d’optimiser les pages
    qui génèrent des clients et d’améliorer continuellement la performance.
    </p>
    
    <h2>SEO et acquisition : une approche complémentaire</h2>
    <p>
    Le référencement naturel fonctionne encore mieux
    lorsqu’il s’intègre dans une stratégie globale.
    SEO et publicité peuvent se renforcer pour accélérer les résultats
    tout en sécurisant la croissance.
    </p>
    
    <h2>Conclusion</h2>
    <p>
    Être visible sur Google ne repose pas sur des astuces,
    mais sur une méthode structurée.
    Un site bien optimisé devient un véritable outil d’acquisition
    et non une simple présence en ligne.
    </p>
    `,
    
      faq: [
        {
          q: 'Combien de temps faut-il pour obtenir des résultats en SEO ?',
          a: 'Les premiers résultats apparaissent souvent en quelques semaines, mais une visibilité stable et rentable se construit sur plusieurs mois selon la concurrence.'
        },
        {
          q: 'Le SEO est-il suffisant pour générer des clients ?',
          a: 'Il est très efficace sur le long terme, surtout lorsqu’il est combiné à une bonne conversion et, si nécessaire, à des campagnes publicitaires.'
        }
      ],
    },    
    {
      title: 'Pourquoi votre site ne génère pas de clients (et comment corriger ça)',
      slug: 'site-ne-genere-pas-clients-correction',
      excerpt:
        "Beaucoup de sites sont beaux mais inutiles. Découvrez pourquoi votre site ne génère aucune demande et les actions concrètes pour transformer les visites en contacts.",
      category: 'Conversion',
      date: 'Janvier 2026',
      readTime: '9 min',
      cover: '/siteweb.webp',
      coverAlt: 'Site web qui ne génère pas de clients',
      seoTitle: 'Pourquoi votre site ne génère pas de clients (solutions concrètes)',
      seoDescription:
        "Votre site reçoit des visites mais aucune demande ? Voici les vraies raisons et les optimisations qui transforment un site passif en machine à leads.",
      datePublishedISO: '2026-01-18',
      dateModifiedISO: '2026-01-18',
      contentHtml: `
        <h2>Un site peut être beau et totalement inefficace</h2>
        <p>
          Avoir un site web ne garantit pas d’avoir des clients. Beaucoup d’entreprises investissent dans un design
          moderne, mais oublient l’essentiel : guider le visiteur vers une action claire.
        </p>
    
        <h2>Le vrai problème : personne ne comprend quoi faire</h2>
        <p>
          Quand un visiteur arrive sur votre site, il se pose inconsciemment trois questions :
        </p>
        <ul>
          <li>Suis-je au bon endroit ?</li>
          <li>Puis-je vous faire confiance ?</li>
          <li>Quelle est la prochaine étape ?</li>
        </ul>
    
        <p>
          Si votre site ne répond pas clairement à ces points, le visiteur repart. Sans appel. Sans message.
        </p>
    
        <h2>Les erreurs qui bloquent la conversion</h2>
        <ul>
          <li>Message trop vague ou trop technique</li>
          <li>Aucun appel à l’action visible</li>
          <li>Pages trop longues sans structure</li>
          <li>Absence de preuves (avis, réalisations, chiffres)</li>
          <li>Temps de chargement lent</li>
        </ul>
    
        <h2>Ce qui transforme réellement un visiteur en client</h2>
        <p>
          Un site efficace n’essaie pas de tout dire. Il guide. Chaque page doit pousser vers une action :
          formulaire, appel ou WhatsApp.
        </p>
    
        <ul>
          <li>Un message principal orienté bénéfice client</li>
          <li>Une hiérarchie claire (titres, sections, CTA)</li>
          <li>Des points de réassurance visibles</li>
          <li>Un moyen de contact accessible à tout moment</li>
        </ul>
    
        <h2>Conclusion : un site doit travailler pour vous</h2>
        <p>
          Votre site est souvent le premier contact avec vos prospects. S’il n’incite pas à l’action,
          il ne remplit pas son rôle. Optimiser la conversion n’est pas une option, c’est une nécessité.
        </p>
      `,
      faq: [
        {
          q: 'Pourquoi mon site reçoit des visites mais aucune demande ?',
          a: 'Parce que le message n’est pas clair, le parcours utilisateur est confus ou l’appel à l’action est absent.'
        },
        {
          q: 'Faut-il refaire tout le site pour améliorer la conversion ?',
          a: 'Pas forcément. Souvent, une meilleure structure, un message clair et des CTA visibles suffisent.'
        },
        {
          q: 'WhatsApp ou formulaire : que choisir ?',
          a: 'Les deux. Le formulaire capte les leads structurés, WhatsApp facilite le contact rapide.'
        }
      ]
    },
    {
      title: 'Site web professionnel : ce qui rassure vraiment un client',
      slug: 'site-web-professionnel-confiance-client',
      excerpt:
        "Un client décide en quelques secondes s’il vous contacte ou non. Voici les éléments qui rendent un site crédible et rassurant.",
      category: 'Site web',
      date: 'Janvier 2026',
      readTime: '8 min',
      cover: '/proweb.webp',
      coverAlt: 'Site web professionnel et crédible',
      seoTitle: 'Site web professionnel : les éléments qui inspirent confiance',
      seoDescription:
        "Découvrez ce qui rend un site crédible aux yeux des clients : structure, design, contenu et signaux de confiance essentiels.",
      datePublishedISO: '2026-01-20',
      dateModifiedISO: '2026-01-20',
      contentHtml: `
        <h2>La confiance se joue en quelques secondes</h2>
        <p>
          Lorsqu’un visiteur arrive sur votre site, il ne lit pas tout. Il observe. En quelques secondes,
          il décide s’il reste ou s’il ferme l’onglet.
        </p>
    
        <h2>Un design propre n’est pas suffisant</h2>
        <p>
          Un site professionnel ne se limite pas à un beau design. La crédibilité vient d’un ensemble
          de signaux visibles et cohérents.
        </p>
    
        <h2>Les éléments qui inspirent confiance</h2>
        <ul>
          <li>Un message clair sur ce que vous faites</li>
          <li>Une présentation humaine (équipe, approche, méthode)</li>
          <li>Des preuves concrètes (projets, chiffres, retours clients)</li>
          <li>Des coordonnées visibles et accessibles</li>
          <li>Un site rapide et bien structuré</li>
        </ul>
    
        <h2>Pourquoi la crédibilité influence directement les conversions</h2>
        <p>
          Un prospect hésitant ne vous contactera jamais s’il doute de votre sérieux.
          La confiance réduit le risque perçu et facilite la prise de décision.
        </p>
    
        <h2>Conclusion : crédibilité = opportunités</h2>
        <p>
          Un site professionnel ne vend pas à la place de votre équipe,
          mais il prépare le terrain. Plus votre site inspire confiance,
          plus vos prospects passent à l’action.
        </p>
      `,
      faq: [
        {
          q: 'Qu’est-ce qui rend un site vraiment professionnel ?',
          a: 'La clarté du message, la structure, la vitesse et les preuves visibles de sérieux.'
        },
        {
          q: 'Faut-il afficher ses coordonnées sur toutes les pages ?',
          a: 'Oui. Cela rassure et facilite le passage à l’action.'
        },
        {
          q: 'Un site professionnel suffit-il pour obtenir des clients ?',
          a: 'Il est indispensable, mais il doit être combiné à une stratégie d’acquisition.'
        }
      ]
    }
    
    
  ];

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.loadPost(slug);
    });
  }

  ngOnDestroy(): void {
    // Nettoie les JSON-LD quand tu quittes la page (utile en SPA)
    this.removeJsonLd('jsonld-vynex-article');
    this.removeJsonLd('jsonld-vynex-breadcrumb-blogpost');
    this.removeJsonLd('jsonld-vynex-faq-blogpost');
  }

  private loadPost(slug: string | null): void {
    const found = this.posts.find((p) => p.slug === slug) || null;
    this.post = found;

    if (!this.post) {
      this.applyNotFoundSeo(slug ?? '');
      return;
    }

    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.post.contentHtml);

    // SEO + JSON-LD
    this.applySeoForPost(this.post);
    this.setCanonical(this.getCanonicalUrl(this.post.slug));
    this.injectArticleJsonLd(this.post);
    this.injectBreadcrumbJsonLd(this.post);
    this.injectFaqJsonLd(this.post);
  }

  // ---------- SEO META ----------

  private applySeoForPost(post: Post): void {
    const title = post.seoTitle ?? post.title;
    const desc = post.seoDescription ?? post.excerpt;
  
    const pageUrl = this.getCanonicalUrl(post.slug);
    const ogImg = this.absoluteUrl(post.cover);
  
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  
    // OpenGraph
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: this.companyName });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
  
    this.meta.updateTag({ property: 'og:image', content: ogImg });
    this.meta.updateTag({ property: 'og:image:alt', content: post.coverAlt ?? title });
  
    // Mets ces 2 lignes seulement si tes images sont bien en 1200x630
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  
    // Article dates
    if (post.datePublishedISO) {
      this.meta.updateTag({ property: 'article:published_time', content: post.datePublishedISO });
    }
    if (post.dateModifiedISO) {
      this.meta.updateTag({ property: 'article:modified_time', content: post.dateModifiedISO });
    }
  
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: desc });
    this.meta.updateTag({ name: 'twitter:image', content: ogImg });
  
    // Bonus
    this.meta.updateTag({ name: 'theme-color', content: '#0b1220' });

  

  }
  

  private applyNotFoundSeo(slug: string): void {
    const title = 'Article introuvable | Vynexstudio';
    const desc = "Cet article n'existe pas (ou a été supprimé). Découvrez nos autres contenus.";

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'robots', content: 'noindex,follow' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: this.siteUrl + '/blog/' + slug + '/' });

    const ogImg = this.siteUrl + '/seo.webp';
this.meta.updateTag({ property: 'og:image', content: ogImg });
this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
this.meta.updateTag({ name: 'twitter:image', content: ogImg });
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private getCanonicalUrl(slug: string): string {
    return `${this.siteUrl}/blog/${slug}/`;
  }

  private absoluteUrl(pathOrUrl: string): string {
    if (!pathOrUrl) return this.siteUrl;
    if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl;
    return this.siteUrl + (pathOrUrl.startsWith('/') ? pathOrUrl : '/' + pathOrUrl);
  }

  // ---------- JSON-LD ----------

  private injectArticleJsonLd(post: Post): void {
    const id = 'jsonld-vynex-article';
    this.removeJsonLd(id);

    const url = this.getCanonicalUrl(post.slug);
    const image = this.absoluteUrl(post.cover);

    const jsonLd: any = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      image,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
      publisher: { '@type': 'Organization', name: this.companyName, url: this.siteUrl },
    };

    if (post.datePublishedISO) jsonLd.datePublished = post.datePublishedISO;
    if (post.dateModifiedISO || post.datePublishedISO) jsonLd.dateModified = post.dateModifiedISO ?? post.datePublishedISO;

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.doc.head.appendChild(script);
  }

  private injectBreadcrumbJsonLd(post: Post): void {
    const id = 'jsonld-vynex-breadcrumb-blogpost';
    this.removeJsonLd(id);

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: this.siteUrl + '/blog/' },
        { '@type': 'ListItem', position: 3, name: post.title, item: this.getCanonicalUrl(post.slug) },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private injectFaqJsonLd(post: Post): void {
    const id = 'jsonld-vynex-faq-blogpost';
    this.removeJsonLd(id);

    if (!post.faq?.length) return;

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((f) => ({
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

  private removeJsonLd(id: string): void {
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();
  }
}
