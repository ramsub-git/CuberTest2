import { Model } from '@mean-expert/model';
/**
 * @module HumanInteraction
 * @description
 * Write a useful HumanInteraction Model description.
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

class HumanInteraction {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {
    /*
    this.model.on('HumanSaid').subscribe((text:string) => {console.log('inside human interaction remote humansaid', text)});
    this.model.on('MachineSaid', (message : string) => {
      console.log('inside human interaction server side MachineSaid event', message);
    });
    */
  }

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('HumanInteraction: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }

  humanSaid(text:string):string {
    console.log('Human Interaction: inside humanSaid');


    this.model.app.mx.IO.emit('HumanSaid', text, true);

    this.model.app.mx.IO.emit('MachineSaid', 'OK, I understand', true);

    console.log('after emitting machine said');

    return text;
  }

  public initialize():void {
    console.log('Human: initialize');

    this.model.on('MachineSaid', (message : string) => {
      console.log('inside human interaction server side MachineSaid event', message);
    });

    return;
  }
}

module.exports = HumanInteraction;
