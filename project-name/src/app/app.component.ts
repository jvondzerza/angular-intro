import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService } from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private addFriendService: AddFriendService
  private _friendModel = new Friend(null,null,null,null,null)
  private _languages = ["Javascript", "PHP", "HTML", "CSS"];

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService
  }

  get friendModel(): Friend {
    return this._friendModel;
  }

  get languages(): string[] {
    return this._languages;
  }

  submit() {
    console.log(this._friendModel)
    this.addFriendService.addFriend(this._friendModel)
  }
}
