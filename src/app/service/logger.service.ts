import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable()
export class LoggerService {

  constructor(private enable: boolean,
              consoleService: ConsoleService) { }

  log(message: string) {
    if(this.enable) {
      console.log(`LoggerService: ${message}`);
    }
  }

}
