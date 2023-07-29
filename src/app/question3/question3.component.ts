import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {
  public form: FormGroup = this.frombuilder.group({
    ContactNos: new FormArray([new FormControl('') ])
  });;

  constructor(private frombuilder: FormBuilder, private router: Router){ 
  }

  getControls() {
    return (this.form.get('ContactNos') as FormArray).controls;
  }

  addContactNo(){
    (this.form.get('ContactNos') as FormArray).push(new FormControl());
  }

  removeContactNo(idx: number) {
    (this.form.get('ContactNos') as FormArray).removeAt(idx);
  }

  onSubmit(){
    const phoneNumbers = this.form.value.ContactNos.map((pn: number, index: number) => ({ [`phoneNumber${index+1}`]: pn}))
    console.log(phoneNumbers);
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
