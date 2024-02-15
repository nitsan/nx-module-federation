import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NitsanService {

  constructor() {
    console.log('NitsanService created');
  }

  logMessage(message: string): void {
    console.log('NitsanService, logMessage', message);
  }
}
