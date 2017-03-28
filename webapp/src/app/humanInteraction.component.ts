import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';
import { FireLoopRef } from './shared/sdk/models';
import { FireLoop } from './shared/sdk/models/FireLoop';

import { HumanInteraction } from './shared/sdk/models';
import { AIInteraction } from './shared/sdk/models';
import { Office } from './shared/sdk/models';

@Component({
  selector: 'human-interaction',
  templateUrl: './humanInteraction.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HumanInteractionComponent {

  private humanInter : HumanInteraction = new HumanInteraction({ text: '' });
  private humanInterRef : FireLoopRef<HumanInteraction>;

  constructor(private rt:RealTime){
  }

  humanSaid(text:string): void {

    let lAI : AIInteraction = new AIInteraction({text:""});

    let lHumanInteraction : HumanInteraction = new HumanInteraction({"text":""});
    let lHumanRef : FireLoopRef<HumanInteraction> = this.rt.FireLoop.ref<HumanInteraction>(HumanInteraction);

    lHumanRef.create(this.humanInter).subscribe((instance:HumanInteraction) => {
      console.log('inside CreateHuman');
      lHumanRef.remote('humanSaid', Array(instance.text));
      console.log(instance);
    });
    this.humanInter = lHumanInteraction;
  }
}
