import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StartComponent} from '../components/start/start.component';
import {MailComponent} from '../components/mail/mail.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {path: 'start', component: StartComponent},
  {path: 'internet/mail', component: MailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
