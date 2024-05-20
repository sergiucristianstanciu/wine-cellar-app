import { Component } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonApp, IonContent, IonItem, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonContent, IonSplitPane, IonAccordionGroup, IonAccordion, IonItem],
})
export class AppComponent {
  constructor() {}
}
