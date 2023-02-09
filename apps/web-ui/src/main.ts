import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts',
    loadComponent: async () => {
      const mod = await import('@posts-challenge/posts/posts-list');
      return mod.PostsListContainerComponent;
    },
  },
  {
    path: 'posts/:postId',
    loadComponent: async () => {
      const mod = await import('@posts-challenge/posts/post-display');
      return mod.PostDisplayContainerComponent;
    },
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
});
