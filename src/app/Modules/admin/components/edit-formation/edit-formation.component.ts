import { FormationService } from './../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {
  angForm: FormGroup;
  formations: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private fs: FormationService, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      nameFormation: ['', Validators.required ],
      type: ['', Validators.required ],
      nb: ['', Validators.required ]
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fs.editBusiness(params['id']).subscribe(res => {
        this.formations = res;
      });
    });
  }

  updateBusiness(nameFormation, type, nb) {
   this.route.params.subscribe(params => {
      this.fs.updateBusiness(nameFormation, type, nb, params['id']);
      this.router.navigate(['/admin/listFormation']);
   });
}
}
