import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Level1Component} from './level-1.component';
import {Level2Component} from './level-2.component';
import {Level3Component} from './level-3.component';
import {Route, RouterModule} from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    component: Level2Component,
    outlet: 'out1',
    children: [
      {
        path: '',
        component: Level3Component,
        outlet: 'out2'
      }
    ]
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    Level1Component,
    Level2Component,
    Level3Component,
  ],
  bootstrap: [Level1Component]
})
export class AppModule {
}
