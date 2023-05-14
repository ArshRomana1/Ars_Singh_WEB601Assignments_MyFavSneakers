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
          title: 'Angrej',
          description: 'This is my favorite punjabi movie. Angrej ( Amrinder Gill ), an older adult from India, arrives at his pre-partition home in Pakistan, where he meets the current residents.',
          creator: 'Jaspal Sandhu',
          imgURL: 'assets/img/img1.jpg',
          tags: ['Comedy']
    });


    this.contentList.addContent({
      id: 2,
      title: 'Love Punjab',
      description: 'The story of Love Punjab revolves around a family in which husband and wife fights daily for small reasons and their son is only victim of these fights.',
      creator: 'Sandeep Singh',
      imgURL: 'assets/img/lovepunjab.jpg',
      tags: ['Comedy', 'Drama']
    });

    this.contentList.addContent({
      id: 3,
      title: 'Chal Mera Putt',
      description: 'Chal Mera Putt is a light-hearted comedy about a group of illegal immigrants living in the city of Birmingham.',
      creator: 'Gurcharan Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Comedy', 'Drama']
    });
  }
}

