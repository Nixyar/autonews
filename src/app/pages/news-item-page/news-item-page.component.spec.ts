import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemPageComponent } from './news-item-page.component';

describe('NewsItemPageComponent', () => {
  let component: NewsItemPageComponent;
  let fixture: ComponentFixture<NewsItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
