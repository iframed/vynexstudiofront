import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  if (!isPlatformBrowser(platformId)) return next(req);

  // Preflight
  if (req.method === 'OPTIONS') return next(req);

  const url = req.url;

  // ✅ Public endpoints (relatifs ou absolus)
  const isPublic =
    url.includes('/api/auth/') ||                 // /api/auth/login, /api/auth/register...
    url.includes('/api/contact') ||               // contact public
    url.includes('/v3/api-docs') ||
    url.includes('/swagger-ui');

  if (isPublic) return next(req);

  const token = localStorage.getItem('cco_token');
  if (!token) return next(req);

  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }));
};
