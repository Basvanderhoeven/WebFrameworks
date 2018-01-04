import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component'; 
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { NavSecondComponent } from './joren/navSecond/navSecond.component';
import { UitlegComponent } from './uitleg/uitleg.component';
import { UitlegBas } from './uitlegBas/uitlegBas.component';
import { UitlegJoren } from './uitlegJoren/uitlegJoren.component';
import { DichtsteWcComponent } from './joren/dichtsteWc/dichtsteWc.component';
import { DichtsteWcBalkComponent } from './joren/dichtsteWcBalk/dichtsteWcBalk.component';
import { WcService } from './services/wc.service';
import { HttpClientModule } from '@angular/common/http';
import { buurtWcComponent } from './joren/buurtWc/buurtWc.component';
import { StraatWcComponent } from './joren/straatWc/straatWc.component';
import { RolstoelWcComponent } from './joren/rolstroelWc/rolstoelWc.component';
import { StraatWcBalkComponent } from './joren/straatWcBalk/straatwcBalk.component';
import { MuseaComponent } from './bas/musea/musea.component';
import { ConcertgebouwenComponent } from './bas/concertgebouwen/concertgebouwen.component';
import { ConcertgebouwComponent } from './bas/concertgebouw/concertgebouw.component';
import { VeloPuntenComponent } from './bas/velo-punten/velo-punten.component';
import { DichtsteMuseumComponent } from './bas/dichtste-museum/dichtste-museum.component';
import { SecondNavBasComponent } from './bas/second-nav-bas/second-nav-bas.component';
import { MuseumComponent } from './bas/museum/museum.component';
import { MuseaService } from './services/musea.service';
import { ConcertgebouwenService } from './services/concertgebouwen.service';
import { VeloPuntenService } from './services/velopunten.service';
import { VeloPuntComponent } from  './bas/velo-punt/velo-punt.component';
import { RandomMuseumComponent } from './bas/randomMuseum/randomMuseum.component';
import { RandomMuseumBalkComponent } from './bas/randomMuseumBalk/randomMuseumBalk.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GroupComponent,
    NavSecondComponent,
    UitlegComponent,
    UitlegBas,
    UitlegJoren,
    DichtsteWcComponent,
    DichtsteWcBalkComponent,
    buurtWcComponent,
    StraatWcComponent,
    RolstoelWcComponent,
    StraatWcBalkComponent,

    SecondNavBasComponent,
    ConcertgebouwenComponent,
    ConcertgebouwComponent,
    VeloPuntenComponent,
    VeloPuntComponent,
    DichtsteMuseumComponent,
    MuseaComponent,
    MuseumComponent,
    RandomMuseumComponent,
    RandomMuseumBalkComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component : HomeComponent},
      {path: "dichtsteWc", component : DichtsteWcComponent},
      {path: "buurtWc", component : buurtWcComponent},
      {path: "rolstoelWc", component : RolstoelWcComponent},
      {path: "straatWc", component: StraatWcComponent},
      {path: "musea", component : MuseaComponent},
      {path: "concertgebouwen", component : ConcertgebouwenComponent},
      {path: "velopunten", component : VeloPuntenComponent},
      {path: "dichtsteMuseum", component : DichtsteMuseumComponent},
      {path: "randomMuseum", component : RandomMuseumComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "**", component : PageNotFoundComponent}
    ], {useHash: true}),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [WcService, MuseaService, ConcertgebouwenService, VeloPuntenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
