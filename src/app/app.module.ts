import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { AboutComponent } from 'src/about/about.component';
import { PortofolioComponent } from 'src/portofolio/portofolio.component';
import { ContactComponent } from 'src/contact/contact.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { FooterComponent } from 'src/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent , HomeComponent , AboutComponent , PortofolioComponent , ContactComponent , NavbarComponent , FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
