import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }        from './app.component';
import { HeroService }         from './hero.service';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
