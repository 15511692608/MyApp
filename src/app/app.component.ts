import { Component, OnInit } from '@angular/core';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show: boolean ;
  title = '天下';
  MenuLists = ['one', 'two', 'Three'];
  showList() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  constructor (private loggerService: LoggerService) { }
  ngOnInit() {
    this.loggerService.log('is inti');
    this.show = false;
  }
}
