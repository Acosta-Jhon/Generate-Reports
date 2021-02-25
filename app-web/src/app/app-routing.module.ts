import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componenets
import { HomeComponent } from './components/home/home.component';
import { CreateRolesComponent } from './parameters/roles/create-roles/create-roles.component';
import { ListRolesComponent } from './parameters/roles/list-roles/list-roles.component';
import { CreateUsersComponent } from './parameters/users/create-users/create-users.component';
import { ListUsersComponent } from './parameters/users/list-users/list-users.component';
import { CreateAdressesComponent } from './parameters/addresses/create-addresses/create-addresses.component';
import { ListAddressesComponent } from './parameters/addresses/list-addresses/list-addresses.component';
import { CreateCitiesComponent } from './parameters/cities/create-cities/create-cities.component';
import { ListCitiesComponent } from './parameters/cities/list-cities/list-cities.component';







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


    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }