import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Glossaire } from 'src/shared/model/glossaire';
import { GlossaireService } from '../core/service/glossaire.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-glossaire-search',
  templateUrl: './glossaire-search.component.html',
  styleUrls: ['./glossaire-search.component.scss']
})
export class GlossaireSearchComponent implements OnInit {
  glossaires$: Observable<Glossaire[]>;
  private searchTerms = new Subject<string>();
  constructor(private glossaireService: GlossaireService) { }

  search(term: string ): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.glossaires$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.glossaireService.searchGlossaires(term)),
    );
  }

}
