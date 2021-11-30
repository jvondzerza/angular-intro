import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService } from "./add-friend.service";
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private _friendModel = new Friend(null,null,null,null,null)
  private _languages = ["Javascript", "PHP", "HTML", "CSS", "C#", "C", "C++", "Ruby", "Python", "SQL"];
  private _allFriends: any;

  get friendModel(): Friend {
    return this._friendModel;
  }

  get languages(): string[] {
    return this._languages;
  }

  get allFriends(): any {
    return this._allFriends;
  }

  constructor(private addFriendService: AddFriendService) {}

  public async getFriends(url: string): Promise<any> {
    await fetch (url, { headers: { 'Content-Type': 'application/json' }})
      .then(response => response.json())
      .then(data => {
        this._allFriends = data;
        console.log(this.allFriends);
      })
  }

  submit() {
    console.log(this.friendModel);
    this.addFriendService
      .addFriend(this.friendModel)
      .subscribe(data => console.log("It worked."), error => console.log("It didn't work."));
    this.getFriends(this.addFriendService.url);
  }

  ngOnInit(): any {
    this.getFriends(this.addFriendService.url);
  }
}
