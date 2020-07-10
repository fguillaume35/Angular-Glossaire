import { Component, OnInit, Input } from '@angular/core';
import { Glossaire } from 'src/shared/model/glossaire';
import { ActivatedRoute } from '@angular/router';
import { GlossaireService } from 'src/app/core/service/glossaire.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-glossaire-detail',
  templateUrl: './glossaire-detail.component.html',
  styleUrls: ['./glossaire-detail.component.scss']
})
export class GlossaireDetailComponent implements OnInit {
  @Input() glossaire: Glossaire;
  constructor(private route: ActivatedRoute, private glossaireService: GlossaireService, private location: Location) { }

  ngOnInit() {
    this.getGlossaire();
  }
  getGlossaire(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.glossaireService.getGlossaire(id)
      .subscribe(glossaire => this.glossaire = glossaire);
  }
  save(): void {
    this.glossaireService.updateGlossaire(this.glossaire)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
