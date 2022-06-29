import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoFlexyModule} from '../demo-flexy-module'
import {DashboardComponent} from './dashboard.component';
import {CursosComponent} from './dashboard-components/course/cursos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FeatherModule} from "angular-feather";

@NgModule({
    declarations: [
        DashboardComponent,
        CursosComponent,
    ],
    imports: [
        CommonModule,
        DemoFlexyModule,
        FormsModule,
        NgApexchartsModule,
        FeatherModule,
        ReactiveFormsModule
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule {
}
