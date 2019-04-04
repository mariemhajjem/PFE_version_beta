import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormationService } from './../services/formation.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: FormationService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nameFormation: ['', Validators.required ],
      type: ['', Validators.required ],
      nb: ['', Validators.required ],
      imageURL : ['', Validators.required]
    });
  }

  addBusiness(nameFormation, type, nb,imageURL) {
    this.bs.addBusiness(nameFormation, type, nb,imageURL);
  }

  ngOnInit() {
  }

}
