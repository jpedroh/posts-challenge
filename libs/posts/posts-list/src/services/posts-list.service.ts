import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { postSchema } from '@posts-challenge/posts/core';
import * as z from 'zod';

@Injectable()
export class PostsListService {
  constructor(private readonly http: HttpClient) {}

  fetchPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((data) => z.array(postSchema).parse(data)));
  }
}
