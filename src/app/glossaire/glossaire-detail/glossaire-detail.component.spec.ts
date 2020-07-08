import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaireDetailComponent } from './glossaire-detail.component';

describe('GlossaireDetailComponent', () => {
  let component: GlossaireDetailComponent;
  let fixture: ComponentFixture<GlossaireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlossaireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
