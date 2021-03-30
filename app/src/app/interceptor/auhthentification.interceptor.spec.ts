import { TestBed } from '@angular/core/testing';

import { AuhthentificationInterceptor } from './auhthentification.interceptor';

describe('AuhthentificationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuhthentificationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuhthentificationInterceptor = TestBed.inject(AuhthentificationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
