import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDisplayContainerComponent } from './post-display-container.component';

describe('PostsPostDisplayComponent', () => {
  let component: PostDisplayContainerComponent;
  let fixture: ComponentFixture<PostDisplayContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDisplayContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDisplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
