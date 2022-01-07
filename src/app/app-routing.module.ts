import { AracDetayComponent } from './components/arac-detay/arac-detay.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth';

const routes: Routes = [
  { path: "", component: AnasayfaComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  {
    path: 'arac/:id',
    component: AracDetayComponent, canActivate: [AuthGuard],
    data: {
      yetkiler: ['Admin', "Uye"],
      gerigit: '/login'
    }

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
