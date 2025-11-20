import { Component } from '@angular/core';

import { environment } from '@env/environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthenticationService } from '@app/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { color } from '@app/shared/colors';

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {
  version: string | null = environment.version;

  username: string = '';
  password: string = '';
  color = color; // <-- make available to HTML

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _authService: AuthenticationService,
  ) {}

  login() {
    if (!this.username) {
      return;
    }
    if (!this.password) {
      return;
    }
    // Here You can call the login method from the AuthenticationService directly and pass the required parameters.
    // setting credentials and other logic will be handled in the AuthenticationService.
    this._authService
      .login({
        username: this.username,
        password: this.password,
      })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (res) => {
          // Navigate to the home page or any other page after successful login.
          if (res) {
            console.log('Login successful');
            this._router.navigate([this._route.snapshot.queryParams['redirect'] || '/dashboard'], { replaceUrl: true }).then(() => {
              // Handle the navigation
              console.log('Navigated to dashboard');
            });
          }
        },
        error: (error) => {
          // Handle the error here
        },
      });
  }
}
