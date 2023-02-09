import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postSchema } from '@posts-challenge/posts/core';
import { map } from 'rxjs';

@Injectable()
export class PostDisplayService {
  constructor(private readonly http: HttpClient) {}

  fetchPostById(id: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map((data) => postSchema.parse(data)));
  }
}
