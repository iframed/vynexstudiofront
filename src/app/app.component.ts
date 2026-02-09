import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { BlogPostComponent } from './blog-post-component/blog-post-component.component';
import { AnalyticsService } from './service/analytics.service.spec';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vynexstudio';
  private router = inject(Router);
  private analytics = inject(AnalyticsService);

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.analytics.pageView(e.urlAfterRedirects);
      });
  }
  trackWhatsapp(source: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'lead',
        event_label: source,
      });
    }
  }
  
  whatsappLink =
    'https://wa.me/212644071444?text=' +
    encodeURIComponent('Bonjour VynexStudio, je veux un devis. Mon besoin : ');
}
