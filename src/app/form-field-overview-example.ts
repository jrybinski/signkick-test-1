import { Component } from '@angular/core';
import { UsernameService } from './username.service';
import { UserService } from './user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  registrationForm: FormGroup;

  constructor(
    private _user: UserService, 
    private _formBuilder: FormBuilder,
    private _username: UsernameService, 
  ) {
    this.registrationForm = this._formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      description: [''],
      gender: ['', Validators.required],
    })
  }

  onSubmit() {
    console.log('Submited ', this.registrationForm.getRawValue());
  }
}

