import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostsListFacade } from '../services/posts-list.facade';
import { PostsListService } from '../services/posts-list.service';

@Component({
  selector: 'posts-challenge-posts-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostsListService, PostsListFacade],
  templateUrl: './posts-list-container.component.html',
  styleUrls: ['./posts-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListContainerComponent {
  readonly posts$ = this.facade.posts$;

  constructor(private readonly facade: PostsListFacade) {}
}
