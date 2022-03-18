import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
             AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Sleyther';
  segundos = 0;

  timerSubscription!: Subscription;

  interval$ = interval(1000)

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.timerSubscription = this.interval$.subscribe( res => {
      console.log(res);
      // this.segundos++;
      this.segundos = res;
    })


  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('TIMER LIMPIADO');
  }

  guardar() {

  }



}
