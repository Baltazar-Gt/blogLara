import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AutorComponent } from './pages/autor/autor.component';
import { AutoresComponent } from './components/autores/autores.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriasUnoComponent } from './pages/categorias-uno/categorias-uno.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { UsuariosComponent } from './pages/admin-pages/usuarios/usuarios.component';
import { AgregarPostComponent } from './pages/agregar-post/agregar-post.component';
import { AgregarCategoriaComponent } from './pages/admin-pages/agregar-categoria/agregar-categoria.component';
import { PerfilComponent } from './pages/admin-pages/perfil/perfil.component';
import { AdmPostsComponent } from './pages/admin-pages/adm-posts/adm-posts.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },{
        path: 'inicio',
        component: InicioComponent,
        data: { animation: 'openClosePage' }
    },{
        path: 'autor',
        component: AutoresComponent
    },{
        path: 'autor/:id',
        component: AutorComponent
    },{
        path: 'categoria',
        component: CategoriasComponent
    },{
        path: 'categoria/:id',
        component: CategoriasUnoComponent
    },{
        path: 'posts',
        component: PostsComponent
    },{
        path: 'posts/:id',
        component: PostComponent
    },{
        path: 'login',
        component: LoginComponent
    },{
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard]
    },{
        path: 'admin/usuarios',
        component: UsuariosComponent,
        canActivate: [authGuard]
    },{
        path: 'admin/posts',
        component: AgregarPostComponent,
        canActivate: [authGuard]
    },{
        path: 'admin/admPosts',
        component: AdmPostsComponent,
        canActivate: [authGuard]
    },{
        path: 'admin/categorias',
        component: AgregarCategoriaComponent,
        canActivate: [authGuard]
    },{
        path: 'perfil',
        component:PerfilComponent,
        canActivate: [authGuard]
    },{
        path: 'about',
        component: AboutComponent
    }
];
