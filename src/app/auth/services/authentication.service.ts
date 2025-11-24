import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '@core/services/api.service';
import { CredentialsService } from '@app/auth';
import { Credentials } from '@core/entities';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
  isMobile?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private readonly _credentialsService: CredentialsService,
    private readonly api: ApiService,
  ) {}

  login(context: LoginContext): Observable<Credentials> {
    const body = {
      email: context.username,
      password: context.password,
      rememberMe: context.remember ?? true,
      DeviceType: 'ios',
      imei: '48651-e912e65c1s57/89',
      FirebaseToken: 'AAAAAA2222111',
    };

    return this.api.post<any>('Account/Login', body).pipe(
      tap((res) => {
        console.log('API Response:', res);

        const credentials: Credentials = new Credentials({
          username: res.username,
          id: res.id,
          token: res.token,
          refreshToken: res.refreshToken,
          expiresIn: res.expiresIn,
          roles: res.roles,
          email: res.email,
          firstName: res.firstName,
          lastName: res.lastName,
        });

        this._credentialsService.setCredentials(credentials, context.remember ?? true);
      }),
    );
  }

  logout(): Observable<any> {
    this._credentialsService.setCredentials();
    return this.api.post('auth/logout', {}); // optional backend logout
  }
}
