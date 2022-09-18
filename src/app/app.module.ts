import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
import { NestedmenuModule } from './nestedmenu/nestedmenu.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment.prod';


const config: SocketIoConfig = {
  url: environment.wsUrl , options: {}
};
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSlideToggleModule,
    SocketIoModule.forRoot(config),
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
          provide: TranslateLoader,
          useFactory:(createTranslateLoader),
          deps: [HttpClient]
      }, 
      isolate: true
   }),
    NestedmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
