import { SharedModule } from './shared/module/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoHomepageComponent } from './components/video-homepage/video-homepage.component';
import { WeeklyTopComponent } from './components/homepage-categories/weekly-top/weekly-top.component';
import { LogSidebarComponent } from './components/log-sidebar/log-sidebar.component';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';
import { InscriptionFormComponent } from './components/inscription-form/inscription-form.component';
import { ModalConf } from './variable-globale/modal-conf';
import { SubcribingComponent } from './components/homepage-categories/subcribing/subcribing.component';
import { DocumentaryComponent } from './components/homepage-categories/documentary/documentary.component';
import { LocalsComponent } from './components/homepage-categories/locals/locals.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserConf } from './variable-globale/user-conf';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    VideoHomepageComponent,
    WeeklyTopComponent,
    LogSidebarComponent,
    ConnectionFormComponent,
    InscriptionFormComponent,
    SubcribingComponent,
    DocumentaryComponent,
    LocalsComponent,
    CategoriesComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ModalConf, UserConf],
  bootstrap: [AppComponent]
})
export class AppModule { }
