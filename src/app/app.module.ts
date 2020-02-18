import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { IntroComponent } from "./components/intro/intro.component";
import { SponsorsComponent } from "./components/sponsors/sponsors.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsCardsComponent } from './components/projects-cards/projects-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroComponent,
    SponsorsComponent,
    FooterComponent,
    ContactComponent,
    ProjectsCardsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
