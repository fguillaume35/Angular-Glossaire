import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlossaireComponent} from './glossaire.component';
import { GlossaireDetailComponent} from './glossaire-detail/glossaire-detail.component';



const routes: Routes = [
  {path: '', component: GlossaireComponent},
  { path: ':id', component: GlossaireDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossaireRoutingModule { }
