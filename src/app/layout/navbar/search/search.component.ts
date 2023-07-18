import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

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

export class SearchComponent implements OnInit {
    @Input() username: string = ''
    @Output() onSearch: EventEmitter<string> = new EventEmitter()
    firstnames: string[] = ['ben', 'ana', 'jim']

    ngOnInit() {
        console.log(this.username)
    }
    
    search() {
        this.onSearch.emit(this.username)
    }
}