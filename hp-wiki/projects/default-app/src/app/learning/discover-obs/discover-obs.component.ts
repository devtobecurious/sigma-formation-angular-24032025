import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sig-discover-obs',
  imports: [AsyncPipe],
  templateUrl: './discover-obs.component.html',
  styleUrl: './discover-obs.component.css'
})
export class DiscoverObsComponent implements OnInit, OnDestroy {


  temp = signal<number>(0)

  private subscriptionParent = new Subscription()

  getTemperature$ = new Observable<number>(observer => {
    console.info('Coucou')

    setTimeout(() => {
      observer.next(0)
      //observer.error(new Error('ooops'))
      observer.next(14)
      observer.next(14.5)
      observer.next(-2)
      observer.complete()

      //observer.next(1.5)
    }, 1500);
    console.info('Coucou bis')
  }).pipe(
    filter(item => item <= 0),
    map(item => item / 2),
    map(item => item / 1.5)
  )

  getTempSignal = toSignal(this.getTemperature$)

  ngOnInit(): void {
    console.info('------------')

    let sub$ = this.getTemperature$.subscribe({
      next: tempR => this.temp.update(last => tempR + last),
      complete: () => console.info('finnn'),
      error: err => console.info('oops again')
    })
    this.subscriptionParent.add(sub$)

    sub$ = this.getTemperature$.subscribe()
    this.subscriptionParent.add(sub$)



    console.info('***')
  }

  ngOnDestroy(): void {
    this.subscriptionParent.unsubscribe()
  }
}
