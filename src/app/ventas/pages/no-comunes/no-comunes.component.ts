import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {


  persona ={
    nombre: 'Fernando',
    edad: 35,
    direccion:'Ottawa, Canada'
  }

  nombre: string='Fernando';
  genero: string ='masculino';
  
  invitacionMapa ={
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string []=['maria','pedro','juan','antonio']
  clientesMapa ={
    '=0':'no tenemos ningún cliente esperando',
    '=1':' tenemos un cliente esperando',
    '=2':' tenemos 2 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarPersona(){
    this.nombre='Ana';
    this.genero='femenino';
  }
  borrarCliente(){
    this.clientes.pop(); //borro el último
  }

miobservable= interval(1000);

}
