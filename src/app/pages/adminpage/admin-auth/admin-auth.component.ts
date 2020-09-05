import { AuthService } from './../../../shared/service/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }
  public authForm = this.fb.group({
    email: [''],
    password: [''],
  });

  ngOnInit() {
  }
  public sendAdmin() {
    console.log(this.authForm.value);
    this.authService.logIn(this.authForm.value)
    .subscribe(data => {
                        if (!data.isAdmin) {
                          throw new Error('wrong');
                        }
                        console.log('good');
                        this.router.navigateByUrl('/admin/dashboard');
  }, err => console.log('wrong'));

  }
}
