import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

interface ConfiguratoinModel {
  name: string;
}
interface TestService {
  getMessage(): string;
  getConfiguration(): Observable<ConfiguratoinModel>;
  getTestCookie(): string;
}


@Injectable({
  providedIn: 'root'
})
export class TestServiceService implements TestService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getMessage(): string {
    return "Test message";
  }

  getConfiguration(): Observable<ConfiguratoinModel> {
    const url: string = 'configuration';
    this.cookieService.set('test', 'testValue');
    return this.http.get<ConfiguratoinModel>(url);
  }

  getTestCookie(): string{
    this.cookieService.set('test', 'testValue');
    return this.cookieService.get('test')
  }
}
