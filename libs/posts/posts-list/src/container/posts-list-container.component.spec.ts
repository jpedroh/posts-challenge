import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListContainerComponent } from './posts-list-container.component';

describe('PostsPostsListComponent', () => {
  let component: PostsListContainerComponent;
  let fixture: ComponentFixture<PostsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
