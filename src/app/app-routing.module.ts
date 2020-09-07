import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'advertise',
    loadChildren: () => import('./advertise/advertise.module').then( m => m.AdvertisePageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'suggestion',
    loadChildren: () => import('./suggestion/suggestion.module').then( m => m.SuggestionPageModule)
  },
  {
    path: 'sthanak-detail',
    loadChildren: () => import('./sthanak-detail/sthanak-detail.module').then( m => m.SthanakDetailPageModule)
  },
  {
    path: 'member-detail',
    loadChildren: () => import('./member-detail/member-detail.module').then( m => m.MemberDetailPageModule)
  },
  {
    path: 'sthanak-join',
    loadChildren: () => import('./sthanak-join/sthanak-join.module').then( m => m.SthanakJoinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
