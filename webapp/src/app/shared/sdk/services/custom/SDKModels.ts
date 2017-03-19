/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Office } from '../../models/Office';
import { AIInteraction } from '../../models/AIInteraction';
import { HumanInteraction } from '../../models/HumanInteraction';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Office: Office,
    AIInteraction: AIInteraction,
    HumanInteraction: HumanInteraction,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
