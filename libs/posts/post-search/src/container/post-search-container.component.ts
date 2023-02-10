import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostSearchFacade } from '../services/post-search.facade';
import { PostSearchService } from '../services/post-search.service';

@Component({
  selector: 'posts-challenge-post-search-container',
  standalone: true,
  providers: [PostSearchService, PostSearchFacade],
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-search-container.component.html',
  styleUrls: ['./post-search-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostSearchContainerComponent implements OnInit {
  readonly post$ = this.facade.post$;
  readonly isLoading$ = this.facade.isLoading$;

  constructor(
    private readonly facade: PostSearchFacade,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const query = this.route.snapshot.queryParamMap;
    if (query.has('title')) {
      this.facade.setPostTitle(String(query.get('title')));
    }
  }
}
