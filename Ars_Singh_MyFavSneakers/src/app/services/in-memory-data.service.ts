import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const content : Content[] = contentList;
    console.log(content);
    return {content};
  }
  genId(content: Content[]): number{
    const ids: (number | null)[] = content.map(c=> c.id)
    const sortedIds = ids.filter(id => id !==null) as number[];
    return sortedIds.length > 0 ? Math.max(...sortedIds) + 1 : 2000;
    }
  }