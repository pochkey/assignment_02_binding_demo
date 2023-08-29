import { Component } from '@angular/core';

@Component({
  selector: 'app-allbindingdemo',
  templateUrl: './allbindingdemo.component.html',
  styleUrls: ['./allbindingdemo.component.css']
})
export class AllbindingdemoComponent {
  txtvalue = "Value from TS";
  divcolor = "blue";

}
