import { Component } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent {

  dinners: any = [
    {
      "title": "Insalatona di riso 2.0",
      "watched": false
    },
    {
      "title": "Insalatona di riso 2.0",
      "watched": false
    },
    {
      "title": "Insalatona di riso 2.0",
      "watched": false
    },
    {
      "title": "Insalatona di riso 2.0",
      "watched": false
    },
    {
      "title": "Insalatona di riso 2.0",
      "watched": true
    },
  ]

}
