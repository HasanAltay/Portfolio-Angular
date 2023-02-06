import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {enableProdMode,Component} from '@angular/core';

// ADD enableProdMode(); BEFORE BOOTSTRAP
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
