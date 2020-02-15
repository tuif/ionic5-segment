import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {

  public constructor(protected modalCtrl: ModalController) {}

  public async open(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    await modal.present();
  }
}
