// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url;
  constructor(private http: HttpClient) { }

  Savesresponse(responce)
  {
    this.url =  '';
    return this.http.post(this.url,responce);
  }
}
