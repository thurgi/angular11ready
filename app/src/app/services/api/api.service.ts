import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  testInterceptor(): void {
    this.http.request(
      'GET',
      'https://www.google.com/search?q=image&rlz=1C1GCEU_frFR947FR947&sxsrf=ALeKk00NStywAk9Is5EDqNn0MmNORsNtKA:1617032489638&tbm=isch&source=iu&ictx=1&fir=eSkpjPh1a_fCJM%252CwJ-Io2kLq7eLgM%252C_&vet=1&usg=AI4_-kRkyGgG8qN_5kWJ8RIuDBMJSStcng&sa=X&ved=2ahUKEwjy_om569XvAhVFOhoKHSHsDGIQ9QF6BAgMEAE#imgrc=eSkpjPh1a_fCJM'
    );
  }
}
