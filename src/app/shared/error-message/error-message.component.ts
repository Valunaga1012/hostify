import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { errorMessages } from '@pp/core/constants/error-message';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  template:`
  <div class="form-text text-danger">{{errorMessage}}</div>
  `,
  styleUrl: './error-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControl;
  cdr = inject(ChangeDetectorRef);

  get errorMessage(): string {
    this.control.statusChanges.subscribe(() => this.cdr.markForCheck());
    this.control.valueChanges.subscribe(() => this.cdr.markForCheck());
    const error = this.control.errors;
    const validatorName = Object.keys(error ?? {})[0];

    return this.control.touched && validatorName ? errorMessages[validatorName] : '';
  }
}
