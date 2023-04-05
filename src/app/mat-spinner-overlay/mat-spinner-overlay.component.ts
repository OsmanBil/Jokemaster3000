import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-spinner-overlay',
  templateUrl: './mat-spinner-overlay.component.html',
  styleUrls: ['./mat-spinner-overlay.component.scss']
})
export class MatSpinnerOverlayComponent implements OnInit {

  onstructor() { }

  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : any ="indeterminate";
  @Input() strokeWidth : number = 10;
  @Input() overlay: any = false;
  @Input() color: string = "primary";

  ngOnInit() {

  }

}
