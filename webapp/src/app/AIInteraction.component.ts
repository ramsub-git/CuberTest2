import { Component } from '@angular/core';

import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';
import { FireLoop } from './shared/sdk/models/FireLoop';
import { FireLoopRef } from './shared/sdk/models/FireLoopRef';


import { HumanInteraction } from './shared/sdk/models';
import { AIInteraction } from './shared/sdk/models'

@Component({
  selector: 'machine-interaction',
  templateUrl: './AIInteraction.component.html'
})
export class AIInteractionComponent {
  public AIInterRef : FireLoopRef<AIInteraction>;
  private AIInter : AIInteraction = new AIInteraction();

  constructor(private rt:RealTime) {
    this.rt.onReady().subscribe(() => {

      this.AIInterRef = this.rt.FireLoop.ref<AIInteraction>(AIInteraction);

      // this.humanInterRef.on('changes', {offset:0,limit:10});

    });
  }
}
