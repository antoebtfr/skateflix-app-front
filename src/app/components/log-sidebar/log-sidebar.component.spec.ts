import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSidebarComponent } from './log-sidebar.component';

describe('LogSidebarComponent', () => {
  let component: LogSidebarComponent;
  let fixture: ComponentFixture<LogSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
