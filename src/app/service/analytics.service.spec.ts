import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window { gtag?: (...args: any[]) => void; }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  pageView(url: string): void {
    if (!this.isBrowser) return;
    window.gtag?.('event', 'page_view', { page_path: url });
  }

  event(name: string, params: Record<string, any> = {}): void {
    if (!this.isBrowser) return;
    window.gtag?.('event', name, params);
  }
}
