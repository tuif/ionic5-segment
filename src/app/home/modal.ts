import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    template: `
<ion-content>
    <ion-segment [(ngModel)]="current">
        <ion-segment-button value="first">First</ion-segment-button>
        <ion-segment-button value="second">Second</ion-segment-button>
    </ion-segment>
    <ion-button (click)="close()">Close</ion-button>
<ion-content>`,
})
export class ModalComponent {
    public current: 'first' | 'second' = 'first';

    public constructor(protected modalCtrl: ModalController) {}

    public close(): void {
        this.modalCtrl.dismiss();
    }
}
