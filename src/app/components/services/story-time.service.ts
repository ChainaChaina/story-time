import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryTimeService {
  private baseUrl = './app.component.html';

  constructor(private http: HttpClient) { }

  // Operação de leitura (GET)
  // getUsername(username: string): Observable<any> {
  //   return this.http.get<StoryTimeService>(`${this.baseUrl}/${username}`);
  // }

  // Operação de criação (POST)-------------------------------------------
  createUsername(username:string ):Observable<StoryTimeService> {
    return this.http.post<StoryTimeService>(this.baseUrl, username);
  }

  // Operação de criação (POST)-------------------------------------------
  createStory(chapter:string ):Observable<StoryTimeService> {
    return this.http.post<StoryTimeService>(this.baseUrl, chapter);
  }

  // Operação de exclusão (DELETE)
  deleteUsername(username: string):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${username}`);
  }
}

