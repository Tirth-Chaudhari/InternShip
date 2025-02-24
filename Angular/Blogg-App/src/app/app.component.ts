import { Component, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { BlogPostComponent } from './Component/blog-post/blog-post.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,LayoutComponent,BlogPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blogg-App';
    
  
}
