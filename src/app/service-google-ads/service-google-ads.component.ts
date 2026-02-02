// service-google-ads.component.ts
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AdsAnalyticsService } from '../service/ads-analytics.service';

type FaqItem = { q: string; a: string };
type Feature = { title: string; desc: string };
type Step = { n: string; title: string; desc: string };
type Kpi = { k: string; v: string };
type Pack = { title: string; who: string; includes: string[]; featured?: boolean };
type Proof = { title: string; desc: string };
type Industry = { title: string; desc: string };

@Component({
  selector: 'app-service-google-ads',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-google-ads.component.html',
  styleUrls: ['./service-google-ads.component.css'],
})
export class ServiceGoogleAdsComponent implements OnInit {
  companyName = 'Vynexstudio';

  // ⚠️ mets ton domaine
  siteUrl = 'https://vynexstudio.com';

  // ⚠️ mets ton WhatsApp
  whatsappNumber = '+212644071444';

  /**
   * ✅ Slug SEO recommandé:
   * - plus lisible
   * - plus standard
   * - meilleur CTR dans Google
   *
   * Si ton router actuel est /googleAds/, garde l’ancien mais redirige 301 côté serveur
   * vers /google-ads/ pour éviter le duplicate content.
   */
  slug = '/google-ads/';
  canonicalUrl = this.siteUrl + this.slug;

  /**
   * ✅ SEO : cluster "agence marketing digitale / agence web / publicité Google / gestion Google Ads / leads"
   */
  metaTitle =
    'Agence Marketing Digitale Google Ads au Maroc | Publicité Google & Leads | Vynexstudio';

  metaDescription =
    'Vynexstudio, agence marketing digitale et web au Maroc : gestion Google Ads (Search, Performance Max, remarketing) + tracking conversions (GA4, appels, WhatsApp, formulaires). Objectif : leads qualifiés, CPL maîtrisé, optimisation continue.';

  /**
   * H1 / HERO (si tu utilises encore le binding dans le HTML, sinon tu peux le remplacer par texte fixe)
   */
  heroTitle = 'Agence Marketing Digitale Google Ads – Publicité Google orientée génération de leads';
  heroSubtitle =
    "Nous gérons vos campagnes Google Ads pour générer des leads qualifiés (appels, formulaires, WhatsApp). Stratégie marketing, gestion Google Ads, tracking conversions et optimisation continue pour améliorer le coût par lead et la rentabilité.";

  bullets: string[] = [
    'Gestion Google Ads orientée leads (pas juste des clics)',
    'Tracking complet : formulaire, appel, WhatsApp (GA4/Tag Manager)',
    'Optimisation continue : coût/lead + qualité des demandes',
    'Landing page + messages : plus de demandes, moins de budget gaspillé',
  ];

  proofs: Proof[] = [
    {
      title: 'Stratégie “intention”',
      desc: 'On cible les recherches à forte intention (devis, prix, près de moi, service…).',
    },
    {
      title: 'Tracking propre',
      desc: 'On mesure ce qui rapporte : leads, appels, WhatsApp, formulaires.',
    },
    {
      title: 'Optimisation hebdo',
      desc: 'Ajustements réguliers : requêtes, annonces, enchères, pages, audiences, exclusions.',
    },
  ];

  industries: Industry[] = [
    { title: 'Services', desc: 'plombier, avocat, cabinet, conciergerie, agence…' },
    { title: 'E-commerce', desc: 'catalogue produits, retargeting, Performance Max.' },
    { title: 'B2B', desc: 'leads qualifiés, formulaires, prises de RDV.' },
    { title: 'Local', desc: 'zones, appels, itinéraires, horaires, extensions.' },
  ];

  features: Feature[] = [
    { title: 'Search (ROI)', desc: 'Annonces sur intention : “devis”, “prix”, “agence”, “près de moi”…' },
    { title: 'Performance Max', desc: 'Couverture multi-réseaux avec contrôle des signaux & objectifs.' },
    { title: 'Remarketing', desc: 'Relancer les visiteurs chauds (site, paniers, formulaires incomplets).' },
    { title: 'Landing page', desc: 'Une page pensée conversion : preuves, offres, CTA, vitesse, mobile.' },
    { title: 'Extensions & appels', desc: 'Appel, sitelinks, accroches, zones, formulaires… pour + de clics utiles.' },
    { title: 'Pilotage & reporting', desc: 'Tableau clair : budget, leads, CPL, CVR, mots-clés gagnants.' },
  ];

  kpis: Kpi[] = [
    { k: 'CPL', v: 'Coût par lead (objectif principal)' },
    { k: 'CVR', v: 'Taux de conversion (visite → demande)' },
    { k: 'Qualité', v: 'Qualité des leads (réels / qualifiés)' },
    { k: 'Requêtes', v: 'Search terms (négatifs + opportunités)' },
  ];

