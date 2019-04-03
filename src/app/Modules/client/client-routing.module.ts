import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandesdevisComponent } from './demandesdevis/demandesdevis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FormulaireformationComponent } from './formulaireformation/formulaireformation.component';
import { RechercheComponent } from './recherche/recherche.component';
         
 

const routes: Routes = [
  {
    path : '',
    component : NavbarComponent,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'demandes',
          component: DemandesdevisComponent
      },
      { path: 'formulaires',
          component: FormulaireformationComponent
      },
      { path: 'home',
           component: BodyComponent
      },
      { path: 'search',
           component: RechercheComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
