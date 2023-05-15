import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    this.contentList.addContent({
          id: 1,
          title: 'Jordan 4',
          description: 'This is all time classic sneaker, my favorite Jordan 4',
          creator: 'Michael Jordan',
          imgURL: 'assets/img/breddd.jpeg',
          tags: ['Basketball']
    });


    this.contentList.addContent({
      id: 2,
      title: 'Jordan 1',
      description: 'This Right here is my favoritw shoes of all time,It was a twist on a original Jordan 1 Colorway by an american designer.',
      creator: 'Virgil Abloh',
      imgURL: 'assets/img/reim.jpeg',
      tags: ['StreetWear']
    });

    this.contentList.addContent({
      id: 3,
      title: 'Jordan 1',
      description: 'This is the first jordan shoes ever made , so clearly is my most desireable pair of shoes.',
      creator: 'Michael Jordan',
      imgURL: 'assets/img/uncc.jpeg',
     tags: ['Basketball']
    });
  }
}

