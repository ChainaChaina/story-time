import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryTimeService {
  private baseUrl = 'https://localhost:8080/';

  constructor(private http: HttpClient) { }

  // // Operação de leitura (GET)
  // getUsername(username: string): Observable<any> {
  //   return this.http.get<StoryTimeService>(`${this.baseUrl}/${username}`);
  // }

  // Operação de criação (POST)
  createHistory(message:string ):Observable<any> {
    return this.http.post<StoryTimeService>(this.baseUrl,{message: "Crie uma história elfos, magos e valar"});
  }
  // // Operação de exclusão (DELETE)
  // deleteUsername(username: string):Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${username}`);
  // }
}

