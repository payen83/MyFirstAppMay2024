import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  btnAlertOld(){
    alert('Selamat Datang!!');
  }

  async btnAlert() {
    const alert = await this.alertController.create({
      header: 'Pengumuman',
      message: 'Anda berjaya!',
      buttons: ['Tutup mesej'],
    });

    await alert.present();
  }
  

}
