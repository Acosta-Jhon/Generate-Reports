import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componenets
import { HomeComponent } from './components/home/home.component';
import { CreateRolesComponent } from './parameters/roles/create-roles/create-roles.component';
import { ListRolesComponent } from './parameters/roles/list-roles/list-roles.component';
import { CreateUsersComponent } from './parameters/users/create-users/create-users.component';
import { ListUsersComponent } from './parameters/users/list-users/list-users.component';

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

    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }