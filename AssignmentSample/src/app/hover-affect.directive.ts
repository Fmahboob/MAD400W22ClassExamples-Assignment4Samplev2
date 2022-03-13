import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() typeOfElement: string = "";
  originalBorder: string;

  constructor(private elm: ElementRef) {
    this.originalBorder = elm.nativeElement.style.border;
  }

  @HostListener("mouseenter") onMouseEnter() {
    if (this.typeOfElement === "type") {
      this.elm.nativeElement.style.textDecoration = "underline";
    }
    else if (this.typeOfElement === "tag") {
      this.elm.nativeElement.style.fontWeight = "bold";
    }
    else if (this.typeOfElement === "contentCard") {
      this.elm.nativeElement.style.border = "5px dashed #777";
    }
  }

  @HostListener("mouseleave") onMouseLeave() {
    if (this.typeOfElement === "type") {
      this.elm.nativeElement.style.textDecoration = "initial";
    }
    else if (this.typeOfElement === "tag") {
      this.elm.nativeElement.style.fontWeight = "normal";
    }
    else if (this.typeOfElement === "contentCard") {
      this.elm.nativeElement.style.border = this.originalBorder;
    }
  }
}
