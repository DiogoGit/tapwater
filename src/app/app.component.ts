import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  isHiden = false;

  title = 'tapwater-app';

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
    let numero = Math.floor(Math.random() * 10);
    if(numero > 4){
      this.isHiden = true;
    }
  }
}
