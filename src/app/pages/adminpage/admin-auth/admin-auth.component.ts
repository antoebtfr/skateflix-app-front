import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { }
  public authForm = this.fb.group({
    id: [''],
    password: [''],
  });

  ngOnInit() {
  }
  public sendAdmin() {
    console.log(this.authForm.value);
    this.router.navigateByUrl('/admin/dashboard');
  }
}
