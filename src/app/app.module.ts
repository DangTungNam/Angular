import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductNarutoComponent } from './product-naruto/product-naruto.component';
import { ProductOnepieceComponent } from './product-onepiece/product-onepiece.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductNarutoComponent,
    ProductOnepieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
