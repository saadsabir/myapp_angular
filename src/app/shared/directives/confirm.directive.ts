import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    @Input('confirm') message: string = ''
    @Input() confirmUsername: string = ''
    @Output() onConfirm: EventEmitter<void> = new EventEmitter()

    @HostListener('click')
    openDialog() {
        const confirmed  = window.confirm(this.message+' '+this.confirmUsername)
        if(confirmed) this.onConfirm.emit()
    }
}