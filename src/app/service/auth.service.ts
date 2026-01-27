import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export type AuthResponse = { token: string };
export type LoginRequest = { email: string; password: string };

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  private loginUrl = '/api/auth/login';

  private tokenKey = 'cco_token';

  login(payload: LoginRequest): Observable<AuthResponse> {
    console.log('🔐 LOGIN payload =', payload);

    return this.http.post<AuthResponse>(this.loginUrl, payload).pipe(
      tap(res => {
        console.log('✅ LOGIN response token (preview)=', res?.token?.slice(0, 20) + '...');
        this.setToken(res.token);
      })
    );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  setToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
