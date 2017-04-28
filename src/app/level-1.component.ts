import {Component} from '@angular/core';

@Component({
  selector: 'level-1',
  template: `
    <h1>level-1</h1>
    <router-outlet name="out1"></router-outlet>
  `,
})
export class Level1Component {
}
