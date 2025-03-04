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
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostsList = {
  posts: PostExtended[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
};
