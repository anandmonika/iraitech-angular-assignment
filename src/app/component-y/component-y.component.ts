import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.css']
})
export class ComponentYComponent {
  @Input()
  set textValue(v: string){
    this.textValueFormField.setValue(v || "");
  }
  textValueFormField = new FormControl("")
  @Output() valueUpdated: EventEmitter<any> = new EventEmitter();

  save(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.valueUpdated.emit(this.textValueFormField.value)
  }
}
