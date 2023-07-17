import { Component, EventEmitter, Input, Output } from "@angular/core"
import { User } from "src/core/interfaces/user"

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header> {{ user.name }} </header>
            email: {{ user.email }} <br>
            city : {{ user.address.city }}
            <footer></footer>
        </article>
    `
})

export class UsercardComponent {
    @Input() user!: User
}