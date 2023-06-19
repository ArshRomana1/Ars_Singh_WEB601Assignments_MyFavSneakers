import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() affectStyle?: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addStyles();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyles();
  }

  private addStyles() {
    if (this.affectStyle === 'color') {
      this.elementRef.nativeElement.style.color = 'green';
    } else if (this.affectStyle === 'bold') {
      this.elementRef.nativeElement.style.fontWeight='bold';
    }
    else if (this.affectStyle === 'border') {
      this.elementRef.nativeElement.style.border='2px solid black';
    }
  }

  private removeStyles() {
    if (this.affectStyle === 'color') {
      this.elementRef.nativeElement.style.color="";
    } else if (this.affectStyle === 'bold') {
      this.elementRef.nativeElement.style.fontWeight="";

    }
    else if (this.affectStyle === 'border') {
      this.elementRef.nativeElement.style.border='';
    }
  }

}