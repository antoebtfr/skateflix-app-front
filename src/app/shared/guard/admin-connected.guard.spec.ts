import { TestBed, async, inject } from '@angular/core/testing';

import { AdminConnectedGuard } from './admin-connected.guard';

describe('AdminConnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminConnectedGuard]
    });
  });

  it('should ...', inject([AdminConnectedGuard], (guard: AdminConnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
