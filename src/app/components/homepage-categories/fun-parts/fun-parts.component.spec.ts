import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunPartsComponent } from './fun-parts.component';

describe('FunPartsComponent', () => {
  let component: FunPartsComponent;
  let fixture: ComponentFixture<FunPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
