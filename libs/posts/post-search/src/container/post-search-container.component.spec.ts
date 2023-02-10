import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchContainerComponent } from './post-search-container.component';

describe('PostsPostSearchComponent', () => {
  let component: PostSearchContainerComponent;
  let fixture: ComponentFixture<PostSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSearchContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
