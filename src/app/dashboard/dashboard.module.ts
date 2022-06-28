import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoFlexyModule} from '../demo-flexy-module'
import {DashboardComponent} from './dashboard.component';
import {SalesComponent} from './dashboard-components/sales/sales.component';
import {ActivityComponent} from './dashboard-components/activity/activity.component';
import {ProductComponent} from './dashboard-components/product/product.component';
import {CursosComponent} from './dashboard-components/course/cursos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FeatherModule} from "angular-feather";

@NgModule({
    declarations: [
        DashboardComponent,
        SalesComponent,
        ActivityComponent,
        ProductComponent,
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
        SalesComponent,
        ActivityComponent,
        ProductComponent,
    ]
})
export class DashboardModule {
}
