import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPkmnBorderCard]'
})
export class BorderCardDirective {
  private GREY_COLOR = 'grey';
  private RED_COLOR = 'red';
  @Input('appPkmnBorderCard') borderColor;

  constructor(private element: ElementRef) {
    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
  }

  private setBorder(color: string): void {
    const border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }

/**
  * Définir une hauteur
  * @param height
  */

  private setHeight(height: number): void {
    this.element.nativeElement.style.height = height + 'px';
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBorder(this.borderColor || this.RED_COLOR);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBorder(this.GREY_COLOR);
  }
}
