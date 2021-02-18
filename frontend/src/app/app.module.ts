import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgComponentOutletComponent } from './components/ng-component-outlet/ng-component-outlet.component';
import { DinamicComponentComponent } from './components/dinamic-component/dinamic-component.component';
import { NgMostradorComponent } from './components/ng-mostrador/ng-mostrador.component';
import { NgSwitchComponentComponent } from './components/ng-switch-component/ng-switch-component.component';
import { NgPluralComponentComponent } from './components/ng-plural-component/ng-plural-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NgComponentOutletComponent,
    DinamicComponentComponent,
    NgMostradorComponent,
    NgSwitchComponentComponent,
    NgPluralComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
