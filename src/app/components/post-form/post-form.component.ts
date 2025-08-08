import {Component, OnInit, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';
import { PostCategory } from '../../models/post-category.enum';
import { Router } from '@angular/router';
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { PostCodeButtonComponent } from './post-code-button.component';

@Component({
  selector: 'app-post-form',
  imports: [CommonModule, FormsModule, NgxEditorComponent, NgxEditorMenuComponent, PostCodeButtonComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent implements  OnInit, OnDestroy {

  editor!: Editor;

  post: Partial<Post> = {
    title: '',
    content: '',
    category: PostCategory.DEV,
    isPrivate: false
  }

  categories = Object.values(PostCategory);
  imageUrlsString: string = '';

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onSubmit(): void {
    if (this.post.title && this.post.content) {
      const newPost: Post = {
        id: Date.now(), // Simple ID generation
        title: this.post.title,
        content: this.post.content,
        category: this.post.category || PostCategory.DEV,
        isPrivate: this.post.isPrivate || false,
        createdAt: new Date(),
        imageUrls: (this.imageUrlsString || '').split(',').map(url => url.trim())

      };
      this.blogService.add(newPost);
      this.router.navigate(['/home']);
    } else {
      alert('Title and content are required!');
    }
  }
}
