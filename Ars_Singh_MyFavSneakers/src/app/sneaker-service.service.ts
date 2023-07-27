import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from './helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class SneakerServiceService {
  constructor(private messageService: MessageService,
    private http:HttpClient) { }
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-type':
      'application/json' })
      };
      getContent() : Observable<Content[]>{
        return this.http.get<Content[]>("api/content");
        }
  getContentById(id : number) : Observable<any>{
    const singleContent = contentList.find((item)=> item.id === id);
    this.messageService.add('Content Item At Id' + id)
    return of(singleContent);
  }

  addContent(newContentItem: Content):
Observable<Content>{
return this.http.post<Content>("api/content",newContentItem, this.httpOptions);
}
}
