import { Component } from '@angular/core';
import { RealTime } from './shared/sdk/services';

import { OfficeComponent } from './office.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuber.ai - make your idea work!';

  constructor(private rt:RealTime){
    this.rt.onReady().subscribe(() => {
    });
  }
}
