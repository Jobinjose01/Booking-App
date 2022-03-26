import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Credentials, CredentialsService } from './credentials.service';
import jwt_decode from 'jwt-decode';

export interface LoginContext {
  resultdata: any;
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  resultdata: any;

  constructor(private credentialsService: CredentialsService, private http: HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */

  authendicate(context: LoginContext) {
    let username = context.username;
    let password = context.password;
    return this.http.post<any>(environment.serverUrl + 'authendicate', { username, password }).pipe(
      map((result) => {
        this.resultdata = result;
        if (this.resultdata.status == 1) {
          let decodedHeader: any = JSON.parse(atob(this.resultdata.access_token));
          const data = {
            username: decodedHeader.name,
            token: decodedHeader.access_token,
            role: decodedHeader.role
          };
          this.credentialsService.setCredentials(data, context.remember);
          this.resultdata.role = decodedHeader.role;
          return this.resultdata;
        } else {
          const data = {
            errormsg: this.resultdata.message,
          };
          return this.resultdata;
        }
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
