import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSectionComponent } from './profil-section.component';

describe('ProfilSectionComponent', () => {
  let component: ProfilSectionComponent;
  let fixture: ComponentFixture<ProfilSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
