import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavLink = { label: string; path: string };

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() companyName = 'Vynexstudio';

  // ⚠️ Mets ton WhatsApp
  @Input() whatsappNumber = '+212644071444';

  // ⚠️ Contact
  @Input() email = 'contact@vynexstudio.ma';
  @Input() phone = '+212644071444';

  // ⚠️ Local
  @Input() city = 'Casablanca';
  @Input() country = 'Maroc';

  year = new Date().getFullYear();

  linksCompany: NavLink[] = [
    { label: 'À propos', path: '/a-propos/' },
    { label: 'Blog', path: '/blog/' },
    { label: 'Contact', path: '/contact/' },
  ];

  linksServices: NavLink[] = [
    { label: 'Site vitrine', path: '/services/site-vitrine/' },
    { label: 'E-commerce', path: '/services/site-ecommerce/' },
    { label: 'Plateforme web', path: '/services/plateforme-web/' },
    { label: 'Logiciel de gestion', path: '/services/logiciel-gestion/' },
    { label: 'SEO', path: '/seo/' },
    { label: 'Google Ads', path: '/googleAds/' },
  ];

  linksLegal: NavLink[] = [
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'Politique de confidentialité', path: '/confidentialite' },
  ];

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis.');
    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }
}
