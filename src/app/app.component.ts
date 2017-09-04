import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean;
  title = '天下';
  MenuLists = ['one', 'two', 'Three'];
  showList() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  ngOninit() {
    this.show = false;
  }
}
