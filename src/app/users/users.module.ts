import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UsercardComponent } from "./user-card/user-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [UsersComponent, UsercardComponent],
    imports: [CommonModule],
    exports: [UsersComponent]
})
export class UsersModule{}