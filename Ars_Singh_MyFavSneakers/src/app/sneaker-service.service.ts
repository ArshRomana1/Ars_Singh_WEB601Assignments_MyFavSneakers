import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class SneakerServiceService {

  constructor() { }
  getContent() : Observable<any[]>{
    return of(contentList);
  }
  getContentById(id : number) : Observable<any>{
    const singleContent = contentList.find((item)=> item.id === id);
    return of(singleContent);
  }
}
