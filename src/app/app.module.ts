import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoHomepageComponent } from './components/video-homepage/video-homepage.component';
import { WeeklyTopComponent } from './components/weekly-top/weekly-top.component';
import { LogSidebarComponent } from './components/log-sidebar/log-sidebar.component';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';
import { InscriptionFormComponent } from './components/inscription-form/inscription-form.component';
import { VariablesGlobales } from './variable-globale/variable-global';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    VideoHomepageComponent,
    WeeklyTopComponent,
    LogSidebarComponent,
    ConnectionFormComponent,
    InscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
