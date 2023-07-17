import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="username">
        <button (click)="search()" *ngIf="username != ''">Rechercher</button>
        <ul>
            <li *ngFor="let name of firstnames ; let i = index ; let isLast = last">
               {{ isLast }} -  {{ name }}
            </li>
        </ul>
    `
})

export class SearchComponent {
    @Input() username: string = ''
    @Output() onSearch: EventEmitter<string> = new EventEmitter()
    firstnames: string[] = ['ben', 'ana', 'jim']

    search() {
        this.onSearch.emit(this.username)
    }
}