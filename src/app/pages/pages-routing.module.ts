import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/services/shell.service';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { EventsComponent } from '@pages/events/events.component';
import { ARoomComponent } from './artist-room/aroom.component';
import { WalletComponent } from './wallet/wallet.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'events',
      component: EventsComponent,
    },
    {
      path: 'aroom',
      component: ARoomComponent,
    },
    {
      path: 'wallet',
      component: WalletComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },

    {
      path: 'users',
      loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    },

    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
