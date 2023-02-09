import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

export const ROUTES: Route[] = [];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
});
