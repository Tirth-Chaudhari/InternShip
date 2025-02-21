import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../layout/layout.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { Router } from '@angular/router';
import { BlogContentComponent } from '../blog-content/blog-content.component';
@Component({
  selector: 'app-home',
  imports: [FormsModule,LayoutComponent,BlogPostComponent,BlogContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router=inject(Router);
  path=this.router.url;


  ngOnInit()
  {
    console.log(this.path);
    
  }





}
