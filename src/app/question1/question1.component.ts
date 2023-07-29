import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],

})
export class Question1Component {
  index: FormControl;
  number: number | null;
  msg: string = ""
  
  constructor(private router: Router) {
    this.index = new FormControl('');
    this.number = null;
  }

  updateNumber(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    let idx = this.index.value;
    console.log(idx, this.index.value);
    this.msg = "";
    if(typeof idx != "number" || !idx) {
      this.msg = "Invalid Index!"
      return;
    }
    this.number = this.getNthNumber(idx);
  }

  getNthNumber(num: number): number {
    if(num % 2 === 0) return num * num - 1;
    
    return num * num + 1;
  }

  goToHome(){
    this.router.navigate(['']);
  }
  
}
