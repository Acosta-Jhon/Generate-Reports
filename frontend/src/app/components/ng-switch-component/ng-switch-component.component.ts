import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-component',
  templateUrl: './ng-switch-component.component.html',
  styleUrls: ['./ng-switch-component.component.scss']
})
export class NgSwitchComponentComponent implements OnInit {
  
  Edificio: any[] = [
    {
      "piso": 1,
      "nombre": "Juan",
      "edad": 30,
      "pais": 'USA'
    },
    {
      "piso": 1,
      "nombre": "Luis",
      "edad": 20,
      "pais": 'UK'
    },
    {
      "piso": 2,
      "nombre": "Daya",
      "edad": 21,
      "pais": 'ECUADOR'
    },
    {
      "piso": 3,
      "nombre": "Lupe",
      "edad": 25,
      "pais": 'COLOMBIA'
    },
/*     {
      "piso": 4,
      "nombre": "Eduardo",
      "edad": 25,
      "pais": 'MEXICO'
    }, */
    {
      "piso": 0,
      "nombre": "Javier",
      "edad": 19,
      "pais": 'MEXICO'
    },
    {
      "piso": 0,
      "nombre": "Carlos",
      "edad": 19,
      "pais": 'ECUADOR'
    }
  ];

  constructor() {

   }

  ngOnInit(): void {

  }

}
