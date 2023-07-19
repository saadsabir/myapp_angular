import { Observable } from "rxjs";

const rand = new Observable((subscriber) => {
    subscriber.next(Math.random())
    subscriber.next(Math.random())
    subscriber.next(Math.random())
    setTimeout(() => {
        subscriber.next(Math.random())
    }, 1000)
})