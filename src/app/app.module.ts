import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from 'src/app/components/demo.component';
import { DemocomponentComponent } from './components/democomponent/democomponent.component';

@NgModule({
  declarations: [
    AppComponent, DemoComponent, DemocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
