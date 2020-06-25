import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import {juego} from './juego'

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(

    private http:HttpClient


  ) { }

    listarjuego(){
      const path= 'http://10.147.19.229:5000/plays';
      return this.http.get<juego[]>(path);
    }
    crearjuego(juego:juego){
      const path= 'http://10.147.19.229:5000/plays';
      return this.http.post(path,juego);
    }
    editarjuego(juego:juego){
      const path= 'http://10.147.19.229:5000/plays'+'/'+juego.idjuego;
      return this.http.put(path,juego);
    }
    eliminarjuego(idjuego:number){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          id: idjuego,
          
        },
      };



      const path= 'http://10.147.19.229:5000/plays/'+idjuego;
      return this.http.delete(path);
    }
}
