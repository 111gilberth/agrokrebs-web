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
import { FooterComponent } from '../commons/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalVideoComponent } from '../commons/modal-video/modal-video.component';
import { FormCreditComponent } from '../commons/form-credit/form-credit.component';
import { HttpClientModule } from '@angular/common/http';


// Override JSON.parse for debug purposes
  (function () {
      var parse = JSON.parse;

      JSON.parse = function (str) {
          try {
              return parse.apply(this, arguments);
          } catch (e) {
              console.log('Error parsing', arguments);
              throw e;
          }
      }
  }());


  // Override XMLHttpRequest.open
  (function() {
      var origOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
          this.addEventListener('load', function() {
              console.log('Http Response', this.responseText, this);
          });
          origOpen.apply(this, arguments);
      };
  })();

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
    VideosComponent,
    FooterComponent,
    ModalVideoComponent,
    FormCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
