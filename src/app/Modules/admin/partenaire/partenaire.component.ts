import { PartenaireService } from './../components/services/partenaire.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Partenaire from '../components/models/partenaire';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  form: FormGroup;
  imageUrl: any;
  isLoading = false;
  Partenaire: Partenaire;
  constructor(private Ps: PartenaireService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      job: new FormControl(null, { validators: [Validators.required] }),
     imageUrl: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ imageUrl: file });
    this.form.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  send() {
    this.Ps.sendDemande(
      this.form.value.name,
      this.form.value.job,
      this.form.value.imageUrl
    );
  }

}
