import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { PostsListService } from './posts-list.service';

@Injectable()
export class PostsListFacade {
  readonly posts$ = this.service.fetchPosts().pipe(shareReplay(1));

  constructor(private readonly service: PostsListService) {}
}
