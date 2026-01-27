import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/* ====== REQUEST (POST /api/contact) ====== */
export type ContactPayload = {
  nom: string;
  email: string;
  telephone?: string;
  company?: string;
  need?: string;
  budget?: string;
  message: string;
  source?: string;
};

/* ====== RESPONSE (admin + ack post) ====== */
export type ContactMessage = {
  id: number;
  nom: string;
  email: string;
  telephone?: string;
  company?: string;
  need?: string;
  budget?: string;
  message: string;
  lu: boolean;
  createdAt: string; // LocalDateTime -> string JSON
};

export type PageResponse<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
};

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);
  private apiBase = '/api';

  /* PUBLIC */
  sendContact(payload: ContactPayload): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(`${this.apiBase}/contact`, payload);
  }

  /* ✅ ADMIN: RECEVOIR (GET /api/admin/contacts) */
  listMessages(params?: {
    page?: number;
    size?: number;
    lu?: boolean | null;
    q?: string | null;
  }): Observable<PageResponse<ContactMessage>> {
    let p = new HttpParams()
      .set('page', String(params?.page ?? 0))
      .set('size', String(params?.size ?? 20));

    if (params?.lu !== null && params?.lu !== undefined) {
      p = p.set('lu', String(params.lu));
    }
    if (params?.q && params.q.trim()) {
      p = p.set('q', params.q.trim());
    }

    return this.http.get<PageResponse<ContactMessage>>(
      `${this.apiBase}/admin/contacts`,
      { params: p }
    );
  }

  /* ADMIN: détail */
  getMessage(id: number): Observable<ContactMessage> {
    return this.http.get<ContactMessage>(`${this.apiBase}/admin/contacts/${id}`);
  }

  /* ADMIN: supprimer */
  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBase}/admin/contacts/${id}`);
  }
}
