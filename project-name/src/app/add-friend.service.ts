import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private http: HttpClient;
  private url = "";

  constructor(http: HttpClient) {
    this.http = http
  }

  addFriend(friend: Friend) {
    this.http.post(this.url, friend)
  }
}

