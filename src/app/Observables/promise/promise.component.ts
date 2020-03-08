import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: [ './promise.component.css' ]
} )
export class PromiseComponent implements OnInit {
  bindingType = 'Promise';

  constructor() { }

  code1 = `export class AppComponent implements OnInit {

  api: string = "https://jsonplaceholder.typicode.com/posts";
  data = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http.get<Post[]>(apiURL).toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => {
            return new Post(
              res.userId,
              res.id,
              res.title,
              res.body
            );
          });
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
`;

  code2 = `class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}`;

  ngOnInit() {
  }

}
