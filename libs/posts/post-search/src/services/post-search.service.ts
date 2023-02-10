import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postSchema } from '@posts-challenge/posts/core';
import { map } from 'rxjs';
import * as z from 'zod';

@Injectable()
export class PostSearchService {
  constructor(private readonly http: HttpClient) {}

  fetchPostByTitle(title: string) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts?title=${title}`)
      .pipe(
        map((data) => z.array(postSchema).parse(data)),
        map((posts) => {
          if (posts.length === 0) {
            return null;
          }
          return posts[0];
        })
      );
  }
}
