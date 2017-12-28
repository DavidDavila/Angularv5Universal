import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { NgModule, } from '@angular/core';
import { Http } from '@angular/http';
import {TranslateModule, TranslateLoader, } from '@ngx-translate/core';
import {TranslateHttpLoader, } from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { CustomTranslateLoader } from './translate.server.service'
export function HttpLoaderFactory(http: any) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    BrowserTransferStateModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoader
            }
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }