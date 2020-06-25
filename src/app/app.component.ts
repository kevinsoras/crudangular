import { Component } from '@angular/core';
import { JuegoService } from './juego.service';
import {juego, Juegodatos} from './juego'
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  texto:string
  nombrejuego1:string
  nombre1:string
  puntaje1:number
  idjugador:number=0
  title = 'crudapirest';
  listajuegos:juego[]=[]
  nuevojuego=new Juegodatos()
  editar(jue:juego){
   // console.log(jue.nombre)
   this. nombrejuego1=jue.nombrejuego
   this.nombre1=jue.nombre
   this.puntaje1=jue.puntaje
   this.idjugador=jue.id
   console.log(this.idjugador)

  }
  delete(){
    this.juegoservice.eliminarjuego(this.idjugador).subscribe(
      data=>{
        this.juegoservice.listarjuego().subscribe(
          data=>{
           this.listajuegos=data
            console.log(data)
          
          }
        )
        console.log(data)
      
      }
    )
  }
  agregaroeditar(){
    
    if(this.idjugador ===0){
      this.nuevojuego.nombrejuego=this.nombrejuego1
      this.nuevojuego.nombre=this.nombre1
      this.nuevojuego.puntaje=this.puntaje1
       console.log( this.nuevojuego.nombrejuego)
       console.log( this.nuevojuego.nombre)
       console.log( this.nuevojuego.puntaje)
       //this.listajuegos.push(this.nuevojuego)
       this.juegoservice.crearjuego(this.nuevojuego).subscribe(
         data=>{
           this.juegoservice.listarjuego().subscribe(
             data=>{
              this.listajuegos=data
               console.log(data)
             
             }
           )
           console.log(data)
         
         }
       )
    }
    else{
      this.nuevojuego.idjuego=this.idjugador
      this.nuevojuego.nombrejuego=this.nombrejuego1
      this.nuevojuego.nombre=this.nombre1
      this.nuevojuego.puntaje=this.puntaje1
      console.log( this.nuevojuego.idjuego)
      console.log( this.nuevojuego.nombrejuego)

       console.log( this.nuevojuego.nombre)
       console.log( this.nuevojuego.puntaje)
       this.juegoservice.editarjuego(this.nuevojuego).subscribe(
        data=>{
          this.juegoservice.listarjuego().subscribe(
            data=>{
             this.listajuegos=data
              console.log(data)
            
            }
          )
          console.log(data)
        
        }
      )

    }

   
  }
  


  constructor(
   private  juegoservice:JuegoService
    
  ){

    this.juegoservice.listarjuego().subscribe(
      data=>{
       this.listajuegos=data
        console.log(data)
      
      }
    )
  }
 





}
