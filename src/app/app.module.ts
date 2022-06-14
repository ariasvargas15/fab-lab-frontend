import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {FormsModule} from '@angular/forms'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FullComponent} from './layouts/full/full.component';
import {DemoFlexyModule} from './demo-flexy-module'

// Modules
import {DashboardModule} from './dashboard/dashboard.module';
import {ComponentsModule} from './components/components.module';
import {TokenStorageService} from "./service/token-storage.service";
import {LoginComponent} from "./components/login/login.component";
import {AuthService} from "./service/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FeatherModule.pick(allIcons),
        DemoFlexyModule,
        DashboardModule,
        ComponentsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [TokenStorageService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
