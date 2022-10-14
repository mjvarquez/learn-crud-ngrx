import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { AuthStorageService } from 'src/app/shared/auth-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = Object.create(null);
  
  constructor(private fb: FormBuilder, 
              private router: Router, 
              private authService: AuthService,
              private token: AuthStorageService ) { }

  onSubmit() {
    this.authService.getLoggedUser(this.form.value).subscribe({
      next: data => {
        console.log(data)
        this.token.saveToken(data.token)
        this.token.saveUser(data)
        this.router.navigate(['/dashboards/dashboard1'])
      },
      error: err => {
        console.log(err.error.message)
      }
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }
}


