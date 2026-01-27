import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading = false;
  errorMsg = '';

  form!: FormGroup; // ✅ on déclare seulement

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    // ✅ initialisation ici (fb est dispo)
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submit() {
    this.errorMsg = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMsg = 'Veuillez remplir email + mot de passe.';
      return;
    }

    const payload = this.form.getRawValue() as { email: string; password: string };

    this.loading = true;
    this.auth.login(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/admin');
      },
      error: (err) => {
        this.loading = false;
        if (err?.status === 401 || err?.status === 403) {
          this.errorMsg = 'Email ou mot de passe incorrect.';
        } else {
          this.errorMsg = 'Erreur serveur, réessayez.';
        }
      }
    });
  }
}
