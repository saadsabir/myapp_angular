import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule, CommonModule],
    exports: [NavbarComponent]
})
export class NavbarModule{}