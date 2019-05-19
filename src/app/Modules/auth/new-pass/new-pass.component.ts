import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private auth: AuthService,private router : Router, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      password: ['', Validators.required ]
    });
  }
  submit(password){
    if (this.angForm.controls['password'].invalid) {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: "password entré est invalide"});
     return;
    };
    let Userpassword= {
      password: password,
    };this.route.params.subscribe(params => {
      this.auth.newPass(params.token,Userpassword).subscribe(
        res => {console.log(res); this.router.navigate(['/auth/login']) },
        err => { console.log(err); this.messageService.add({severity: 'error', summary: 'Succès', detail: 'Ce compte n\'existe pas'}); this.router.navigate(['auth/resetPass']);})
 })
}
}
