import { UserDocument } from '@models/user.model';

export type Post = {
  id?: number;
  image: string;
  title: string;
  content: string;
};

export type PostExtended = {
  _id?: string;
  title: string;
  content: string;
  image?: string;
  author?: UserDocument;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostsList = {
  posts: PostExtended[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
};

export type PostResponse = {
  message: string;
  post: PostExtended;
};

export type PostType = 'grid' | 'post';
