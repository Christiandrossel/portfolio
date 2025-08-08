import {PostCategory} from './post-category.enum';

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  imageUrls: string[];

  category: PostCategory;
  isPrivate: boolean;
}
