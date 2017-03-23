import { Component } from '@angular/core';

import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';

import { HumanInteraction } from './shared/sdk/models';
import { FireLoopRef } from './shared/sdk/models';
import {AIInteraction} from "./shared/sdk/models/AIInteraction";

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
