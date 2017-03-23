import { Model } from '@mean-expert/model';
import {AIInteraction} from "../../../webapp/src/app/shared/sdk/models/AIInteraction";


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
    }
  }
})

class Office {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {
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
    lai.text = text;

    this.model.emit('on', lai);

    return text;
  }
}

module.exports = Office;
