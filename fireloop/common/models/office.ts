import { Model } from '@mean-expert/model';
import {AIInteraction} from "../../../webapp/src/app/shared/sdk/models/AIInteraction";
import {HumanInteraction} from "../../../webapp/src/app/shared/sdk/models/HumanInteraction";

var app = require('../../server/server');

/**
 * @module Office
 * @description
 * Write a useful Office Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    myRemote: {
      returns : { arg: 'result', type: 'array' },
      http    : { path: '/my-remote', verb: 'get' }
    },
    humanSaid: {
      accepts : {arg: 'text', type: 'string'},
      return  : {arg: 'text', type: 'string'},
      http    : {path: '/humansaid', verb: 'post'}
    },
    initialize: {
      accepts : {},
      return  : {},
      http    : {path: '/initialize', verb: 'post'}
    }
  }
})

class Office {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {
    console.log('Inside Office Constructor');


    this.model.on('MachineSaid', (message : string) => {
      console.log('inside server side MachineSaid event', message);
    });

    this.model.on('HumanSaid', (message : string) => {
      console.log('inside event', message);
    });

    console.log('after attaching to the event');

  }

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('Office: Before Save');

    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }

  humanSaid(text:string):string {
    console.log('Office: inside humanSaid');

    var lai : AIInteraction = new AIInteraction();

    this.model.emit('HumanSaid', text);

    console.log('After Emit HumanSaid');


    // this.model.IO.emit('MachineSaid', text);

    console.log('after emitting machine said');

    return text;
  }

  public initialize():void {
    console.log('Office: initialize');

    var human = app.models.HumanInteraction;
    var machine = app.models.AIInteraction;

    human.initialize();
    machine.initialize();

    return;
  }

}

module.exports = Office;
