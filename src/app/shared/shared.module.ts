import { NgModule } from "@angular/core";
import { PluralPipe } from "./pipes/plural.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { AutoCompletePipe } from "./pipes/autocomplete.pipe";
import { ExtensionPipe } from "./pipes/extension.pipe";
import { ConfirmDirective } from "./directives/confirm.directive";

@NgModule({
    declarations: [PluralPipe, LangPipe, AutoCompletePipe, ExtensionPipe, ConfirmDirective],
    imports: [],
    exports: [PluralPipe, LangPipe, AutoCompletePipe, ExtensionPipe, ConfirmDirective]
})
export class SharedModule {}