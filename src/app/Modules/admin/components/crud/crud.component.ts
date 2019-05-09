import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormationService } from './../services/formation.service';
import Formation from '../models/formation';

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
  
  constructor(private fs: FormationService, private route: ActivatedRoute) {}

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
      this.fs.addFormation(
        this.form.value.nameFormation,
        this.form.value.type,
        this.form.value.imageUrl,
        this.form.value.D,
        this.form.value.Sujet
      );
    }
  }

