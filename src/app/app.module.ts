import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ColegioComponent } from './colegio/colegio.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorDatosComponent } from './profesor/profesor-datos.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'', redirectTo:'/profesores', pathMatch:'full'},
  {path:'profesores', component:ProfesorComponent },
  {path:'profesores/datos/:id', component:ProfesorDatosComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ColegioComponent,
    ProfesorComponent,
    ProfesorDatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
