import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostCreated, PostExtended, PostsList } from '@models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:4000/api/posts';

  constructor(private http: HttpClient) {}

  createPost(post: FormData): Observable<PostCreated> {
    return this.http.post<PostCreated>(this.baseUrl, post, { withCredentials: true });
  }

  updatePost(id: string, post: FormData): Observable<PostExtended> {
    return this.http.put<PostExtended>(`${this.baseUrl}/${id}`, post, { withCredentials: true });
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  getPostById(id: string): Observable<PostExtended> {
    return this.http.get<PostExtended>(`${this.baseUrl}/${id}`, { withCredentials: true });
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
