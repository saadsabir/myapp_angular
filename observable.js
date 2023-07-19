import { Observable, combineLatest, forkJoin, interval, map, of, switchMap } from "rxjs";

/*const rand = new Observable((subscriber) => {
    subscriber.next(Math.random())
    subscriber.next(Math.random())
    subscriber.next(Math.random())
    setTimeout(() => {
        subscriber.next(Math.random())
    }, 1000)
})*/


/*const ob1$ = of(1, 2, 3)
const ob2$ = of('a', 'b')
ob1$
    .pipe(
        switchMap((nb) => {
            console.log(nb)
            return ob2$
        })
    )
    .subscribe(console.log)*/

/*const ob1$ = interval(1000)
const ob2$ = interval(500).pipe(map(() => Math.random()))*/

//combineLatest([ ob1$, ob2$ ]).subscribe(console.log)


const ob1$ = of(1, 2, 3)
const ob2$ = of('a', 'b')

forkJoin([ ob1$, ob2$ ]).subscribe(console.log)
