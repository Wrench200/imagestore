import { Api } from './../interfaces/api-interface';
import { Image } from './../interfaces/image-interface';
import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../image-api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  errorMessage: any;
  image2: Image[] | undefined;
  constructor(public images: ImageApiService) {
    
  }

 
  
  
  
   
  ngOnInit(): void {
    
    this.images.getAllPosts().subscribe({
      next: (posts) => {
        this.image2 = posts.hits;

      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
    
    
    
  }
  // getProducts(val: string): void {
  //   this.images.getProducts(val)
  //     .subscribe(products => this.image2 = products);
  // }
}
