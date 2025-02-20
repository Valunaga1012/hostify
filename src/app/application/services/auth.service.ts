import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = inject(Auth);

  async signIn(email: string, password: string): Promise<any> {
    try {
      return await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
    } catch (error: any) {
      return error;
    }
  }
}
