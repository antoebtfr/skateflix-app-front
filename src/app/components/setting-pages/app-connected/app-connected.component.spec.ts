import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConnectedComponent } from './app-connected.component';

describe('AppConnectedComponent', () => {
  let component: AppConnectedComponent;
  let fixture: ComponentFixture<AppConnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
