import { Component, OnInit } from '@angular/core';
import { GlossaireService } from '../core/service/glossaire.service';
import { Glossaire } from 'src/shared/model/glossaire';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  glossaires: Glossaire[];
  constructor(private glossaireService: GlossaireService) { }

  ngOnInit() {
    this.getGlossaires();
  }

  getGlossaires(): void {
    this.glossaireService.getGlossaires().subscribe(glossaires => this.glossaires = glossaires.slice(0, 5));
  }

}
