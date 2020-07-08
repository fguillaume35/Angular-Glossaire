import { Component, OnInit } from '@angular/core';
import { Glossaire} from '../../shared/model/glossaire';
import { GlossaireService } from '../core/service/glossaire.service';
import { MessageService } from '../core/service/message.service';



@Component({
  selector: 'app-glossaire',
  templateUrl: './glossaire.component.html',
  styleUrls: ['./glossaire.component.scss']
})
export class GlossaireComponent implements OnInit {


  selectedGlossaire: Glossaire;

  glossaires: Glossaire[];

  constructor(private glossaireService: GlossaireService, private messageService: MessageService) { }

  ngOnInit() {
    this.getGlossaires();
  }

  getGlossaires(): void {
    this.glossaireService.getGlossaires().subscribe(glossaires => this.glossaires = glossaires);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.glossaireService.addGlossaire({ name } as Glossaire)
      .subscribe(glossaire => {
        this.glossaires.push(glossaire);
      });
  }

  delete(glossaire: Glossaire): void {
    this.glossaires = this.glossaires.filter(h => h !== glossaire);
    this.glossaireService.deleteHero(glossaire).subscribe();
  }

  onSelect(glossaire: Glossaire): void {
    this.selectedGlossaire = glossaire;
    this.messageService.add(`GlossaireComponent: Selected glossaire id=${glossaire.id}`);
  }

}
