import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allbindingdemo',
  templateUrl: './allbindingdemo.component.html',
  styleUrls: ['./allbindingdemo.component.css']
})
export class AllbindingdemoComponent {
  @Input ('parentToChild') ptc : any;
  @Input ('parentTxtValue') ptv : any;
  // txtValueFrmParent = this.ptv;
  txtvalue = "Value from TS";
  divcolor = "blue";
  textonthefly = "type"
  colortxtbox : string = "";

}
 