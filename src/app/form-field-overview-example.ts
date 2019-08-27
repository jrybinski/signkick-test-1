import { Component } from '@angular/core';
import { UsernameService } from './username.service';
import { UserService } from './user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsernameValidator} from "./username.validator";

@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  registrationForm: FormGroup;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _usernameService: UsernameService,
  ) {
    this.registrationForm = this._formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['',  Validators.compose([Validators.minLength(3),
        Validators.required]), UsernameValidator.createValidator(this._usernameService)],
      description: [''],
      gender: ['', Validators.required],
    })
  }

  onSubmit() {
    this._userService.createUser(this.registrationForm.getRawValue());
    this.registrationForm.reset();
  }
}

