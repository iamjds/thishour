import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnalyzePageRoutingModule } from './analyze-routing.module';
import { AnalyzePage } from './analyze.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyzePageRoutingModule
  ],
  declarations: [
    MenuComponent,
    AnalyzePage
  ]
})
export class AnalyzePageModule { }
