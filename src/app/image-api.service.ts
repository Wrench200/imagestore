import { Image } from './interfaces/image-interface';
import { Api } from './interfaces/api-interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  private FAKE_API_URL = 'https://fakestoreapi.com';
  private fake_api_url2 = 'https://pixabay.com/api/?key=19926008-b9e8fc0039d8af8f8061550dc&q='
  Api_data!: any;
  constructor(private http: HttpClient) { }

  getProducts(local: string): Observable<any> {
    return this.http.get<any>(`${this.fake_api_url2}`);
  }

  getData() {
    this.http.get(this.fake_api_url2)
      .subscribe(data => {
      data = data
        
      });
  }
  getAllPosts(): Observable<Api> {
    return this.http.get<Api>(this.fake_api_url2);
  }
}
