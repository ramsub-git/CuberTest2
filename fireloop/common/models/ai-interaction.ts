import { Model } from '@mean-expert/model';

/**
 * @module AIInteraction
 * @description
 * Write a useful AIInteraction Model description.
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
    initialize: {
      accepts : {},
      return  : {},
      http    : {path: '/initialize', verb: 'post'}
    }
  }
})

class AIInteraction {
  text: string;
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {
    console.log('AI Interaction : inside constructor');
  }

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('AIInteraction: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }

  public initialize():void {
    console.log('AI: initialize');
/*
    this.model.on('MachineSaid', (message : string) => {
      console.log('inside AI interaction server side MachineSaid event', message);
    });

    this.model.IO.on('MachineSaid', (message : string) => {
      console.log('inside AI interaction server side MachineSaid event', message);
    });
*/

  this.model.app.mx.IO.on('MachineSaid', (message : string) => {
    console.log('inside AI interaction server side MachineSaid event', message);
  });

    return;
  }
}

module.exports = AIInteraction;
