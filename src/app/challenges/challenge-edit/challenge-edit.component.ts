import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent {
    @Output() challengeChange: EventEmitter<string>;
    title: string;

    constructor() {
        this.challengeChange = new EventEmitter();
        this.title = '';
     }

    onSetChallenge() {
        this.challengeChange.emit(this.title);
    }
}
