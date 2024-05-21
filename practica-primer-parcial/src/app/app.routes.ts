import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: "login",
        pathMatch:"full"
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'bienvenido',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/bienvenido/bienvenido.component').then((m) => m.BienvenidoComponent)
    },
    {
        path: 'busqueda',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/busqueda/busqueda.component').then((m) => m.BusquedaComponent)
    },
    {
        path: 'peliculas/alta',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/pelicula/pelicula-alta/pelicula-alta.component').then((m) => m.PeliculaAltaComponent)
    },
    {
        path: 'actor/alta',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/actor/actor-alta/actor-alta.component').then((m) => m.ActorAltaComponent)
    },
    {
        path: 'actor/listado',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/actor/actor-listado/actor-listado.component').then((m) => m.ActorListadoComponent)
    },
    {
        path: 'peliculas/listado',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/pelicula/pelicula-listado/pelicula-listado.component').then((m) => m.PeliculaListadoComponent)
    },
    {
        path: 'actor/actorPelicula',
        canActivate: [adminGuard],
        loadComponent: () => import('./components/actor/actor-pelicula/actor-pelicula.component').then((m) => m.ActorPeliculaComponent)
    },

   
];
