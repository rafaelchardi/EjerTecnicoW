import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';


/////////////////////-----------------------------------------------------------------------------------
import { NestedMenuComponent } from './nested-menu/nested-menur.component';


@NgModule({
  declarations: [
    NestedMenuComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    NoopAnimationsModule,
    MatIconModule,
    TranslateModule
  ],
  exports:[
    NestedMenuComponent,
    
  ],

})
export class NestedmenuModule { 
}
