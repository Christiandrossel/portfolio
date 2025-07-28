import {Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../../models/post.model';
import {DatePipe, SlicePipe, isPlatformBrowser} from '@angular/common';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-post-card',
  imports: [
    CommonModule,
    RouterModule,
    SlicePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard implements OnInit {
  @Input() post!: Post;

  previewText: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const div = document.createElement('div');
      div.innerHTML = this.post.content;
      const plainText = div.innerText || div.textContent || '';
      this.previewText = plainText.slice(0, 120) + '...';
    } else {
      // Falls SSR nötig ist, könnte man alternativ ein Feld `excerpt` auf dem Post nutzen
      this.previewText = '';
    }
  }
}
