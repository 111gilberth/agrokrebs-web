import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from '../commons/buttons/buttons.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../commons/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AgrokrebsComponent } from './pages/agrokrebs/agrokrebs.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VideosComponent } from './pages/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    FormComponent,
    InicioComponent,
    GaleriaComponent,
    CreditoComponent,
    ContactoComponent,
    AgrokrebsComponent,
    ProductosComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
