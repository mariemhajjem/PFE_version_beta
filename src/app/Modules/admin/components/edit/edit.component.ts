import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  event : any = {
   name :  "",
   date:  "",
   Discription : "",
   temps : ""
 };
  constructor(private fb: FormBuilder , private ES: EventService, private route: ActivatedRoute, private router: Router) { }
  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required] ,
      date:    [null, Validators.required],
      Description :    [null, Validators.required],
      temps :    [null, Validators.required]
    });
 }
  ngOnInit() {
    this.route.params.subscribe(params => {
    this.ES.editEvent(params.id).subscribe(res => {
      this.event = res;
    });
  });
    this.createForm();
    this.form.get('name').setValue(this.event.name);
    this.form.get('date').setValue(this.event.date);
    this.form.get('Description').setValue(this.event.Description);
    this.form.get('temps').setValue(this.event.temps);
  }
  submit(name, date, temps, Description) {
    this.route.params.subscribe(params => {
    this.event.name = name;
    this.event.date = date;
    this.event.Description = Description;
    this.event.temps = temps;
    this.ES.updateEvent(params.id, this.event);
    this.router.navigate(['/admin/listEvent']);
  });
  }

}
