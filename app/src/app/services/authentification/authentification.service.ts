import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private helper = new JwtHelperService();

  constructor() { }

  isExpired(jwt: string): boolean {
    return this.helper.isTokenExpired(jwt);
  }

  decodedJwt(jwt: string): any {
    return this.helper.decodeToken(jwt);
  }

}
