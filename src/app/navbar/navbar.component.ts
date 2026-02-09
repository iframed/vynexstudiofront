import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  openMobile = false;
  openServices = false;
  scrolled = false;

  companyName = 'Vynexstudio';
  whatsappNumber = '+212644071444';


  constructor(private router: Router) {}

  /* WhatsApp link */
  get whatsappLink(): string {
    const text = encodeURIComponent(
      'Bonjour Vynexstudio, je souhaite un devis pour un projet.'
    );
    const phone = this.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    return `https://wa.me/${phone}?text=${text}`;
  }

  /* Mobile menu toggle */
  toggleMobile() {
    this.openMobile = !this.openMobile;

    // quand on ferme le menu mobile → fermer services aussi
    if (!this.openMobile) {
      this.openServices = false;
    }
  }

  /* Services dropdown toggle */
  toggleServices() {
    this.openServices = !this.openServices;
  }

  /* Close everything (click link / logo) */
  closeAll() {
    this.openMobile = false;
    this.openServices = false;
  }

  /* Navbar shadow on scroll */
  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  nav(url: string, e: MouseEvent) {
    e.preventDefault();            // empêche reload
    this.router.navigateByUrl(url); // navigation SPA
    this.closeAll();               // ton comportement actuel
  }
}
