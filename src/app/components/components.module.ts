import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {ProyectoComponent} from './proyecto/proyecto.component';
import {DemoFlexyModule} from '../demo-flexy-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "./login/login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        ProyectoComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FeatherModule.pick(allIcons),
        DemoFlexyModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        ProyectoComponent,
        LoginComponent
    ]
})
export class ComponentsModule {
}
