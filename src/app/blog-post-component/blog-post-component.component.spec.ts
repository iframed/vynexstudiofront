import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostComponentComponent } from './blog-post-component.component';

describe('BlogPostComponentComponent', () => {
  let component: BlogPostComponentComponent;
  let fixture: ComponentFixture<BlogPostComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
