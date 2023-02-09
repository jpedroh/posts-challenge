import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PostDisplayFacade } from '../services/post-display.facade';
import { PostDisplayService } from '../services/post-display.service';

@Component({
  selector: 'posts-challenge-post-display-container',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostDisplayFacade, PostDisplayService],
  templateUrl: './post-display-container.component.html',
  styleUrls: ['./post-display-container.component.css'],
})
export class PostDisplayContainerComponent implements OnInit {
  private readonly post$ = this.facade.post$;

  readonly title$ = this.post$.pipe(map((post) => (post ? post.title : '')));
  readonly body$ = this.post$.pipe(map((post) => (post ? post.body : '')));

  constructor(
    private readonly facade: PostDisplayFacade,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    if (params.get('postId') && !isNaN(Number(params.get('postId')))) {
      this.facade.setPostId(Number(params.get('postId')));
    }
  }
}
