import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaktuSolatPage } from './waktu-solat.page';

const routes: Routes = [
  {
    path: '',
    component: WaktuSolatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaktuSolatPageRoutingModule {}
