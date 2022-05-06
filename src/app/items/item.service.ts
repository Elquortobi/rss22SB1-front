import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "./item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public url = "https://app-955e59a3-7f47-4987-afcf-9185bcdbdac9.cleverapps.io"

  constructor(private readonly  http: HttpClient) {
  }

  getItems(): Observable<string> {
    return this.http.get(this.url + "/rss/resume/xml", {
      responseType: 'text',
    })
  }

  getItemByGuid(guid: string): Observable<Item> {
    return this.http.get<Item>(this.url + "/rss/resume/xml/" + guid)
  }

  addItem(flux: string): Observable<Item> {
    return this.http.post<Item>(this.url + "/rss/insert", flux);
  }

  deleteItemByGuid(guid: string) {
    return this.http.delete(this.url + "/delete/" + guid)
  }

  getDocumentation() {
    return this.http.get(this.url + "/help")

  }
}
