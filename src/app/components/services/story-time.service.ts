import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoryTimeService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Story
  // POST Salvar História

  // GET Lista Historia por ID

  // Operação de criação (POST)


  createStory(data){
    return this.http.post(`${this.baseUrl}/story/gender`, data)
  }



  // createStory(data: any): Observable<any> {
  //   const url = `${this.baseUrl}/story/gender`;
  //   const body = JSON.stringify(data);

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });

  //   console.log(`${body} -- SERVICE`);

  //   const resp = this.http.post<any>(url, body, { headers });

  //   console.log(resp);

  //   return resp;
  // }

  // DELETE Deletar História

  // User
  // GET Listar Usuario
  getUsername(username: string): Observable<any> {
    return this.http.get<StoryTimeService>(`${this.baseUrl}/${username}`);
  }

  // GET Lista Usuario por ID

  // POST Criar Usuario
  createCadastro(
    userName: string,
    email: string,
    password: string
  ): Observable<any> {
    const url = `${this.baseUrl}/cadastro`;
    const body = {
      userName: userName,
      password: password,
      email: email,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<StoryTimeService>(url, body, { headers }).pipe(
      map((response: any) => response),
      catchError((error: any) => error(error))
    );
  }

  // PUT Atualiza Usuario

  // Operação de exclusão (DELETE)
  deleteUsername(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${username}`);
  }

  // POST Autentica Login
}
