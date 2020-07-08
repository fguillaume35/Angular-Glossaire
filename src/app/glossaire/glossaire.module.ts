import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossaireRoutingModule } from './glossaire-routing.module';
import { GlossaireComponent } from './glossaire.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GlossaireDetailComponent } from './glossaire-detail/glossaire-detail.component';


@NgModule({
  declarations: [GlossaireComponent, GlossaireDetailComponent],
  imports: [
    CommonModule,
    GlossaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GlossaireModule { }
