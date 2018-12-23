import { Component } from '@angular/core';
import { Comment } from './class/comment';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

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

  comments: Observable<Comment[]>;

  constructor(private db: AngularFirestore) {
    this.comments = db.collection<Comment>('contents', ref => {
      return ref.orderBy('date', 'asc')
    })
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(action => {
          const data = action.payload.doc.data() as Comment;
          const comment_data = new Comment(data.name, data.message);
          comment_data.setDate(data.date);
          return comment_data;
        })));
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
    e.preventDefault();
    if (message) {
      this.db
      .collection('contents')
      .add(new Comment(this.name, message).deserialize());
      this.message = '';
    }
  }
}
