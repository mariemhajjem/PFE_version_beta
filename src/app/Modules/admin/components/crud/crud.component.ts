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
    rangeDates: Date[];
    es: any;

  invalidDates: Array<Date>
  cities: any[];

    selectedCity: any;

    selectedCities: any[];
 

  constructor(private fs: FormationService, private route: ActivatedRoute) {
    this.cities = [
      {nameFormation: 'New York', Sujet: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }




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
      Sessions: new FormControl(null, { validators: [Validators.required] }),

      rangeDates:new FormControl(null, { validators: [Validators.required] }),
    });
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

 let tr = {
      firstDayOfWeek : 1
  }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;


  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
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
    console.log(this.form.value.Sessions);
      this.fs.addFormation(
        this.form.value.nameFormation,
        this.form.value.type,
        this.form.value.imageUrl,
        this.form.value.D,
        this.form.value.Sujet
      );
    }
  }

