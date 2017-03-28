import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RealTime } from './shared/sdk/services';
import { FireLoopRef } from './shared/sdk/models/FireLoopRef';

import { AIInteraction } from './shared/sdk/models'
import {Observable} from "rxjs";
import {mergeScan} from "rxjs/operator/mergeScan";

@Component({
  selector: 'machine-interaction',
  templateUrl: './AIInteraction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AIInteractionComponent {
  public AIInterRef : FireLoopRef<AIInteraction>;

  private AIInters : Observable<Array<AIInteraction>> = new Observable<Array<AIInteraction>>();
  private AIInter : AIInteraction = new AIInteraction({ text: '' });

  constructor(private rt:RealTime) {
    this.rt.onReady().subscribe(() => {

      this.AIInterRef = this.rt.FireLoop.ref<AIInteraction>(AIInteraction);

      this.AIInterRef.on('changes').subscribe((AIInters:Array<AIInteraction>) => {
        // this.AIInters = AIInters;
        console.log('count ', this.AIInters);
        console.log('inside onchange');
      });
      // this.humanInterRef.on('changes', {offset:0,limit:10});

      this.rt.IO.on('MachineSaid').subscribe((message:string) => console.log('inside client MachineSaid', message));

    });
  }

  createAI(text:string): void {
    console.log('inside CreateAI');
    var lAIRef : FireLoopRef<AIInteraction> = this.rt.FireLoop.ref<AIInteraction>(AIInteraction);
    let lAI : AIInteraction;
    lAIRef.create(lAI).subscribe((llAI : AIInteraction) => {lAI.text = this.AIInter.text});
    this.AIInter = lAI;
  }
}
