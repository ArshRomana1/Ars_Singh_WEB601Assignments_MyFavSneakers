import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from './helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SneakerServiceService {

  constructor(private messageService : MessageService) { }
  getContent() : Observable<any[]>{
    this.messageService.add('Content Array Loaded')
    return of(contentList);
  }
  getContentById(id : number) : Observable<any>{
    const singleContent = contentList.find((item)=> item.id === id);
    this.messageService.add('Content Item At Id' + id)
    return of(singleContent);
  }
}
