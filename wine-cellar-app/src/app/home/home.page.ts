import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButton, IonIcon, IonButtons, IonMenu, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButton, IonButtons, IonIcon, IonMenu, IonItem],
})
export class HomePage {
  constructor() {}
}
