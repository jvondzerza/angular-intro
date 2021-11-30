import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Friend } from "./friend";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private _url = "http://localhost:9001/allFriends";

  get url(): string {
    return this._url;
  }

  constructor(private http: HttpClient) {}

  addFriend(friend: Friend): Observable<object> {
    return this.http.post(this._url, friend)
  }
}

