import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm : FormGroup

  // constructor(){
  //   this.registerForm = new FormGroup({
  //     name : new FormControl(null,Validators.required),
  //     Email : new FormControl(null,([Validators.required,Validators.email])),
  //     UserName : new FormControl(null,([Validators.required,Validators.pattern(/\s/)])),
  //     password : new FormControl(null , ([Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")])),
  //     confirmpassword : new FormControl(null,([Validators.required]))

  //   }) }

  constructor(private fb:FormBuilder ){
    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      Email : ['',([Validators.required,Validators.email])],
      UserName  : ['',([Validators.required,Validators.pattern(/\s/)])],
      password : ['',([Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")])],
      confirmpassword : ['',([Validators.required])]
    })
  };
 

  SubmitRegisterForm(){
    console.log(this.registerForm);
    
  }
}
