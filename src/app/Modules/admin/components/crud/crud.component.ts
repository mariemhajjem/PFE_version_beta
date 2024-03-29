import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormationService } from './../services/formation.service';
import Formation from '../models/formation';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
    form: FormGroup;
    imageUrl: any;
    isLoading = false;
    formation: Formation;
  categorie: any;
  selectedLevel: any;
  Categories =  ['Web','Mobile','Design','Marketing Digital'];
  constructor(private fs: FormationService , private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      nameFormation: new FormControl(null, {
        validators: [Validators.required]
      }),
      type: new FormControl(null, { validators: [Validators.required] }),
      imageUrl: new FormControl(null, {validators: [Validators.required] }),
      D: new FormControl(null, { validators: [Validators.required] }),
      Plan: new FormControl(null, { validators: [Validators.required] }),
      Sujet: new FormControl(null, { validators: [Validators.required] }),
      selectedLevel: new FormControl(null, { validators: [Validators.required] }),
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
  selected(){
    this.categorie = this.form.value.selectedLevel;
      console.log(this.form.value.selectedLevel)
    }
    
  submit() {
      this.fs.addFormation(
        this.form.value.nameFormation,
        this.form.value.type,
        this.form.value.imageUrl,
        this.form.value.D,
        this.form.value.Sujet,
        this.form.value.Plan,
        this.categorie
      );
      this.router.navigate(['/admin/listFormation']);
    }
  }

