import { Component } from '@angular/core';

import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';
import { FireLoopRef } from './shared/sdk/models';


import { HumanInteraction } from './shared/sdk/models';
import { AIInteraction } from './shared/sdk/models'

@Component({
  selector: 'machine-interaction',
  templateUrl: './AIInteraction.component.html'
})
export class AIInteractionComponent {
  private AIInter : AIInteraction = new AIInteraction();
  public AIInterRef : FireLoopRef<AIInteraction>;

  constructor(private rt:RealTime) {
  }
}
