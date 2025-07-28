import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePosts } from './life-posts';

describe('LifePosts', () => {
  let component: LifePosts;
  let fixture: ComponentFixture<LifePosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifePosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifePosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
