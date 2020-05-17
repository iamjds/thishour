import { Component, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dayName = 'Sunday';
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  timeLabels = ['12:00am', '01:00am', '02:00am', '03:00am', '04:00am', '05:00am', '06:00am', '07:00am', '08:00am'];

  @Input('working') dn: string;
  @ViewChild('selectedDate', { read: ElementRef }) sd: ElementRef;

  constructor(private storage: Storage) { }

  // TODO: add event listener for saving changes
  // @HostListener('')

  ngAfterViewInit() {
    this.dayName = 'Wednesday';
  }

  dateChange(date) {
    var dt = new Date(date.detail.value);
    this.dayName = this.dayNames[dt.getDay()];
  }
}
