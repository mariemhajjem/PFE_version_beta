import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.css']
})
export class CrudUsersComponent implements OnInit {
  id: string;
  user: any = {};
  updateForm: FormGroup;
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  } 
   createForm() {
    this.updateForm = this.fb.group({
      email: ['', Validators.required] 
      
    });
  }
  ngOnInit() {
     // Autopopulates the input fields with the selected document data.
       this.route.params.subscribe(params => {
       this.id = params.id;
       this.userService.getUserById(this.id).subscribe(res => {
        this.user = res;
        this.updateForm.get('email').setValue(this.user.email);
         
  })
})

  }
  // Updates the document with input data and redirects to the /list route.
updateUser(email) {
  this.route.params.subscribe(params => {
  this.userService.updateUser(params['id'], email).subscribe(() => {
    this.router.navigate(['/admin/users']);
  });
})}

}
