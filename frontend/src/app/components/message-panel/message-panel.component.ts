import { Component, Input } from '@angular/core';
import { IOption } from '../../models/option';

@Component({
  selector: 'app-message-panel',
  standalone: true,
  imports: [],
  templateUrl: './message-panel.component.html',
  styles: ``,
})
export class MessagePanelComponent {
  @Input() text: string;
}
