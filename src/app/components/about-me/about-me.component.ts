import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {}
