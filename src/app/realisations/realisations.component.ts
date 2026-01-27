import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

type Project = {
  title: string;
  tag: string;              // ex: "Site vitrine", "E-commerce", "Plateforme"
  city?: string;            // optionnel
  desc: string;
  link?: string;            // lien vers case study / site / page projet (optionnel)
  photos: { src: string; alt: string }[]; // 4-5 photos
};

@Component({
  selector: 'app-realisations-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css'],
})
export class RealisationsSectionComponent {
  companyName = 'Vynexstudio';

  projects: Project[] = [
    {
      title: 'Logiciel Gestion Stock & Distribution',
      tag: 'Logiciel métier',
      city: 'Casablanca',
      desc: 'Application interne (ERP léger) : arrivages, stocks, distributions, retours, ventes + statistiques & dashboard.',
      link: '/realisations/logiciel-stock-distribution',
      photos: [
        { src: '/narrivage.webp', alt: 'Formulaire nouvel arrivage - Stock' },
        { src: '/retour.webp', alt: 'Création retour - Garantie / motif - Stock' },
        { src: '/dashboard.webp', alt: 'Dashboard statistiques - Arrivages / ventes / distributions' },
        { src: '/sa.webp', alt: 'Table stocks par article - recherche + filtres' },
        { src: '/calendrier.webp', alt: 'Calendrier ventes - suivi mensuel' },
      ],
    },
    {
      title: 'Conciergerie Premium',
      tag: 'Site vitrine',
      city: 'Marrakech',
      desc: 'Site vitrine orienté conversion : WhatsApp, formulaires, pages SEO services.',
      link: '/realisations/conciergerie-premium',
      photos: [
        { src: '/pacceuil.webp', alt: 'Page d’accueil - Conciergerie' },
        { src: '/formule.webp', alt: 'Section services - Conciergerie' },
        { src: '/estimation.webp', alt: 'Formulaire estimation - Conciergerie' },
        { src: '/reservation.webp', alt: 'Page réservation - Conciergerie' },
       /* { src: '/vmobile.png', alt: 'Mobile - Conciergerie' },*/
      ],
    },
    {
      title: 'Boutique Gâteaux Marocains',
      tag: 'E-commerce',
      city: 'Maroc',
      desc: 'Boutique en ligne orientée commandes : catalogue, fiches produits, CTA “Commander”, contact WhatsApp + design responsive.',
      // ✅ soit une page de case study interne
      link: '/realisations/boutique-gateaux',
      // ✅ ou si tu préfères ouvrir le site directement (externe), mets l’URL ici :
      // link: 'https://...',
    
      photos: [
        { src: '/gateauxmarocain.webp', alt: 'Hero - Bienvenue + CTA Voir nos gâteaux' },
        { src: '/spro.webp', alt: 'Section produits - Gâteaux à la Une' },
        { src: '/cartep.webp', alt: 'Carte produit - Prix & description' },
        
        //{ src: '/assets/projects/gateaux/5.webp', alt: 'Version mobile / responsive' },
      ],
    },
    
    
  ];

  selectedIndex = 0;

  // Lightbox
  lbOpen = false;
  lbProjectIndex = 0;
  lbPhotoIndex = 0;

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  selectProject(i: number) {
    this.selectedIndex = i;
  }

  openLightbox(projectIndex: number, photoIndex: number) {
    this.lbOpen = true;
    this.lbProjectIndex = projectIndex;
    this.lbPhotoIndex = photoIndex;
    this.doc.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lbOpen = false;
    this.doc.body.style.overflow = '';
  }

  prevPhoto() {
    const photos = this.projects[this.lbProjectIndex].photos;
    this.lbPhotoIndex = (this.lbPhotoIndex - 1 + photos.length) % photos.length;
  }

  nextPhoto() {
    const photos = this.projects[this.lbProjectIndex].photos;
    this.lbPhotoIndex = (this.lbPhotoIndex + 1) % photos.length;
  }

  get activeProject(): Project {
    return this.projects[this.selectedIndex];
  }

  get lightboxPhoto() {
    const p = this.projects[this.lbProjectIndex];
    return p.photos[this.lbPhotoIndex];
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (!this.lbOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prevPhoto();
    if (e.key === 'ArrowRight') this.nextPhoto();
  }
}
