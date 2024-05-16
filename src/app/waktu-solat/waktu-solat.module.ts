import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaktuSolatPageRoutingModule } from './waktu-solat-routing.module';

import { WaktuSolatPage } from './waktu-solat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaktuSolatPageRoutingModule
  ],
  declarations: [WaktuSolatPage]
})
export class WaktuSolatPageModule {}
