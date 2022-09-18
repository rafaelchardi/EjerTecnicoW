import { Component, Input, EventEmitter, Output } from '@angular/core';
import { opMenu } from '../interfaces/opMenu';


@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css']
})
export class NestedMenuComponent  {

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
