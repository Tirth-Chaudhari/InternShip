import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  loading:boolean=true
  err:string=''
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          query {
            getTodos {
              title
              completed
              user{
              name
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        
        this.loading=result.loading
        console.log(result.error);
        
        console.log(result.data);
        
      });
  }
}
