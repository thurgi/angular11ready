import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  static error(...args: any):void{
    console.error(...args);
  }

  static log(...args: any):void{
    if (!environment.production) {
      console.log(...args);
    }
  }

}
