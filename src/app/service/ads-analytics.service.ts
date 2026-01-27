

// ads.service.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window { gtag?: (...args: any[]) => void; }
}

@Injectable({ providedIn: 'root' })
export class AdsAnalyticsService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  trackLead(eventName: string, params: Record<string, any> = {}) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }
}
