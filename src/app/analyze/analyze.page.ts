import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'hr-analyze',
  templateUrl: './analyze.page.html',
  styleUrls: ['./analyze.page.scss'],
})
export class AnalyzePage implements OnInit {

  missingSlotsPerRangeSelected = 23;

  constructor(private menu: MenuComponent) { }

  ngOnInit() {

  }

}
