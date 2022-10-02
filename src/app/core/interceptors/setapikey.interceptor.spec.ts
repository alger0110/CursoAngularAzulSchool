import { TestBed } from '@angular/core/testing';

import { SetapikeyInterceptor } from './setapikey.interceptor';

describe('SetapikeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetapikeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetapikeyInterceptor = TestBed.inject(SetapikeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
