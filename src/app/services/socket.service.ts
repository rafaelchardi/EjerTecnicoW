import { Socket } from 'ngx-socket-io';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public conectado = false;

  constructor(
    ////////////////////////////////////////////////////////////////////////
    private socket: Socket ) {
      this.estado();
    }
    ////////////////////////////////////////////////////////////////////////
    escuchadelSocket( evento: string ) {
      return this.socket.fromEvent( evento );
    }
    ////////////////////////////////////////////////////////////////////////
    estado() {
      
      this.socket.on('connect', () => {
        this.conectado = true;
      });

      this.socket.on('disconnect', () => {
        this.conectado = false;
      });
    }
  ////////////////////////////////////////////////////////////////////////
    emiteAlSocket( evento: string, payload?: any, callback?: Function ) {
    
      this.socket.emit( evento, payload, callback );
    }
 
  ////////////////////////////////////////////////////////////////////////
    getMenus() {
      return this.escuchadelSocket('obtenermenu');
    }  

}
