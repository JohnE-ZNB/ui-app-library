import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// own components
import {ButtonComponent} from './components/button/button.component'
import { ButtonGroupComponent } from './components/button-group/button-group.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    ButtonGroupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
