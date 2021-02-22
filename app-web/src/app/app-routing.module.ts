import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateUsersComponent } from './parameters/users/create-users/create-users.component';
import { ListUsersComponent } from './parameters/users/list-users/list-users.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users/list-users', component: ListUsersComponent },
    { path: 'users/create-user', component: CreateUsersComponent },
    { path: 'users/edit-user/:id', component: CreateUsersComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }