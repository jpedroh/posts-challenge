import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, shareReplay, switchMap, tap } from 'rxjs';
import { PostSearchService } from './post-search.service';

@Injectable()
export class PostSearchFacade {
  private readonly postTitle = new BehaviorSubject('');
  private readonly isLoading = new BehaviorSubject(true);

  readonly isLoading$ = this.isLoading.asObservable();

  readonly post$ = this.postTitle.pipe(
    filter((title) => !!title),
    tap(() => this.isLoading.next(true)),
    switchMap((title) => this.service.fetchPostByTitle(title)),
    tap(() => this.isLoading.next(false)),
    shareReplay(1)
  );

  constructor(private readonly service: PostSearchService) {}

  setPostTitle(postTitle: string) {
    this.postTitle.next(postTitle);
  }
}
