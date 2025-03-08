import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostResponse, PostDetails, PostsList } from '@models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:4000/api/posts';

  constructor(private http: HttpClient) {}

  createPost(post: FormData): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.baseUrl, post, { withCredentials: true });
  }

  updatePost(id: string, post: FormData): Observable<PostResponse> {
    return this.http.put<PostResponse>(`${this.baseUrl}/${id}`, post, { withCredentials: true });
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  getPostById(id: string): Observable<PostDetails> {
    return this.http.get<PostDetails>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  getAllPosts(page = 1, limit = 10): Observable<PostsList> {
    return this.http.get<PostsList>(`${this.baseUrl}?page=${page}&limit=${limit}`, {
      withCredentials: true,
    });
  }

  getPostsByUserId(userId: string, page = 1, limit = 10): Observable<PostsList> {
    return this.http.get<PostsList>(`${this.baseUrl}/user/${userId}?page=${page}&limit=${limit}`, {
      withCredentials: true,
    });
  }
}
