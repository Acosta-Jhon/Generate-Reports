import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './parameters/users/list-users/list-users.component';
import { CreateUsersComponent } from './parameters/users/create-users/create-users.component';
import { CreateRolesComponent } from './parameters/roles/create-roles/create-roles.component';
import { ListRolesComponent } from './parameters/roles/list-roles/list-roles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUsersComponent,
    CreateUsersComponent,
    CreateRolesComponent,
    ListRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
