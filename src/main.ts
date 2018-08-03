import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { environment } from './environments/environment';

//When prod is enabled, by setting the environment variable in package.json "npm run prod" script --
//We restrict all console log printing with the code on line 10.
if (environment.production) {
  window.console.log = function () { };
  enableProdMode();
}

console.log('Running in prod mode:', environment.production);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
