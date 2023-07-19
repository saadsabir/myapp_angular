import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator } from '../shared/validators/domain.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  //@ViewChild('myform') form!: NgForm
  propEmail: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass: FormControl = new FormControl()
  form: FormGroup = this.builder.group({
    email: this.propEmail,
    password: this.propPass
  })
  submitted: boolean = false

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    /*setTimeout(() => {
       this.propEmail.setValue('test')
    }, 1000)*/
  }
  login() {
    this.submitted = true
    if (this.form.invalid) return
    console.log(this.form.value)
  }
}