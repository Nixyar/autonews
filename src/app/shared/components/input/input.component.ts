import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  isFocus: boolean = false;
  @Input() form: FormGroup;
  @Input() placeholderName: string = '';
  @Input() inputValue: string | number | undefined = undefined;
  @Input() type: string = 'text';
  @Input() inputName: string = '';
  @Input() tabIndex: number = 0;

  @Output() selectedInputFiles = new EventEmitter();

  focusInputIn(): boolean {
    return this.isFocus = true;
  }

  focusInputOut(): boolean {
    return this.isFocus = false;
  }

  inputValid(): boolean {
    return !!(this.form.get(this.inputName) as FormGroup).value;
  }

  fileChange(evt: any) {
    if (this.type === 'file') {
      this.selectedInputFiles.emit(evt);
    }
  }
}
