import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classe/user';
import {Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "";

  public postUsuarioApi(user:User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user);
  }

  //definindo uma propriedade get

  public get usuarios() : string[]{
    return[
      'medico', 'paciente', 'farmacia'
    ]
  }
}
