import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/components/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;
  userActivated = false;
  private activatedSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] === undefined) {
      this.user = { id: 2, name: 'Andy' }
    } else {
      this.user = {
        id: this.route.snapshot.params['id'],
        name: this.route.snapshot.params['name']
      };

      this.paramsSubscription = this.route.params.subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );

      this.activatedSubscription = this.usersService.activatedEmitter.subscribe(didActivate => {
        this.userActivated = didActivate;
      });
    }

  }

  ngOnDestroy(): void {
    // this.paramsSubscription.unsubscribe();
    // this.activatedSubscription.unsubscribe();
  }

}
