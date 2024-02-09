import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { ContactComponent } from 'src/contact/contact.component';
import { HomeComponent } from 'src/home/home.component';
import { PortofolioComponent } from 'src/portofolio/portofolio.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "about", component: AboutComponent, title: "About" },
  { path: "portfolio", component: PortofolioComponent, title: "Portfolio" },
  { path: "contact", component: ContactComponent, title: "Contact" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
