import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TopContentComponent } from './top-content/top-content.component';
import { SearchComponent } from './search/search.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    FooterComponent,
    TopContentComponent,
    SearchComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
