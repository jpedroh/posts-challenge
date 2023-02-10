import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Post } from '@posts-challenge/posts/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostsListFacade } from '../services/posts-list.facade';
import { PostsListService } from '../services/posts-list.service';

@Component({
  selector: 'posts-challenge-posts-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [PostsListService, PostsListFacade],
  templateUrl: './posts-list-container.component.html',
  styleUrls: ['./posts-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListContainerComponent {
  currentPage = 0;
  readonly posts$ = this.facade.posts$;
  readonly searchControl = new FormControl('');

  constructor(
    private readonly facade: PostsListFacade,
    private readonly router: Router
  ) {}

  getPostLink(post: Post) {
    return ['/posts', post.id];
  }

  pageChanged(page: number) {
    this.currentPage = page;
  }

  onSearch(evt: Event) {
    evt.preventDefault();
    this.router.navigate(['/posts', 'search'], {
      queryParams: { title: this.searchControl.value },
    });
  }
}
