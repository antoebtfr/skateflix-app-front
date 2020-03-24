import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHomepageEffect]'
})
export class HomepageEffectDirective {

  constructor(private elRef: ElementRef) {

    const elStyle = this.elRef.nativeElement.style;
    const location = this.elRef.nativeElement.ownerDocument.location.pathname;

    if (location === '/homepage') {
      elStyle.backgroundColor = 'transparent';

      addEventListener('scroll', () => {
        if (window.scrollY > 10 ) {
          elStyle.backgroundColor = '#32809e';
        } else {
          elStyle.backgroundColor = 'transparent';
        }
      });
    }

   }

}
