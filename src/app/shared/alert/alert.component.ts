import { Component, Input } from "@angular/core";

@Component({
    selector: "app-alert",
    templateUrl: "./alert.component.html",
    styleUrls: ["./alert.component.css"]
})
export class AlertComponent {
    @Input() message: string;

    // constructor(private alertService: AlertService) {
    //     this.alertService.getMessage().subscribe(message => {
    //         this.message = message;
    //     });
    // }
}