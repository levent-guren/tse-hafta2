import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG } from '../app.config';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url;
  const env: any = inject(APP_CONFIG);
  let request = req;

  if (!url.startsWith('http://') && !url.startsWith('https://') &&
    !url.startsWith('/assets/')
  ) {
    // sunucuya istek yapılıyor. url'in başına sunucu url'i ekle.
    const serverHeader = req.headers.get('server');
    let sunucuUrl = env.apiUrl;
    let headers = req.headers;
    if (serverHeader && serverHeader == 'hoca') {
      sunucuUrl = env.apiUrlHoca;
      headers = headers.delete('server');
    }
    request = req.clone({
      url: sunucuUrl + url,
      headers
    });

  }
  // istekte bulunuyoruz
  const r = next(request);
  // istek geldi
  return r;
};
