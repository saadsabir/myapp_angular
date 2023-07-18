import { Component, OnInit } from '@angular/core'
import { ClickService } from './core/services/click.service';
import { bufferTime, map } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
    `
})
export class AppComponent implements OnInit {
    constructor(private tplClick: ClickService) { }

    ngOnInit(): void {
        this.tplClick.simulate()
            .pipe(
                bufferTime(500),
                map(ev => ev.length)
            )
            .subscribe({
                next: (letter: any) => {
                    console.log(letter)
                },
                error: (err) => {
                    console.log(err)
                },
                complete: () => {
                    console.log('terminé')
                }
            })
    }
}