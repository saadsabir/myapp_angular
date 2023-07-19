import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="username">
        <button (click)="search()" *ngIf="username != ''">Rechercher</button>
        <ul>
            <li *ngFor="let name of firstnames | autocomplete:username ; let i = index ; let isLast = last">
               {{ isLast }} -  {{ name }}
            </li>
        </ul>
    `
})

export class SearchComponent implements OnInit, OnChanges, OnDestroy {
    @Input() username: string = ''
    @Output() onSearch: EventEmitter<string> = new EventEmitter()
    firstnames: string[] = ['ben', 'ana', 'jim']

    ngOnInit() {
        console.log(this.username)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

    ngOnDestroy(): void {

    }
    
    search() {
        this.onSearch.emit(this.username)
    }
}