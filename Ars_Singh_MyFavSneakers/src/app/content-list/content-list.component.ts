import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit{
ngOnInit(){}

 contentList:Content[] = [
  {
    id: 1,
    title: 'Jordan 4',
    description: 'This is all time classic sneaker, my favorite Jordan 4',
    creator: 'Michael Jordan',
    imgURL: 'assets/img/breddd.jpeg',
    type: 'Sneakers',
    tags: ['Basketball , Streetwear , Shoes']
},
{
  id: 2,
  title: 'Jordan 1',
  description: 'This Right here is my favoritw shoes of all time,It was a twist on a original Jordan 1 Colorway by an american designer.',
  creator: 'Virgil Abloh',
  imgURL: '',
  type: 'Sneakers',
  tags: ['Basketball , Streetwear , Shoes']
},
{
  id: 3,
  title: 'Jordan 1',
  description: 'This is the first jordan shoes ever made , so clearly is my most desireable pair of shoes.',
  creator: 'Michael Jordan',
  imgURL: 'assets/img/uncc.jpeg',
  type: 'Sneakers',
 tags: ['Basketball , Streetwear , Shoes']
},
{
  id: 4,
  title: 'Jordan 4',
  description: 'This is all time classic sneaker, my favorite Jordan 4',
  creator: 'Michael Jordan',
  imgURL: 'assets/img/breddd.jpeg',
  type: 'Shoes',
  tags: ['Basketball , Streetwear , Shoes']
},
{
id: 5,
title: 'Jordan 1',
description: 'This Right here is my favoritw shoes of all time,It was a twist on a original Jordan 1 Colorway by an american designer.',
creator: 'Virgil Abloh',
imgURL: 'assets/img/reim.jpeg',
type: 'Shoes',
tags: ['Basketball , Streetwear , Shoes']
},
{
id: 6,
title: 'Jordan 1',
description: 'This is the first jordan shoes ever made , so clearly is my most desireable pair of shoes.',
creator: 'Michael Jordan',
imgURL: 'assets/img/uncc.jpeg',
type: '',
tags: ['Basketball , Streetwear , Shoes']
},
{
  id: 7,
  title: 'Jordan 3',
  description: 'This Right here is my favoritw shoes of all time,It was a twist on a original Jordan 1 Colorway by an american designer.',
  creator: 'Virgil Abloh',
  imgURL: 'assets/img/reim.jpeg',
  type: '',
  tags: ['Basketball , Streetwear , Shoes']
}
  
]
findTitle : string ='';
filterResult: boolean = false;
message :string =''

findContent() {
  this.filterResult = this.contentList.some(content => content.title.toLowerCase() === this.findTitle.toLowerCase());

  if (this.filterResult) {
    this.message = 'title exists.';
  } else {
    this.message = ' title does not exist.';
  }
}
receiveNewContent(newContent: any): void {
  console.log("newContent", newContent);
  this.contentList = [...this.contentList, newContent];
  console.log('contentList', this.contentList);
}

}

