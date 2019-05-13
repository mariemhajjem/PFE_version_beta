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
  formations: any = {
    nameFormation: "" ,
    type :    "" ,            
    imageUrl : "" ,    
    D :    "" ,   
    Plan :    "" ,   
    Sujet :    "" , 
  };
  imageUrl: any;
  isLoading = false;
  constructor(private route: ActivatedRoute, private router: Router, private fs: FormationService, private fb: FormBuilder) {}
  createForm() {
    this.form = this.fb.group({
       
      nameFormation: ['', Validators.required] ,
      type :    ['', Validators.required] ,            
        
      Description :    ['', Validators.required] ,   
      Plan :    ['', Validators.required] ,   
      Sujet :    ['', Validators.required] ,    
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fs.editBusiness(params.id).subscribe(res => {
        this.formations = res;
      });
    });
    this.createForm();
       this.form.get('nameFormation').setValue(this.formations.nameFormation);
       this.form.get('type').setValue(this.formations.type);
      
       this.form.get('Plan').setValue(this.formations.Plan);
       this.form.get('Sujet').setValue(this.formations.Sujet);
       this.form.get('Description').setValue(this.formations.Description);
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


submit(nameFormation,type,Sujet,Plan,D) {
  this.route.params.subscribe(params => {
  this.formations.nameFormation=nameFormation;
  this.formations.type=type;
 
  this.formations.Description=D;
  this.formations.Sujet=Sujet;
  this.formations.Plan=Plan;
 
  this.fs.updateFormation(params.id,this.formations)
  this.router.navigate(['/admin/listFormation']);
})
}
}
