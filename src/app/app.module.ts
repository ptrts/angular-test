import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'our-main',
  template: `
    <a href="">Navigate to /</a>
    <a href="a">Navigate to /a</a>
    <a href="b">Navigate to /b</a>
    <div>router-outlet name='the-out':</div>
    <router-outlet name="the-out"></router-outlet>
    <div>router-outlet, name='':</div>
    <router-outlet></router-outlet>
  `,
  styles: ['a { display: block; }']
})
class MainComponent {}

@Component({ selector: 'our-default', template: '<h1>Default</h1>' })
class DefaultComponent {}

@Component({ selector: 'our-a', template: '<h1>A</h1>', })
class AComponent {}

@Component({ selector: 'our-b', template: '<h1>B</h1>' })
class BComponent {}

const ROUTES_OK_1: Routes = [
  { path: '', component: DefaultComponent, outlet: 'the-out', pathMatch: 'full'},
  { path: 'a', component: AComponent, outlet: ''},
  { path: 'b', component: BComponent, outlet: ''}
];

const ROUTES_OK_2: Routes = [
  { path: '', component: DefaultComponent, outlet: 'the-out'},
  { path: 'a', component: AComponent, outlet: ''},
  { path: 'b', component: BComponent, outlet: ''}
];

const ROUTES_OK_3: Routes = [
  { path: '', component: DefaultComponent, outlet: '', pathMatch: 'full'},
  { path: 'a', component: AComponent, outlet: ''},
  { path: 'b', component: BComponent, outlet: ''}
];

const ROUTES_BUG_1: Routes = [
  { path: '', component: DefaultComponent, outlet: 'the-out', pathMatch: 'full'},
  { path: 'a', component: AComponent, outlet: 'the-out'},
  { path: 'b', component: BComponent, outlet: 'the-out'}
];

const ROUTES_BUG_2: Routes = [
  { path: '', component: DefaultComponent, outlet: '', pathMatch: 'full'},
  { path: 'a', component: AComponent, outlet: 'the-out'},
  { path: 'b', component: BComponent, outlet: 'the-out'}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES_BUG_1)],
  declarations: [MainComponent, DefaultComponent, AComponent, BComponent],
  bootstrap: [MainComponent]
})
export class AppModule {}
