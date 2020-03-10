import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcribingComponent } from './subcribing.component';

describe('SubcribingComponent', () => {
  let component: SubcribingComponent;
  let fixture: ComponentFixture<SubcribingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcribingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
