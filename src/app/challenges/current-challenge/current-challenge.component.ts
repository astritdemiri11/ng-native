import { Component, Input } from '@angular/core';
import { ItemEventData } from '@nativescript/core';

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css']
})

export class CurrentChallengeComponent {
    // @Input() challenges: string [];
    @Input() challenge: string;

    constructor() {}

    onItemTap(challenge: ItemEventData) {
        console.log(challenge);
    }
}
