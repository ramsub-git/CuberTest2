/* tslint:disable */

declare var Object: any;
export interface AIInteractionInterface {
  text: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class AIInteraction implements AIInteractionInterface {
  text: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: AIInteractionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AIInteraction`.
   */
  public static getModelName() {
    return "AIInteraction";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AIInteraction for dynamic purposes.
  **/
  public static factory(data: AIInteractionInterface): AIInteraction{
    return new AIInteraction(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'AIInteraction',
      plural: 'AIInteractions',
      properties: {
        text: {
          name: 'text',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        createdAt: {
          name: 'createdAt',
          type: 'Date'
        },
        updatedAt: {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
