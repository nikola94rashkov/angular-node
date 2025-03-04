import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostExtended, PostsList } from '@models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:4000/api/posts';

  constructor(private http: HttpClient) {}

  createPost(post: PostExtended): Observable<PostExtended> {
    return this.http.post<PostExtended>(this.baseUrl, post);
  }

  updatePost(id: string, post: PostExtended): Observable<PostExtended> {
    return this.http.put<PostExtended>(`${this.baseUrl}/${id}`, post);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPostById(id: string): Observable<PostExtended> {
    return this.http.get<PostExtended>(`${this.baseUrl}/${id}`);
  }

  getAllPosts(page = 1, limit = 10): Observable<PostsList> {
    return this.http.get<PostsList>(`${this.baseUrl}?page=${page}&limit=${limit}`);
  }

  getPostsByUserId(userId: string, page = 1, limit = 10): Observable<PostsList> {
    return this.http.get<PostsList>(`${this.baseUrl}/user/${userId}?page=${page}&limit=${limit}`);
  }
}
