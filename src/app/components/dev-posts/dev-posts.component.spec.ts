import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPostsComponent } from './dev-posts.component';

describe('DevPosts', () => {
  let component: DevPostsComponent;
  let fixture: ComponentFixture<DevPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
