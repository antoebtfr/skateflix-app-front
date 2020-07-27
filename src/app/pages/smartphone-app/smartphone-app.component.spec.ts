import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneAppComponent } from './smartphone-app.component';

describe('SmartphoneAppComponent', () => {
  let component: SmartphoneAppComponent;
  let fixture: ComponentFixture<SmartphoneAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
