import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormationService } from '../../admin/components/services/formation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit, AfterViewInit {
  async ngAfterViewInit() {
		await this.loadScript('../../../../assets/client/js/course.js');
	}

	private loadScript(scriptUrl: string) {
	  return new Promise((resolve, reject) => {
		 const scriptElement = document.createElement('script');
		 scriptElement.src = scriptUrl;
		 scriptElement.onload = resolve;
		 document.body.appendChild(scriptElement);
		})
	 }

  formation: any;

  constructor(private route: ActivatedRoute, private router: Router,private formationService :FormationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formationService.editBusiness(params.id).subscribe(res => {
        this.formation = res;
      });
    });
  }

}
