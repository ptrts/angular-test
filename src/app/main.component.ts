import {Component} from '@angular/core';

@Component({
  selector: 'our-main',
  template: `
    <span>router-outlet:</span>
    <router-outlet></router-outlet>
    <router-outlet name="the-out"></router-outlet>
  `
})
export class MainComponent {
}
