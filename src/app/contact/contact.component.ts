import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService, ContactPayload } from '../service/contact.service';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type FaqItem = { q: string; a: string };

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  companyName = 'Vynexstudio';
  siteUrl = 'https://vynexstudio.com';
  whatsappNumber = '+212644071444';
  contactEmail = 'contact@vynexstudio.ma';
  contactPhone = '+212644071444';
  city = 'Casablanca';
  country = 'MA';
  slug = '/contact/';
  canonicalUrl = this.siteUrl + this.slug;

  metaTitle = 'Contact Vynexstudio | Devis site web, e-commerce, plateforme, SEO & Ads';
  metaDescription =
    "Contactez Vynexstudio pour votre projet : site vitrine, e-commerce, plateforme web, logiciel, SEO ou Google Ads. Réponse rapide par formulaire ou WhatsApp. Devis gratuit.";

  heroTitle = 'Contactez Vynexstudio';
  heroSubtitle =
    "Expliquez votre besoin et recevez une estimation claire. Réponse rapide par WhatsApp ou formulaire.";

  faqs: FaqItem[] = [
    {
      q: 'Combien coûte un site ou une plateforme ?',
      a: "Le prix dépend du scope. Après un échange, on vous donne une estimation claire.",
    },
    {
      q: 'En combien de temps vous livrez ?',
      a: "Un site peut sortir en 1–3 semaines. Une plateforme dépend des modules (MVP puis évolutions).",
    },
    {
      q: 'Travaillez-vous partout au Maroc ?',
      a: 'Oui, on travaille à distance (Marrakech, Casablanca, Rabat, etc.).',
    },
    {
      q: 'Vous proposez SEO et Google Ads ?',
      a: 'Oui : SEO long terme + Ads résultats rapides. On peut combiner les deux.',
    },
  ];

  services = [
    { value: 'site-vitrine', label: 'Site vitrine' },
    { value: 'site-ecommerce', label: 'Site e-commerce' },
    { value: 'plateforme-web', label: 'Plateforme web (SaaS / marketplace)' },
    { value: 'logiciel-gestion', label: 'Logiciel de gestion' },
    { value: 'application-mobile', label: 'Application mobile' },
    { value: 'seo', label: 'SEO (référencement naturel)' },
    { value: 'google-ads', label: 'Google Ads' },
    { value: 'autre', label: 'Autre' },
  ];

  budgets = [
    { value: 'a-discuter', label: 'À discuter' },
    { value: '5000-10000', label: '5 000 – 10 000 MAD' },
    { value: '10000-20000', label: '10 000 – 20 000 MAD' },
    { value: '20000-50000', label: '20 000 – 50 000 MAD' },
    { value: '50000+', label: '50 000+ MAD' },
  ];

  sent = false;
  loading = false;
  errorMsg = '';

  // ✅ inject partout
  private fb = inject(FormBuilder);
  private seoTitleSvc = inject(Title);
  private meta = inject(Meta);
  private contactService = inject(ContactService);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: ['site-vitrine', [Validators.required]],
    budget: ['a-discuter'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.applySeo();
    this.setCanonical();
    this.injectLocalBusinessJsonLd();
    this.injectBreadcrumbJsonLd();
    this.injectFaqJsonLd();
  }

  trackWhatsapp(source: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'lead',
        event_label: source,
      });
    }
  }

  // ✅ WhatsApp link intelligent avec données du form
  get whatsappLink(): string {
    const v = this.form.getRawValue();
    const serviceLabel =
      this.services.find((s) => s.value === v.service)?.label ?? (v.service ?? '-');
    const budgetLabel =
      this.budgets.find((b) => b.value === v.budget)?.label ?? (v.budget ?? '-');

    const text = encodeURIComponent(
      `Bonjour Vynexstudio,
Je souhaite un devis.

Nom: ${v.name || '-'}
Email: ${v.email || '-'}
Téléphone: ${v.phone || '-'}
Service: ${serviceLabel}
Budget: ${budgetLabel}
Message: ${v.message || '-'}`
    );

    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }

  submit(): void {
    this.errorMsg = '';
    this.sent = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMsg = 'Veuillez remplir les champs obligatoires.';
      return;
    }

    this.loading = true;
    const v = this.form.getRawValue();

    // ✅ mapping exact vers DTO backend (ContactMessageRequest)
    const payload: ContactPayload = {
      nom: v.name ?? '',
      email: v.email ?? '',
      telephone: v.phone ?? undefined,
      need: v.service ?? 'autre', // ✅ service -> need
      budget: v.budget ?? 'a-discuter',
      message: v.message ?? '',
      source: 'contact', // optionnel (si backend ignore OK)
    };

    this.contactService.sendContact(payload).subscribe({
      next: () => {
        this.loading = false;
        this.sent = true;

        // 🔥 TRACK CONVERSION FORMULAIRE
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            method: 'contact_form',
          });
        }

        this.form.reset({
          name: '',
          email: '',
          phone: '',
          service: 'site-vitrine',
          budget: 'a-discuter',
          message: '',
        });
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Envoi impossible. Contactez-nous directement via WhatsApp.';
      },
    });
  }

  isInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.touched && c.invalid;
  }

  // ---------------- SEO META ----------------
  private applySeo(): void {
    this.seoTitleSvc.setTitle(this.metaTitle);
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

  // ---------------- JSON-LD SSR safe ----------------
  private injectLocalBusinessJsonLd(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const id = 'jsonld-vynex-localbusiness';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: this.companyName,
      url: this.siteUrl,
      areaServed: 'MA',
      address: {
        '@type': 'PostalAddress',
        addressLocality: this.city,
        addressCountry: this.country,
      },
      email: this.contactEmail,
      telephone: this.contactPhone,
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private injectBreadcrumbJsonLd(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const id = 'jsonld-vynex-breadcrumb-contact';
    this.doc.getElementById(id)?.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: this.siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: this.canonicalUrl },
      ],
    };

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  private injectFaqJsonLd(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const id = 'jsonld-vynex-faq-contact';
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
}
