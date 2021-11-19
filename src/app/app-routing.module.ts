import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'loginAlt',
    loadChildren: () =>
      import('./pages/login-alt/login-alt.module').then(
        (m) => m.LoginAltModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'nav',
    loadChildren: () =>
      import('./pages/nav/nav.module').then((m) => m.NavModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