  steps: Step[] = [
    { n: '1', title: 'Audit & objectifs', desc: 'Offre, zones, concurrence, tracking, messages, budget.' },
    { n: '2', title: 'Structure campagnes', desc: 'Groupes d’annonces, mots-clés, négatifs, audiences.' },
    { n: '3', title: 'Créa & landing', desc: 'Annonces + landing page orientée conversion.' },
    { n: '4', title: 'Tracking conversions', desc: 'Formulaire, appel, WhatsApp + events (GA4/Ads).' },
    { n: '5', title: 'Optimisation continue', desc: 'Tests, exclusions, enchères, annonces, pages, audiences.' },
    { n: '6', title: 'Scale', desc: 'Nouvelles zones, nouveaux services, nouvelles campagnes rentables.' },
  ];

  packs: Pack[] = [
    {
      title: 'Audit & plan de campagne',
      who: 'Vous voulez lancer Google Ads sans gaspiller votre budget',
      includes: [
        'Analyse de votre offre, zone et concurrence',
        'Sélection des mots-clés à forte intention',
        'Structure de campagnes recommandée',
        'Plan de tracking (formulaire, appel, WhatsApp)',
        'Recommandations landing page & message',
      ],
    },
    {
      title: 'Gestion mensuelle Google Ads',
      featured: true,
      who: 'Vous voulez des leads réguliers et un coût par lead maîtrisé',
      includes: [
        'Lancement & gestion des campagnes Search',
        'Optimisation continue du coût par lead',
        'Ajout de mots-clés négatifs (anti-gaspillage)',
        'Tests annonces & extensions',
        'Suivi des conversions (leads, appels, WhatsApp)',
        'Reporting clair + actions concrètes',
      ],
    },
  ];

  faqs: FaqItem[] = [
    {
      q: 'En combien de temps voit-on des résultats ?',
      a: "Souvent en quelques jours pour les premiers leads. Ensuite, on optimise 2–4 semaines pour stabiliser le CPL et améliorer la qualité.",
    },
    {
      q: 'Est-ce que vous faites la landing page aussi ?',
      a: "Oui. Une bonne landing peut améliorer fortement le taux de conversion. On peut créer/optimiser votre page pour augmenter les demandes.",
    },
    {
      q: 'Quel budget pub faut-il prévoir ?',
      a: "Ça dépend du secteur et de la zone. On peut démarrer petit, mesurer le CPL, puis augmenter uniquement si c’est rentable.",
    },
    {
      q: 'Vous mesurez WhatsApp / appels ?',
      a: 'Oui, on met en place le tracking des conversions (formulaire, appel, WhatsApp) pour optimiser sur ce qui rapporte.',
    },
    {
      q: 'Google Ads ou Meta Ads ?',
      a: "Google capte l’intention (les gens cherchent). Meta est excellent pour la demande latente. On choisit selon votre offre et vos objectifs.",
    },
  ];

  related = [
    { title: 'SEO (référencement naturel)', link: '/seo/' },
    { title: 'Landing page / site vitrine', link: '/services/site-vitrine/' },
    { title: 'Plateforme web', link: '/services/plateforme-web/' },
    { title: 'Tracking & analytics', link: '/services/tracking-analytics/' }, // ✅ évite doublon /seo/
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent(
      'Bonjour Vynex, je souhaite un devis pour une campagne Google Ads.'
    );
    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }

  constructor(
    private title: Title,
    private meta: Meta,
    private analytics: AdsAnalyticsService,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.applySeo();
    this.setCanonical();
    this.injectServiceJsonLd();
    this.injectFaqJsonLd();
    this.injectBreadcrumbJsonLd();
  }

  // Tracking simple sur CTA
  trackCta(kind: 'primary' | 'whatsapp') {
    this.analytics.trackLead('lead_click', { kind, page: 'google_ads' });
  }

  private applySeo(): void {
    this.title.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // OpenGraph
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.companyName });
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:locale', content: 'fr_MA' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.metaTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.metaDescription });

    // Bonus
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
    const id = 'jsonld-vynex-service-google-ads';
    this.doc.getElementById(id)?.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Gestion Google Ads (Publicité Google)',
      serviceType: 'Google Ads / Publicité sur Google',
      description: this.metaDescription,
      provider: {
        '@type': 'Organization',
        name: this.companyName,
        url: this.siteUrl,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Morocco',
      },
      url: this.canonicalUrl,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Offres Google Ads',
        itemListElement: this.packs.map((p) => ({
          '@type': 'Offer',
          name: p.title,
          description: p.who,
          availability: 'https://schema.org/InStock',
        })),
      },
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.doc.head.appendChild(script);
  }

  private injectFaqJsonLd(): void {
    const id = 'jsonld-vynex-faq-google-ads';
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
    const id = 'jsonld-vynex-breadcrumb-google-ads';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: this.siteUrl + '/services/' },
        { '@type': 'ListItem', position: 3, name: 'Google Ads', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
