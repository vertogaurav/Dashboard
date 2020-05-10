import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: any;
  img:any;
  chartOptions:{};
  Highcharts=Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.img=this.cardData.image_background;
  
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300);
 
}
  

}
