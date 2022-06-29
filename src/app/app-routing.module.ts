import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProyectoComponent} from './components/proyecto/proyecto.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FullComponent} from './layouts/full/full.component';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full',},
    {path: "login", component: LoginComponent},
    {
        path: '',
        component: FullComponent,
        children: [
            {path: "home", component: DashboardComponent},
            {path: "proyecto", component: ProyectoComponent},
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full',},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
