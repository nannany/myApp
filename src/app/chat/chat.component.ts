import { Component, OnInit } from '@angular/core';
import { Comment } from '../class/comment';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = '掲示板';
  count = 0;
  name = '???'
  message = '';
  start = 0;
  len = 10;
  currentPage = 1;
  comments: Observable<Comment[]>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.comments = this.db.collection<Comment>('contents', ref => {
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

  selector() {
    this.count = this.message.length;
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

  pager(event: any): void {
    this.start = this.len * (event.page - 1);
  }

}
