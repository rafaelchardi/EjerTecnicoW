
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
import { creaArbol} from './nestedmenu/utils/funciones';
import { opMenu } from './nestedmenu/interfaces/opMenu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ejertecnico';
  opMenu :opMenu[]=[];
  opMenuSeleccionado?:opMenu;
  procedencia:string='';
  divHtml:string='';
  promouseenter:string='';



  constructor( private http: HttpClient,
               private translateservice: TranslateService) { }

               
 /////////////////////----------------------------------------------------------------------------------- 
  getMenuPrincipal() {
      return this.http.get<opMenu[]>('/assets/data/menu.json');
  }
  /////////////////////----------------------------------------------------------------------------------- 
  ngOnInit() {
   
     this.getMenuPrincipal().subscribe(menujson=>{
            this.opMenu=creaArbol(menujson,null);
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
}
