import { Component } from '@angular/core';
import { NitsanService } from '@shared-services';

@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'funnel';

  constructor(nitsanService: NitsanService) {
    nitsanService.logMessage('funnel');
  }
}
