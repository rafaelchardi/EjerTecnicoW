import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';


/////////////////////-----------------------------------------------------------------------------------
import { NestedMenurctComponent } from './nested-menurct/nested-menurct.component';
import { NestedMenurctop1Component } from './nested-menurctop1/nested-menurctop1.component';


@NgModule({
  declarations: [
    NestedMenurctComponent,
    NestedMenurctop1Component
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    NoopAnimationsModule,
    MatIconModule,
    TranslateModule
  ],
  exports:[
    NestedMenurctComponent,
    NestedMenurctop1Component
  ],

})
export class NestedmenuModule { 
}
