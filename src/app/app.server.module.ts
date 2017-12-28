import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import {TranslateModule, TranslateLoader, } from '@ngx-translate/core';
import {TranslateHttpLoader, } from '@ngx-translate/http-loader';
import { CustomTranslateLoader } from './translate.server.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';


export function HttpLoaderFactory(http: any) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoader
            }
        }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }