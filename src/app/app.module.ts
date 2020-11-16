import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './routers/app-routing.module';
import {PagesModule} from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    /*
    LoginComponent,
    RegisterComponent,
    */
    NopagefoundComponent,
    /*
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent,
    */
    /*
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent
    */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
