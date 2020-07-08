import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Glossaire } from '../shared/model/glossaire';
@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const glossaires = [
      { id: 11, name: 'Composant'},
      { id: 12, name: 'Router'},
      { id: 13, name: 'Directive'},
      { id: 14, name: 'Module'},
      { id: 15, name: 'Service'},
      { id: 16, name: 'Template'},
      ];
    return {glossaires};
  }

  genId(glossaires: Glossaire[]): number {
    return glossaires.length > 0 ? Math.max(...glossaires.map(glossaire => glossaire.id)) + 1 : 11;
  }

}
