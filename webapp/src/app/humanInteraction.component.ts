import { Component } from '@angular/core';

import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';
import { FireLoopRef } from './shared/sdk/models';

import { HumanInteraction } from './shared/sdk/models';
import { AIInteraction } from './shared/sdk/models';
import { Office } from './shared/sdk/models';

@Component({
  selector: 'human-interaction',
  templateUrl: './humanInteraction.component.html'
})
export class HumanInteractionComponent {

  private humanInter : HumanInteraction = new HumanInteraction({ text: '' });
  private humanInterRef : FireLoopRef<HumanInteraction>;

  constructor(private rt:RealTime){
    this.rt.onReady().subscribe(() => {

      this.humanInterRef = this.rt.FireLoop.ref<HumanInteraction>(HumanInteraction);

      // this.humanInterRef.on('changes', {offset:0,limit:10});

    });
  }



  createHuman(text:string): void {
    let lHumanInteraction : HumanInteraction = new HumanInteraction({"text":""});
    let lHumanRef : FireLoopRef<HumanInteraction> = this.rt.FireLoop.ref<HumanInteraction>(HumanInteraction);
    let lAIRef : FireLoopRef<AIInteraction> = this.rt.FireLoop.ref<AIInteraction>(AIInteraction);
    let lAI : AIInteraction;
    lAIRef.create(lAI).subscribe((llAI : AIInteraction) => {lAI.text = this.humanInter.text});

    lHumanRef.create(this.humanInter).subscribe((instance:HumanInteraction) => {
      console.log('inside CreateHuman');
      var lOfficeRef: FireLoopRef<Office> = this.rt.FireLoop.ref<Office>(Office);
      lOfficeRef.remote('humanSaid', Array(instance.text));
      console.log(instance);
    });
    this.humanInter = lHumanInteraction;
  }
}
