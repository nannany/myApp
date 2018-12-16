import { Component } from '@angular/core';
import { Comment } from './class/comment';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '掲示板';
  count = 0;
  name = '???'
  message = '';

  item: Observable<Comment>;

  constructor(private db: AngularFirestore) {
    this.item = db.collection('contents').doc<Comment>('item').valueChanges();
  }

  contents: Comment[] = [
    new Comment('nannany', 'wwwwww')
  ];

  selector() {
    this.count = this.message.length;
  }

  add() {
    this.contents.push(new Comment(this.name, this.message));
  }

  addComment(e: Event, message: string) {
    if (message) {
      this.db.collection('contents').add(new Comment(this.name, message).deserialize());
      this.message = '';
    }
  }
}
