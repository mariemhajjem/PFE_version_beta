import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  angForm: FormGroup;
  constructor(private auth: AuthService,private router : Router, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ]
    });
  }
  submit(email){
    if (this.angForm.controls['email'].invalid) {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: "L'email entré est invalide"});
     return;
    };
    let UserEmail= {
      email: email,
    };
      this.auth.restPass(UserEmail)
      .subscribe(
        res => {console.log(res); this.router.navigate(['/auth/login']) },
        err => { this.messageService.add({severity: 'error', summary: 'Succès', detail: 'Ce compte n\'existe pas'}); this.router.navigate(['auth/resetPass']);})

  }

}
