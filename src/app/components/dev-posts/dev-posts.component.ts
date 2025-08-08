import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogService} from '../../services/blog.service';
import {Post} from '../../models/post.model';
import {PostCard} from '../post-card/post-card';
import {PostCategory} from '../../models/post-category.enum';

@Component({
  selector: 'app-dev-posts',
  imports: [CommonModule, PostCard],
  templateUrl: './dev-posts.component.html',
  styleUrl: './dev-posts.component.scss'
})
export class DevPostsComponent implements OnInit {
  devPosts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.devPosts = this.blogService.getAllByCategory(PostCategory.DEV, false);
  }

}
