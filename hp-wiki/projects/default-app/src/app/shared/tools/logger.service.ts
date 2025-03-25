import { Injectable, isDevMode } from '@angular/core';

export type LogLevel = 'info' | 'warning' | 'error';

@Injectable({
  providedIn: 'root'
})
export class ApiLoggerService {
  log(message: string, level: LogLevel, ...args: any[]): void {
    fetch('https://api.example.com/logger', {
      method: 'POST', 
      body: JSON.stringify({ message, level, args })
    });
  }
}

@Injectable({
  providedIn: 'root',
  //useFactory: isDevMode() ? () => new LoggerService() : () => new ApiLoggerService()
})
export class LoggerService {
  log(message: string, level: LogLevel, ...args: any[]): void {
   // if(isDevMode()) {
      console.log(message);
   // }
  }
}
