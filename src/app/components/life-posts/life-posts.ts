import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Post} from '../../models/post.model';
import {BlogService} from '../../services/blog.service';
import {PostCard} from '../post-card/post-card';
import {PostCategory} from '../../models/post-category.enum';

@Component({
  selector: 'app-life-posts',
  standalone: true,
  templateUrl: './life-posts.html',
  styleUrls: ['./life-posts.scss'],
  imports: [CommonModule, PostCard]
})
export class LifePostsComponent implements OnInit {
  lifePosts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.lifePosts = this.blogService.getAllByCategory(PostCategory.LIFE, false);
  }
}
