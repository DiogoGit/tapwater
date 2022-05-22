import {
  Component,
  OnInit
} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  coords: any;
  currentDate: Date;
  title = 'tapwater-app';

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = position.coords;
    });
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
