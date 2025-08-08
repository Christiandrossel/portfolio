import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {DUMMY_POSTS} from '../testdata/dummy-posts';
import {PostCategory} from '../models/post-category.enum';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private posts: Post[] = DUMMY_POSTS;


  getAll(): Post[] {
    return this.posts.filter(p => !p.isPrivate);
  }

  getAllByCategory(category: PostCategory, isPrivate: boolean = false): Post[] {
    return this.posts.filter(p => p.category === category && p.isPrivate === isPrivate);
  }

  getById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  add(post: Post): void {
    this.posts.push(post);
  }

  update(updatedPost: Post): void {
    const index = this.posts.findIndex(p => p.id === updatedPost.id);
    if (index > -1) {
      this.posts[index] = updatedPost;
    }
  }

  delete(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
