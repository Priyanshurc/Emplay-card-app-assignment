import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  template: '<app-card-list />'
})
export class AppComponent {}
