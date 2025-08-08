import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {BlogService} from '../../services/blog.service';
import {DatePipe, NgForOf, SlicePipe} from '@angular/common';
import {PostCard} from '../post-card/post-card';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    SlicePipe,
    DatePipe,
    PostCard
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getAll()
  }
}
