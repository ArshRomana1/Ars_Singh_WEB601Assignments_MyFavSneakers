import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
 contentList = [
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
  imgURL: 'assets/img/reim.jpeg',
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
  type: 'Sneakers',
  tags: ['Basketball , Streetwear , Shoes']
},
{
id: 5,
title: 'Jordan 1',
description: 'This Right here is my favoritw shoes of all time,It was a twist on a original Jordan 1 Colorway by an american designer.',
creator: 'Virgil Abloh',
imgURL: 'assets/img/reim.jpeg',
type: 'Sneakers',
tags: ['Basketball , Streetwear , Shoes']
},
{
id: 6,
title: 'Jordan 1',
description: 'This is the first jordan shoes ever made , so clearly is my most desireable pair of shoes.',
creator: 'Michael Jordan',
imgURL: 'assets/img/uncc.jpeg',
type: 'Sneakers',
tags: ['Basketball , Streetwear , Shoes']
}

 ]
 getContentHtml(index: number): string {
  const content = this.contentList[index];
  const imgHtml = content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}" style = "height:500px;" />` : '';
  return `
    <div >
      <h2>${content.title}</h2>
      <p>${content.description}</p>
      <p>Creator: ${content.creator}</p>
      ${imgHtml}
      <p>Type: ${content.type || '-'}</p>
    </div>
  `;
}
}
