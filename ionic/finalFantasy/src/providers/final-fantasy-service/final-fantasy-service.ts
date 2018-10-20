import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the FinalFantasyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FinalFantasyServiceProvider {
  // Poner la url
 // private uri: string = "http://192.168.201.42:8080";
  private uri: string = "http://localhost:8080";


  constructor(public http: HttpClient) {
    console.log('Hello FinalFantasyServiceProvider Provider');
  }

  getUsuarios(): Observable<any>{
    return this.http.get(this.uri + "/personaje");
  }

  // postUsuarios(){
  //   this.http.post(this.uri + "/personaje",{body: {'nombre': }} {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  //   .subscribe(data => {
  //       console.log(data.data);
  //     }).catch(error => {
  //       console.log(error.status);
  //     });
  // }

 deleteUsuarios(id:any):Observable<any>{
   return this.http.delete(this.uri + "/personaje/" + id);
 }

 push(usuario: any): Observable<any> {
 // var uri = 'http://192.168.201.42:8080/personaje';
  var uri = 'http://localhost:8080/personaje';
  let postdata = new FormData();
  // postdata.append('id',usuario.id );
  postdata.append('nombre',usuario.nombre );
  postdata.append('clase',usuario.clase );
  return this.http.post(uri, postdata);

}

}
