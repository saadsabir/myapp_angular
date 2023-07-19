import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user.name }}</header>
            {{ user.email }}
            <footer>
                <button [routerLink]="['user', user.id]">Modifier</button>
                <button 
                    (onConfirm)="removeUser()" 
                    confirm='Etes vous'
                    [confirmUsername]='user.name'
                >{{ 'REMOVE' | lang:'en' }}</button>
            </footer>
        </article>
    `
})
export class UserCardComponent {
    @Output() onDelete: EventEmitter<number> = new EventEmitter()
    @Input() user: User = {} as User


    removeUser() {
        this.onDelete.emit(this.user.id)
    }
}