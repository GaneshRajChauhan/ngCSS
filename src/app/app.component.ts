import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle = false;
  showMenu = false;
  ngOnInit() {

  }
  onClickMe = () => {
      this.showMenu = !this.showMenu;
  }

  toggler = () => {
      this.toggle = !this.toggle;
  }
  title = 'ngcss';
}
