import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ConfiguratoinModel {
  name: string;
}
interface TestService {
  getMessage(): string;
  getConfiguration(): Observable<ConfiguratoinModel>;
}


@Injectable({
  providedIn: 'root'
})
export class TestServiceService implements TestService {

  constructor(private http: HttpClient) {
  }

  getMessage(): string {
    return "Test message";
  }

  getConfiguration(): Observable<ConfiguratoinModel> {
    const url: string = 'configuration';
    return this.http.get<ConfiguratoinModel>(url);
  }
}
