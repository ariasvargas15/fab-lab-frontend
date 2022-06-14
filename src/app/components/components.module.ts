import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertsComponent} from './alerts/alerts.component';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {FormsComponent} from './forms/forms.component';
import {DemoFlexyModule} from '../demo-flexy-module';
import {GridListComponent} from './grid-list/grid-list.component';
import {MenuComponent} from './menu/menu.component';
import {TabsComponent} from './tabs/tabs.component';
import {ExpansionComponent} from './expansion/expansion.component';
import {ChipsComponent} from './chips/chips.component';
import {ProgressComponent} from './progress/progress.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ProgressSnipperComponent} from './progress-snipper/progress-snipper.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {SliderComponent} from './slider/slider.component';
import {SlideToggleComponent} from './slide-toggle/slide-toggle.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {TooltipsComponent} from './tooltips/tooltips.component'
import {LoginComponent} from "./login/login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        AlertsComponent,
        FormsComponent,
        GridListComponent,
        MenuComponent,
        TabsComponent,
        ExpansionComponent,
        ChipsComponent,
        ProgressComponent,
        ToolbarComponent,
        ProgressSnipperComponent,
        SnackbarComponent,
        SliderComponent,
        SlideToggleComponent,
        ButtonsComponent,
        TooltipsComponent,
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
        AlertsComponent,
        FormsComponent,
        GridListComponent,
        MenuComponent,
        TabsComponent,
        ExpansionComponent,
        ChipsComponent,
        ProgressComponent,
        ToolbarComponent,
        ProgressSnipperComponent,
        SnackbarComponent,
        SliderComponent,
        SlideToggleComponent,
        ButtonsComponent,
        LoginComponent
    ]
})
export class ComponentsModule {
}