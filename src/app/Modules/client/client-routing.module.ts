import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandesdevisComponent } from './demandesdevis/demandesdevis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormulaireformationComponent } from './formulaireformation/formulaireformation.component';
import { HomeComponent } from './home/home.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { PanierComponent } from './panier/panier.component';
import { ProfilComponent } from './profil/profil.component';
import { ChatComponent } from './chat/chat.component';



const routes: Routes = [
  {
    path : '',
    component : NavbarComponent,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path :'home' , component : HomeComponent},

      { path: 'contact',
           component: ContactComponent
      }
      ,
      { path: 'list',
           component: ListeFormationsComponent
      } ,
      { path: 'espacePersonnel',
           component: ProfilComponent
      } ,
      { path: 'list/:id',
           component: FormationDetailsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'panier',
        component: PanierComponent
      }
      
    ]
  },
  { path: 'demandes',
          component: DemandesdevisComponent
      },
      { path: 'formulaires',
          component: FormulaireformationComponent
      },
      { path: 'chat',
          component: ChatComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
