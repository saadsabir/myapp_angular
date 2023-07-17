import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule, CommonModule, SharedModule],
    exports: [NavbarComponent]
})
export class NavbarModule{}