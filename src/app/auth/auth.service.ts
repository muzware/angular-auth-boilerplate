import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user$: Observable<firebase.default.User | null>;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;
  }

  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/']);
  }

  async register(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.router.navigate(['/']);
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}