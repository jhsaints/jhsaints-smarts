import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Aqui fala em qual plataforma vai rodar

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';  // Arquivo de ambiente

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)  // Diz que o modulo da aplicação bootstrape("inicialização") sera o "AppModule"
  .catch(err => console.error(err));
