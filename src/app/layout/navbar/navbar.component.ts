import { Component, OnInit, inject } from "@angular/core";
import { AppService } from "src/app/core/services/app.service";
@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title }}</h1>
        <app-search [username]="name" (onSearch)="listenSearch($event)"></app-search>
        <button routerLink="/login">Se connecter</button>
    `
})
export class NavbarComponent implements OnInit {
    title: string = ''
    name: string = 'ana'
    price: number = 15
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.title = this.appService.getTitle()
    }
    
    listenSearch(username: string) {
        console.log(username)
    }
}