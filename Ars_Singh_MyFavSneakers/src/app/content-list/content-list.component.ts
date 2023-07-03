import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SneakerServiceService } from '../sneaker-service.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit{


 contentList: any[];
 constructor(private sneakerService: SneakerServiceService){

 }

findTitle : string ='';
filterResult: boolean = false;
message :string =''

findContent() {
  this.filterResult = this.contentList.some((content: { title: string; }) => content.title.toLowerCase() === this.findTitle.toLowerCase());

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
ngOnInit(){
  this.sneakerService.getContent().subscribe((contentList: any[])=>
  {
    this.contentList = contentList;
  })
}
}

