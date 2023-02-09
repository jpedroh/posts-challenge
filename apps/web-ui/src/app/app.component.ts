import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'posts-challenge-root',
  standalone: true,
  imports: [RouterModule],
  template: '<div class="container p-4"><router-outlet></router-outlet></div>',
})
export class AppComponent {}
