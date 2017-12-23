import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from '../store/store'; 
import { CounterActions } from './../actions/app.actions';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    BrowserTransferStateModule,
    NgReduxModule
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
      ngRedux: NgRedux<IAppState>,
      devTools: DevToolsExtension){
    
    const storeEnhancers = devTools.isEnabled() ?
          [ devTools.enhancer() ] :
          []; 

        ngRedux.configureStore(
          rootReducer,
          INITIAL_STATE,
          [],
          storeEnhancers);
  }
}