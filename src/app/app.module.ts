import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CopayOnboarding } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    CopayOnboarding,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CopayOnboarding)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CopayOnboarding,
    WelcomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
