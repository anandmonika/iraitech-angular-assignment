import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component {
  textValue: FormControl = new FormControl('')
  constructor(private router: Router) {}
  goToHome(){
    this.router.navigate(['']);
  }
}
