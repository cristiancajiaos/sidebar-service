import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public emitStatus: boolean = false;
  public emitChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.emitStatus);

  changeEmitted$ = this.emitChange.asObservable();

  constructor() { }

  onEmitChange(): void {
    this.emitStatus = !this.emitStatus;
    this.emitChange.next(this.emitStatus);
  }
}
