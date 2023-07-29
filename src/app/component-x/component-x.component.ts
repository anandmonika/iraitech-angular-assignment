import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})
export class ComponentXComponent {
  @Input() valueList: string[] = [];
  titleValue: string = '';
  @Input() 
  set title(v: string) { 
    this.titleValue = v;
    this.titleControl.setValue(v);
  }

  titleControl: FormControl = new FormControl("");
  @Output() valueUpdated: EventEmitter<any> = new EventEmitter();

  handleValueChange(value: string, idx: number) {
    console.log({ value, idx });
    this.valueList[idx] = value;
    this.emitUpdate();
  }

  updateTitle() {
    this.titleValue = this.titleControl.value;
    this.emitUpdate();
  }

  emitUpdate() {
    this.valueUpdated.emit({ title: this.titleValue, valueList: this.valueList })
  }

  addNewYComponent() {
    this.valueList.push('');
    this.emitUpdate();
  }

}
