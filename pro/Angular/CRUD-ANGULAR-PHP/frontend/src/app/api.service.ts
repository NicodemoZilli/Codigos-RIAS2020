import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from  './usuario';
import { Materia } from './materia';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://nicozilli.ddns.net";
  constructor(private httpClient: HttpClient) {}

  readUsuario(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/read.php`);

  }
createUsuario(usuarios: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/create.php`, usuarios);
  }

  updateUsuario(usuarios: Usuario){
    return this.httpClient.put<Usuario>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/update.php`, usuarios);
  }

  deleteUsuario(cve: string){
    return this.httpClient.delete<Usuario>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/delete.php?cve=${cve}`);
  }
  /*********************************************MATERIA ******************************************/
  readMateria():Observable<Materia[]>{
    return this.httpClient.get<Materia[]>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/readMateria.php`);
  }
  createMateria(materias: Materia): Observable<Materia>{
    return this.httpClient.post<Materia>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/createMateria.php`, materias);
  }
  updateMateria(materias: Materia){
    return this.httpClient.put<Materia>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/updateMateria.php`, materias);
  }

  deleteMateria(cve: number){
    return this.httpClient.delete<Materia>(`${this.PHP_API_SERVER}/cnt/RIAS/pro/Angular/CRUD-ANGULAR-PHP/backend/api/deleteMateria.php/?cve=${cve}`);
  }
}
