import { FormationService } from './../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, FormControl,  Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {
  form: FormGroup;
  formations: any = {};
  imageUrl: any;
  isLoading = false;
  constructor(private route: ActivatedRoute, private router: Router, private fs: FormationService, private fb: FormBuilder) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fs.editBusiness(params.id).subscribe(res => {
        this.formations = res;
      });
    });
    
    this.form = new FormGroup({
      nameFormation: new FormControl("", { validators: [Validators.required]}),
      type: new FormControl("", { validators: [Validators.required] }),
      imageUrl: new FormControl("", {validators: [Validators.required] }),
      D: new FormControl("", { validators: [Validators.required] }),
      Plan: new FormControl("", { validators: [Validators.required] }),
      Sujet: new FormControl("", { validators: [Validators.required] }),
    });
       }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ imageUrl: file });
    this.form.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  submit() {
   this.route.params.subscribe(params => {
      this.fs.updateBusiness(
        this.form.value.nameFormation,
        this.form.value.type,
        this.form.value.imageUrl,
        this.form.value.D,
        this.form.value.Sujet,
        params.id);
      this.router.navigate(['/admin/listFormation']);
   });
}
}
