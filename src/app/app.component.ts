import { Component, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testProject';
  public _message: string;

  constructor(private testService: TestServiceService) {
  }

  ngOnInit() {
    this._message = this.testService.getMessage();
    this.testService.getConfiguration().subscribe((data) => {
      console.log(data);
    });
  }
}
