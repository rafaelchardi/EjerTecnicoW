
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subscription } from 'rxjs';

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
import { creaArbol} from './nestedmenu/utils/funciones';
import { opMenu } from './nestedmenu/interfaces/opMenu';
import { SocketService } from './services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subsSocketService$?:Subscription;

  title = 'ejertecnico';
  opMenu :opMenu[]=[];
  opMenuBase:opMenu[]=[];
  opMenuSeleccionado?:opMenu;
  procedencia:string='';
  divHtml:string='';
  promouseenter:string='';
  actualizado=false;



  constructor( private http: HttpClient,
               private translateservice: TranslateService,
               public socketService: SocketService) { }

               
 /////////////////////----------------------------------------------------------------------------------- 
  getMenuPrincipal() {
      return this.http.get<opMenu[]>('/assets/data/menu.json');
  }
  /////////////////////----------------------------------------------------------------------------------- 
  ngOnInit() {
   
     this.getMenuPrincipal().subscribe(menujson=>{
            this.opMenuBase=creaArbol(menujson,null);
            this.opMenu=[...this.opMenuBase];
        });
 }
 /////////////////////----------------------------------------------------------------------------------- 
 onmouseenter(){
    this.opMenuSeleccionado = undefined;
    this.procedencia = '';  
 }
 /////////////////////----------------------------------------------------------------------------------- 
 onclick(event:opMenu,procedencia:string){
    this.opMenuSeleccionado = event;
    this.procedencia= procedencia;
 }
 /////////////////////----------------------------------------------------------------------------------- 
 onclicIdioma(idioma:string){
   this.translateservice.use(idioma);
 }
  /////////////////////----------------------------------------------------------------------------------- 
  toggleChanges(event: MatSlideToggleChange){
    if (event.checked){
     if (!this.subsSocketService$){
      this.subsSocketService$ =this.socketService.getMenus().subscribe((data:any)=>{
           this.actualizado=true;
           const dataaux=JSON.parse(data.menu);
           this.opMenu=dataaux;
           setTimeout(() => {
                this.actualizado=false;
           }, 2500);
 
          });
      }
    } else {
       if (this.subsSocketService$){
           this.subsSocketService$.unsubscribe();
           this.subsSocketService$=undefined;
           this.opMenu=[...this.opMenuBase];
       }
    }
  }
}
