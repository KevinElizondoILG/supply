import { Time } from '@angular/common';

export class PickingOrder {
  public CPWomens: number;
    public CPMens: number;
    public CPChildrens: number;
    public CPAccesories: number;
    public REGWomens: number;
    public REGMens: number;
    public REGChildrens: number;
    public REGAccesories: number;
    public BTSWomens: number;
    public BTSMens: number;
    public BTSChildrens: number;
    public BTSAccesories: number;
}

export class RasonsModel {
    public date: Date;
    public hour: Time;
    public rason: string;
    public coments: Text;
}

export class TypeOrder {
    public type: string;
  }
