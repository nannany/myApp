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

  constructor(db: AngularFirestore) {
    this.item = db.collection('contents').doc<Comment>('item').valueChanges();
  }

  contents: Comment[] = [
    {
      name: 'nannany',
      message: 'wwwwww'
    },
    {
      name: 'stkysk',
      message: '草'
    }
  ];

  selector() {
    this.count = this.message.length;
  }

  add() {
    this.contents.push({ name: this.name, message: this.message });
  }
}
