import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: false;
  title = '天下';
  MenuLists = ['one', 'two', 'Three'];
  showList() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
