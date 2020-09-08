import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgrokrebsComponent } from './pages/agrokrebs/agrokrebs.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreditoComponent } from './pages/credito/credito.component';


const routes: Routes = [
    {
      path: 'inicio',
      component: InicioComponent
    },
    {
      path: 'agrokrebs',
      component: AgrokrebsComponent
    },
    {
      path: 'productos',
      component: ProductosComponent
    },
    {
      path: 'videos',
      component: VideosComponent
    },
    {
      path: 'galeria',
      component: GaleriaComponent
    },
    {
      path: 'contacto',
      component: ContactoComponent

    },
    {
      path: 'credito',
      component: CreditoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
