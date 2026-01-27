import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    provideRouter(
      routes,
     // withPreloading(PreloadAllModules), 
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // ✅ toujours en haut à chaque navigation
        anchorScrolling: 'enabled'        // ✅ si un jour tu utilises #section
      })
    ),

    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),
  ],
};
