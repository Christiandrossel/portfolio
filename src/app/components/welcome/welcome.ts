import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-welcome',
    imports: [
        RouterOutlet
    ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class Welcome {
  title = 'Christian';
}
