import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHomepageComponent } from './video-homepage.component';

describe('VideoHomepageComponent', () => {
  let component: VideoHomepageComponent;
  let fixture: ComponentFixture<VideoHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
