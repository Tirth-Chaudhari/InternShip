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

  const userFragment=gql`
    fragment user on User{
      name,
      email,
      username
    }
  `
    
    this.apollo
      .watchQuery({
        query: gql`
        ${userFragment}
          query {
            getTodos {
              title
              completed
              user{
              ...user
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
    
      this.apollo.mutate({
        mutation: gql`
        ${userFragment}
        mutation ExampleQuery($updateTodoId: ID!,$edit:EditTodoInput) {
        updateTodo(id: $updateTodoId,edit:$edit) {
              title,
              user {
              ...user
              }
      }}`,
      variables:{
        updateTodoId: "1",
        edit:{
          "title":"Learn More About GraphQL with Angular",
          "completed":false
          }
      }  
      }).subscribe((data)=>
      {
        console.log(data);
        
      })

      this.apollo.mutate({
        mutation: gql`
       mutation ExampleQuery($deleteTodoId: ID!) {
        deleteTodo(id: $deleteTodoId) {
            title
            user{
              name
            }
          }}`,
      variables:{
        deleteTodoId: "1",
      }  
      }).subscribe((data)=>
      {
        console.log(data);
        
      })
  }
}

