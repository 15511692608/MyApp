import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { LoggerService } from './service/logger.service';
import { ConsoleService } from './service/console.service';
import 'rxjs/';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConsoleService,
    {
      provide: LoggerService,
      useFactory(consoleService) {
        return new LoggerService(true, consoleService);
      },
      deps: [ConsoleService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
