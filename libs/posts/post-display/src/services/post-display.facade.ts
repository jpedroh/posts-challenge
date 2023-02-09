import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, shareReplay, switchMap } from 'rxjs';
import { PostDisplayService } from './post-display.service';

@Injectable()
export class PostDisplayFacade {
  private readonly postId = new BehaviorSubject<number>(-1);

  readonly post$ = this.postId.pipe(
    filter((id) => id > 0),
    switchMap((id) => this.service.fetchPostById(id)),
    shareReplay(1)
  );

  constructor(private readonly service: PostDisplayService) {}

  setPostId(postId: number) {
    this.postId.next(postId);
  }
}
