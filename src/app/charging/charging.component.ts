import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charging',
  templateUrl: './charging.component.html',
  styleUrls: ['./charging.component.sass']
})
export class ChargingComponent {

@Input() public message : string = ''

}
