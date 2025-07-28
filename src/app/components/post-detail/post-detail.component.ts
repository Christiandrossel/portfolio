import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';
import { DatePipe, CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import hljs from 'highlight.js';

@Component({
  selector: 'app-post-detail',
  imports: [
    DatePipe,
    CommonModule,
    HighlightModule
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit, AfterViewInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: BlogService
  ) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getById(id);
  }

  /**
   * After the view is initialized, highlight.js will be used to highlight code blocks.
   */
  ngAfterViewInit(): void {
    hljs.highlightAll();
  }

  copyCode(event: MouseEvent): void {
    const codeEl = (event.target as HTMLElement).previousElementSibling;
    if (codeEl) {
      const text = codeEl.textContent || '';
      navigator.clipboard.writeText(text);
      alert('Code kopiert!');
    }
  }

  showCopyButton(): boolean {
    return !!this.post?.content?.includes('<code');
  }


  trackByUrl(index: number, url: string): string {
    return url;
  }

}
