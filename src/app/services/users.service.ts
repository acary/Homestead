import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Admin', 'Andy', 'David'];
  inactiveUsers = ['Allie', 'Echo'];
  activatedEmitter = new Subject<boolean>();

  constructor(
    private counterService: CounterService
  ) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
