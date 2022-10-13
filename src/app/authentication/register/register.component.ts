import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { AuthService } from 'src/app/shared/auth.service';


const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
const name = 'admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = Object.create(null);

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: name,
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: password,
      password_confirmation: confirmPassword
    });
  }

  onSubmit() {
    this.auth.getRegisterUser(this.form.value).subscribe((data) => {
      console.log(data)
    })
  }
}
