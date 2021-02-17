import { Component, OnInit } from '@angular/core';
import {  DinamicComponentComponent } from '../dinamic-component/dinamic-component.component';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.scss']
})
export class NgComponentOutletComponent implements OnInit {

  component = DinamicComponentComponent
  currentComponent: any
  showHide = false
  textButton = "Mostrar Component"

  ngOnInit(): void {
  }

  showHideComponent(): void {
      
 if(!this.showHide){
   //this.textButton = 'Ocultar Componente'
  this.currentComponent = this.component
  
 }
      

  }

}
