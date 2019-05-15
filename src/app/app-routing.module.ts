import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StartComponent} from '../components/start/start.component';
import {MailComponent} from '../components/mail/mail.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', redirectTo: '/sidebar', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'internet/mail', component: MailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
