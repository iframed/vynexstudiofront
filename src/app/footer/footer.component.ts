import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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

  // WhatsApp
  @Input() whatsappNumber = '+212644071444';

  // Contact
  @Input() email = 'contact@vynexstudio.ma';
  @Input() phone = '+212644071444';

  // Local
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
    { label: 'SEO', path: '/services/seo/' },
    { label: 'Google Ads', path: '/services/google-ads/' },
  ];

  // (optionnel) si tu ne l'utilises pas dans le HTML, tu peux supprimer
  linksLegal: NavLink[] = [
    { label: 'Mentions légales', path: '/mentions-legales/' },
    { label: 'Politique de confidentialité', path: '/confidentialite/' },
  ];

  constructor(private router: Router) {}

  get whatsappLink(): string {
    const text = encodeURIComponent('Bonjour Vynex, je souhaite un devis.');
    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }

  /** Enlève le dernier "/" uniquement (sauf si c'est "/") */
  private stripTrailingSlash(path: string): string {
    if (!path) return '/';
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
    return path;
  }

  /** Navigation SPA sans casser les routes Angular (qui sont sans slash final) */
  nav(pathWithSlash: string, ev: Event) {
    ev.preventDefault();
    const url = this.stripTrailingSlash(pathWithSlash);
    this.router.navigateByUrl(url);
  }
   
    
}
