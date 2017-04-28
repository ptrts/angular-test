import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from './error.component';
import {MainComponent} from './main.component';
import {NavbarComponent} from './navbar.component';

const ROUTES: Routes = [
  {
    path: '',
    component: NavbarComponent,
    outlet: 'the-out'
  },
  {
    path: 'error',
    component: ErrorComponent,
    outlet: 'the-out'
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
