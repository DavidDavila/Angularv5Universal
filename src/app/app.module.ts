import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE, } from '../store/store'; 
import { CounterActions, NameActions, DogsActions } from './../actions/';

import { NgReduxRouterModule, NgReduxRouter, UPDATE_LOCATION } from '@angular-redux/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { DogsService } from './shared/services/dogs.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserTransferStateModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [CounterActions, NameActions, DogsActions, DogsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
      ngRedux: NgRedux<IAppState>,
      ngReduxRouter: NgReduxRouter,
      devTools: DevToolsExtension){
    
    const storeEnhancers = devTools.isEnabled() ?
          [ devTools.enhancer() ] :
          []; 

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}