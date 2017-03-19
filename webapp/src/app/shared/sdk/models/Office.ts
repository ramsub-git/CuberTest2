/* tslint:disable */

declare var Object: any;
export interface OfficeInterface {
  OfficeName: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Office implements OfficeInterface {
  OfficeName: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: OfficeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Office`.
   */
  public static getModelName() {
    return "Office";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Office for dynamic purposes.
  **/
  public static factory(data: OfficeInterface): Office{
    return new Office(data);
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
      name: 'Office',
      plural: 'Offices',
      properties: {
        OfficeName: {
          name: 'OfficeName',
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
