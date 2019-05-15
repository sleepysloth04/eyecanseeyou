import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {StartComponent} from '../components/start/start.component';
import {MailComponent} from '../components/mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StartComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
