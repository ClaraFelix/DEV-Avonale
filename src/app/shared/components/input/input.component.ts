import { Component, EventEmitter, Input, Output } from '@angular/core';

export type HTMLInputTypeAttribute = 'text' | 'email' | 'number' | 'tel';

@Component({
  selector: 'dev-avonale-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() value = '';
  @Input() type: HTMLInputTypeAttribute = 'text';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }
}
