import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    challenge: string;
    // challenges: string[];

    constructor() {
        this.challenge = '';
        // this.challenges = [];
    }

    onChallengeChange(title: string) {
        this.challenge = title;
        // this.challenges.push(title);
        // console.log('onChallengeChange: ' + title);
    }
 }
