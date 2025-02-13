import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('before api call token interceptero is called');

  const reqWithHeader = req.clone({
    headers: req.headers.set('X-New-Header', 'new header value'),
  });
  
  return next(reqWithHeader);
};
