import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[exampleClass]',
})

export class exampleClassDirective implements OnInit {
    @Input() exampleClass: string = '';

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.exampleClass)
    }
}