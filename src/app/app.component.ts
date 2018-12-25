import { Component, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testProject';
  public _message: string;

  constructor(private testService: TestServiceService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this._message = this.testService.getMessage();
    this.testService.getConfiguration().subscribe((data) => {
      this.cookieService.set('test', 'testValue');
      console.log('DATA', data);
    });
  }
}
