import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  firstNameControl = new FormControl('Juanito', [
    Validators.required,
    Validators.minLength(5)
  ])

  emailControl = new FormControl('', [Validators.email, Validators.required])

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)])
  repeatPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6)])

  lastNameControl = new FormControl('', [Validators.required])

  streetNameControl = new FormControl('', [Validators.required])
  streetNumberControl = new FormControl('', [Validators.required])


  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
    location: new FormGroup({
      streetName: this.streetNameControl,
      streetNumber: this.streetNumberControl
    }),
  },
  {
    validators: [
      this.passwordsMatchValidator()
    ]
  })


  passwordsMatchValidator() {
    return () => {
      if (this.passwordControl.value !== this.repeatPasswordControl.value) {
        return {
          passwordsMatch: true
        }
      }
      return null
    }
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }
}
