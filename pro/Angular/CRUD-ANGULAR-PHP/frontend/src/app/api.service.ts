import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from  './usuario';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://192.168.1.15";
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
}