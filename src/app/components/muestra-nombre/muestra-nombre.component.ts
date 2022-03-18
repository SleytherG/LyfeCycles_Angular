import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.scss']
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
