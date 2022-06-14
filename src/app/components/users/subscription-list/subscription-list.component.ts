import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  @ViewChild('f') subscriptionForm: NgForm;
  isSubmitted = false;
  defaultSubscriptionType = 'advanced';
  submittedData = {
    email: '',
    subscriptionType: '',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    // console.log(form.value);
    this.submittedData = {
      email: form.value.userData.email,
      subscriptionType: form.value.userData.subscriptionType,
      password: form.value.userData.password
    }
    this.subscriptionForm.reset();
  }

}
