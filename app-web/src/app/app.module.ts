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
import { ListUsersComponent } from './process/users/list-users/list-users.component';
import { CreateUsersComponent } from './process/users/create-users/create-users.component';
import { CreateRolesComponent } from './parameters/roles/create-roles/create-roles.component';
import { ListRolesComponent } from './parameters/roles/list-roles/list-roles.component';
import { ListAddressesComponent } from './parameters/addresses/list-addresses/list-addresses.component';
import { CreateAdressesComponent } from './parameters/addresses/create-addresses/create-addresses.component';
import { CreateCitiesComponent } from './parameters/cities/create-cities/create-cities.component';
import { ListCitiesComponent } from './parameters/cities/list-cities/list-cities.component';
import { CreateJobsComponent } from './parameters/jobs/create-jobs/create-jobs.component';
import { ListJobsComponent } from './parameters/jobs/list-jobs/list-jobs.component';
import { CreateQuestionsComponent } from './parameters/questions/create-questions/create-questions.component';
import { ListQuestionsComponent } from './parameters/questions/list-questions/list-questions.component';
import { ListAnswersComponent } from './process/answers/list-answers/list-answers.component';
import { CreateAnswersComponent } from './process/answers/create-answers/create-answers.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUsersComponent,
    CreateUsersComponent,
    CreateRolesComponent,
    ListRolesComponent,
    ListAddressesComponent,
    CreateAdressesComponent,
    CreateCitiesComponent,
    ListCitiesComponent,
    CreateJobsComponent,
    ListJobsComponent,
    CreateQuestionsComponent,
    ListQuestionsComponent,
    ListAnswersComponent,
    CreateAnswersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
