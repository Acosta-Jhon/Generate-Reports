import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componenets
import { HomeComponent } from './components/home/home.component';
import { CreateRolesComponent } from './parameters/roles/create-roles/create-roles.component';
import { ListRolesComponent } from './parameters/roles/list-roles/list-roles.component';
import { CreateUsersComponent } from './process/users/create-users/create-users.component';
import { ListUsersComponent } from './process/users/list-users/list-users.component';
import { CreateAdressesComponent } from './parameters/addresses/create-addresses/create-addresses.component';
import { ListAddressesComponent } from './parameters/addresses/list-addresses/list-addresses.component';
import { CreateCitiesComponent } from './parameters/cities/create-cities/create-cities.component';
import { ListCitiesComponent } from './parameters/cities/list-cities/list-cities.component';
<<<<<<< HEAD
import { CreateQuestionsComponent } from './parameters/questions/create-questions/create-questions.component';
import { ListQuestionsComponent } from './parameters/questions/list-questions/list-questions.component';
=======
import { ListQuestionsComponent } from './parameters/questions/list-questions/list-questions.component';
import { CreateQuestionsComponent } from './parameters/questions/create-questions/create-questions.component';
import { ListJobsComponent } from './parameters/jobs/list-jobs/list-jobs.component';
import { CreateJobsComponent } from './parameters/jobs/create-jobs/create-jobs.component';
>>>>>>> 3e947f609175f056ef4a8dcaca06588d1a486d9e

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //Users
    { path: 'users/list-users', component: ListUsersComponent },
    { path: 'users/create-user', component: CreateUsersComponent },
    { path: 'users/edit-user/:id', component: CreateUsersComponent },
    //Roles
    { path: 'roles/list-roles', component: ListRolesComponent },
    { path: 'roles/create-role', component: CreateRolesComponent },
    { path: 'roles/edit-role/:id', component: CreateRolesComponent },
    //addresses
    { path: 'addresses/list-addresses', component: ListAddressesComponent },
    { path: 'addresses/create-address', component: CreateAdressesComponent },
    { path: 'addresses/edit-address/:id', component: CreateAdressesComponent },
    //cities
    { path: 'cities/list-cities', component: ListCitiesComponent },
    { path: 'cities/create-cities', component: CreateCitiesComponent },
    { path: 'cities/edit-cities/:id', component: CreateCitiesComponent },
<<<<<<< HEAD
    //Questions
    { path: 'questions/list-questions', component: ListQuestionsComponent},
    { path: 'questions/create-questions', component: CreateQuestionsComponent},
    { path: 'questions/edit-questions/:id', component: CreateQuestionsComponent},

    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]
=======
    //jobs
    { path: 'jobs/list-jobs', component: ListJobsComponent },
    { path: 'jobs/create-job', component: CreateJobsComponent },
    { path: 'jobs/edit-job/:id', component: CreateJobsComponent },
    //questions
    { path: 'questions/list-questions', component: ListQuestionsComponent },
    { path: 'questions/create-question', component: CreateQuestionsComponent },
    { path: 'questions/edit-question/:id', component: CreateQuestionsComponent },

    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
>>>>>>> 3e947f609175f056ef4a8dcaca06588d1a486d9e

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }