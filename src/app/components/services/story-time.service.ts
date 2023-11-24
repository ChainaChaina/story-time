import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryTimeService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  // createStory(data:any ): Observable<any> {
  //   const url = `${this.baseUrl}/story/gender`;
  //   const body = JSON.stringify(data)

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post<StoryTimeService>(url, body, { headers })

  // }

  createStory(prompt){
    return this.http.post('http://50.17.41.22:8080/story/gender', {message: prompt})
  }

  // DELETE Deletar História

  // User
  // GET Listar Usuario
  getUsername(username: string): Observable<any> {
    return this.http.get<StoryTimeService>(`${this.baseUrl}/${username}`);
  }

  // GET Lista Usuario por ID

  // POST Criar Usuario
  createCadastro(userName: string, lastname: string, email: string, genre:string, datebirth: string,  password: string): Observable<any> {
    const url = `${this.baseUrl}/user`;
    const body = {
      userName: userName,
      lastname : lastname,
      password: password,
      email: email,
      genre: genre,
      datebirth: datebirth
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<StoryTimeService>(url, body, { headers }).pipe(
      map((response: any) => response),
      catchError((error: any) => error(error))
    );
  }


  // PUT Atualiza Usuario

  // Operação de exclusão (DELETE)
  deleteUsername(username: string):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${username}`);
  }

  // POST Autentica Login
}

