import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaireSearchComponent } from './glossaire-search.component';

describe('GlossaireSearchComponent', () => {
  let component: GlossaireSearchComponent;
  let fixture: ComponentFixture<GlossaireSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlossaireSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossaireSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
