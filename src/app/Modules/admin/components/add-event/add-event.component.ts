import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  form: FormGroup;
  imageUrl: any; 
  
  constructor(private EventService : EventService) { }

  ngOnInit() { 
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      date: new FormControl(null, { validators: [Validators.required] }),
      imageUrl: new FormControl(null, {validators: [Validators.required] }),
      D: new FormControl(null, { validators: [Validators.required] }),
      temps: new FormControl(null, { validators: [Validators.required] }),
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
      this.EventService.addEvent(
        this.form.value.name,
        this.form.value.date,
        this.form.value.imageUrl,
        this.form.value.D,
        this.form.value.temps
      );
    }

}
