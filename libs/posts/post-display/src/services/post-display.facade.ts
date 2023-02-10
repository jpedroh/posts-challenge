import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, shareReplay, switchMap, tap } from 'rxjs';
import { PostDisplayService } from './post-display.service';

@Injectable()
export class PostDisplayFacade {
  private readonly postId = new BehaviorSubject<number>(-1);
  private readonly isLoading = new BehaviorSubject(true);

  readonly isLoading$ = this.isLoading.asObservable();
  readonly post$ = this.postId.pipe(
    filter((id) => id > 0),
    tap(() => this.isLoading.next(true)),
    switchMap((id) => this.service.fetchPostById(id)),
    tap(() => this.isLoading.next(false)),
    shareReplay(1)
  );

  constructor(private readonly service: PostDisplayService) {}

  setPostId(postId: number) {
    this.postId.next(postId);
  }
}
