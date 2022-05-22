import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id?: number;
  isHiden = false;
  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    let numero = Math.floor(Math.random() * 10);
    if (numero > 4) {
      this.isHiden = true;
    }
  }

  onClickEvent() {
    this.modal.show = true;
    this.modal.title = 'Aviso!';
    this.modal.text = `Id selecionado = ${this.id}`;
  }

  onCloseModal() {
    this.modal.show = false;
  }

}
