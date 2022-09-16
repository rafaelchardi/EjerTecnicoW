
import { Input, EventEmitter, Output, Directive } from '@angular/core';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
import { opMenu } from './../interfaces/opMenu';



@Directive()
export class nestedMenu {
  @Input() titulo: string='Menu';
  @Input() opciones: opMenu[] = [];
  @Input() principal: boolean = false;
  @Output() onclick = new EventEmitter<opMenu>();
  @Output() onmouseenter = new EventEmitter<boolean>();

 /////////////////////----------------------------------------------------------------------------------- 
  click(opcion :opMenu)
  {
    if (this.onclick) {
      this.onclick.emit(opcion);
    }
  }
  /////////////////////-----------------------------------------------------------------------------------
  mouseenter(){
    if (this.onmouseenter) {
      this.onmouseenter.emit(true);
    }
  }
}