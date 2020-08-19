import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettPremiumComponent } from './sett-premium.component';

describe('SettPremiumComponent', () => {
  let component: SettPremiumComponent;
  let fixture: ComponentFixture<SettPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
