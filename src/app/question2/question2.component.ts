import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  data: { title: string, valueList: string[] }[] = []
  addNewPanel() {
    this.data.push({ title: `Panel ${this.data.length + 1}`, valueList: [] })
  }

  handleValueChange(data: any, idx: number) {
    console.log(data, idx);
    this.data[idx] = data;
    console.log(this.data);
  }
}
