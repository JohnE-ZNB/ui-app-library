import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// own components
import {ButtonComponent} from './components/button/button.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
