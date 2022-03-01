// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// @ts-ignore
import {ToastrModule} from 'ngx-toastr';
// @ts-ignore
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {HttpClientModule} from '@angular/common/http';

// @ts-ignore
import {CookieService} from 'ngx-cookie-service';
// @ts-ignore

// @ts-ignore
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import {authInterceptorProviders} from './helper/auth.interceptor';
// @ts-ignore
import {BookModule} from './book/book.module';
import {environment} from '../environments/environment';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BookModule
  ],
  providers: [authInterceptorProviders,
    CookieService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '226079829493-lntk2o7i994f0t6d3hq9utrlgetsksaj.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('242513991399346')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
