import { Routes } from '@angular/router';
import { ServiceSiteEcommercePrixComponent } from './service-site-ecommerce-prix/service-site-ecommerce-prix.component';
import { ServiceSiteVitrinePrixComponent } from './service-site-vitrine-prix/service-site-vitrine-prix.component';

export const routes: Routes = [
  // Home (ne pas précharger, c'est la page initiale)
  {
    path: '',
    loadComponent: () =>
      import('./home-hero/home-hero.component').then((m) => m.HomeHeroComponent),
  },

  // Pages (précharge)
  {
    path: 'services',
    data: { preload: true },
    loadComponent: () =>
      import('./services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'contact',
    data: { preload: true },
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'services/google-ads',
    data: { preload: true },
    loadComponent: () =>
      import('./service-google-ads/service-google-ads.component').then(
        (m) => m.ServiceGoogleAdsComponent
      ),
  },
  {
    path: 'blog',
    data: { preload: true },
    loadComponent: () =>
      import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:slug',
    // pas de preload (inutiles de précharger tous les articles)
    loadComponent: () =>
      import('./blog-post-component/blog-post-component.component').then(
        (m) => m.BlogPostComponent
      ),
  },
  {
    path: 'a-propos',
    data: { preload: true },
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'realisations',
    data: { preload: true },
    loadComponent: () =>
      import('./realisations/realisations.component').then(
        (m) => m.RealisationsSectionComponent
      ),
  },

  // Services (détails) (précharge)
  {
    path: 'services/plateforme-web',
    data: { preload: true },
    loadComponent: () =>
      import('./service-plateforme-web/service-plateforme-web.component').then(
        (m) => m.ServicePlateformeWebComponent
      ),
  },
  {
    path: 'services/site-vitrine',
    data: { preload: true },
    loadComponent: () =>
      import('./service-site-vitrine/service-site-vitrine.component').then(
        (m) => m.ServiceSiteVitrineComponent
      ),
  },
  {
    path: 'services/site-ecommerce',
    data: { preload: true },
    loadComponent: () =>
      import('./service-site-ecommerce/service-site-ecommerce.component').then(
        (m) => m.ServiceSiteEcommerceComponent
      ),
  },
  {
    path: 'services/logiciel-gestion',
    data: { preload: true },
    loadComponent: () =>
      import('./service-logiciel-gestion/service-logiciel-gestion.component').then(
        (m) => m.ServiceLogicielGestionComponent
      ),
  },
  {
    path: 'services/seo',
    data: { preload: true },
    loadComponent: () =>
      import('./service-seo/service-seo.component').then(
        (m) => m.ServiceSeoComponent
      ),
  },

  // Admin (pas de preload)
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },


  {
    path: 'services/creation-site-web',
    data: { preload: true },
    loadComponent: () =>
      import('./service-creation-site-web/service-creation-site-web.component')
        .then(m => m.ServiceCreationSiteWebComponent),
  },

  { path: 'services/site-ecommerce/prix', component: ServiceSiteEcommercePrixComponent },
  {
    path: 'services/site-vitrine/prix',
    component: ServiceSiteVitrinePrixComponent,
  }
  
];
