import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0 })),
  ]),
]);
 


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [fadeInOut], // Add animations here

})
export class PopupComponent implements OnInit {
  isVisible = true; // Control visibility for animation

  constructor() { }

  ngOnInit(): void {
  }

  

  

}


