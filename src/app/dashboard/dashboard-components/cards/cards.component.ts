import { Component, OnInit } from '@angular/core';

interface cards {
  image: string;
  btn: string;
  header: string;
  description: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/springboot.png",
      btn: "btn-danger",
      header: "Curso de SpringBoot",
      description: "Curso de desarrollo de aplicaciones web con Spring"
    },
    {
      image: "assets/images/angular.png",
      btn: "btn-warning",
      header: "Curso de Angular",
      description: "Curso de desarrollo de aplicaciones web con Angular"
    },
    {
      image: "assets/images/android.png",
      btn: "btn-info",
      header: "Curso de Android",
      description: "Curso de desarrollo de aplicaciones moviles con Android"
    },
  ]

}
