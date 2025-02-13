import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkRegisterGuard } from './check-register.guard';

describe('checkRegisterGuard', () => 
{
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkRegisterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
