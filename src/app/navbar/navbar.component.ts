import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

  /* WhatsApp link */
  get whatsappLink(): string {
    const text = encodeURIComponent(
      'Bonjour Vynex, je souhaite un devis pour un projet.'
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
}
