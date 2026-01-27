import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactMessage } from '../service/contact.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  private api = inject(ContactService);

  loading = false;
  error = '';

  // filters
  q = '';
  lu: 'all' | 'true' | 'false' = 'all';

  // pagination
  page = 0;
  size = 20;
  totalPages = 0;
  totalElements = 0;

  // data
  messages: ContactMessage[] = [];

  ngOnInit(): void {
    this.load();
  }

  load(page = this.page) {
    this.loading = true;
    this.error = '';

    const luParam = this.lu === 'all' ? null : this.lu === 'true';

    this.api
      .listMessages({ page, size: this.size, lu: luParam, q: this.q })
      .subscribe({
        next: (res) => {
          this.messages = res.content;
          this.page = res.number;
          this.totalPages = res.totalPages;
          this.totalElements = res.totalElements;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.error =
            err?.status === 401
              ? '401: Non autorisé (token manquant/expiré).'
              : 'Erreur: impossible de charger les messages.';
        },
      });
  }

  search() {
    this.load(0);
  }

  prev() {
    if (this.page > 0) this.load(this.page - 1);
  }

  next() {
    if (this.page + 1 < this.totalPages) this.load(this.page + 1);
  }

  remove(id: number) {
    if (!confirm('Supprimer ce message ?')) return;

    this.api.deleteMessage(id).subscribe({
      next: () => this.load(this.page),
      error: () => alert('Erreur suppression'),
    });
  }

  trackById(_: number, m: ContactMessage) {
    return m.id;
  }
}
