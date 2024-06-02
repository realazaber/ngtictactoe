import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  @Input() text: string;
  @Input() textCol: string;
  @Input() bgCol: string;
  @Input() isDisabled: boolean;
  classes: string = 'font-hold rounded-sm py-2 px-5 shadow-md';

  getClasses(): string {
    if (this.isDisabled) {
      return 'font-hold rounded-sm py-2 px-5 shadow-md bg-[#e4e4e4] text-[#8b8b8b]';
    } else {
      return `font-hold rounded-sm py-2 px-5 shadow-md text-white bg-${this.bgCol}`;
    }
  }
}
