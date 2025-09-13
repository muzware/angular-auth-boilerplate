import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="onRegister()">
      <label>Email
        <input type="email" [(ngModel)]="email" name="email" required />
      </label>
      <label>Password
        <input type="password" [(ngModel)]="password" name="password" name="password" required />
      </label>
      <button type="submit">Register</button>
      <div *ngIf="error" style="color: red">{{ error }}</div>
    </form>
  `
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';
  constructor(private auth: AuthService) {}

  async onRegister() {
    this.error = '';
    try {
      await this.auth.register(this.email, this.password);
    } catch (err: any) {
      this.error = err.message || 'Registration failed';
    }
  }
}