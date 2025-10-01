import { ApplicationConfig, InjectionToken, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { urlInterceptor } from './interceptors/url.interceptor';

import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';

export const APP_CONFIG = new InjectionToken('App Config');
registerLocaleData(tr, 'tr-TR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // birden fazla interceptor olduunda array içindeki
    // verilen sırada çalıştırılırlar 
    provideHttpClient(withInterceptors([urlInterceptor])),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    {
      provide: LOCALE_ID,
      useValue: 'tr-TR'
    }

  ]
};
