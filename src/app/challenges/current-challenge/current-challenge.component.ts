import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css']
})

export class CurrentChallengeComponent implements OnInit {
    challengeTitle: string;
    currentChallenge: string;

    constructor() {
        this.challengeTitle = '';
        this.currentChallenge = '';
     }

    onSetChallenge() {
        this.currentChallenge = this.challengeTitle;
    }

    ngOnInit() { }
}
