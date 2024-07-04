import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  {
    path: 'splash',
    loadChildren: () => import('./slide/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slide/slider/slider.module').then(m => m.SliderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'voucher',
    loadChildren: () => import('./pages/voucher/voucher.module').then(m => m.VoucherPageModule)
  },
  {
    path: 'riwayat',
    loadChildren: () => import('./pages/riwayat/riwayat.module').then(m => m.RiwayatPageModule)
  },
  {
    path: 'tarif',
    loadChildren: () => import('./pages/tarif/tarif.module').then(m => m.TarifPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
