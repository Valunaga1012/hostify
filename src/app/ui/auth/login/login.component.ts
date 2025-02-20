import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@pp/application/services/auth.service';
import { firebaseErrors } from '@pp/core/constants/firebase-error';
import { emailPattern } from '@pp/core/constants/pattern';
import { ErrorMessageComponent } from '@pp/shared/error-message/error-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage: string = '';
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
   this.bildForm();
  }

  private bildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  protected async signIn(formValue: any): Promise<void> {
    const response = await this.authService.signIn(formValue.email, formValue.password);
    this.cdr.markForCheck();
    console.log(response.user);

    this.errorMessage = firebaseErrors[response.code];
    response?.user?.accessToken ? this.router.navigate(['/hotel-list']):
     (this.errorMessage = firebaseErrors[response.code]);
  }
}
