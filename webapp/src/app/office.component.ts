import { Component } from '@angular/core';
import { RealTime } from './shared/sdk/services';
import { FireLoopRef } from './shared/sdk/models';

import { HumanInteractionComponent } from './humanInteraction.component';
import { AIInteractionComponent } from './AIInteraction.component';
import {Office} from "./shared/sdk/models/Office";
import {Observable} from "rxjs";

var Rx = require('rxjs');


@Component({
  selector: 'office',
  templateUrl: './office.component.html'
})
export class OfficeComponent {
  private officeRef : FireLoopRef<Office> = null;
  private source : Array<string> = new Array<string>();
  private AISaid = Rx.Observable.from(this.source);
  constructor(private rt:RealTime){
    this.rt.onReady().subscribe(() => {

      if( this.officeRef === null) {
        this.officeRef = this.rt.FireLoop.ref<Office>(Office);
        this.officeRef.remote('initialize');
        this.rt.IO.on('MachineSaid').subscribe((text:string) => {
          console.log('got message from AI', text);
          Rx.Observable.merge(this.AISaid, Rx.Observable.from(text) );
          console.log('inside Office::MachineSaid', this.AISaid);
        });
        //.subscribe((message:string) => console.log('inside client MachineSaid', message));
      }
    });
  }
}
