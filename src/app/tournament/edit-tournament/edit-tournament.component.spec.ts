import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTournamentComponent } from './edit-tournament.component';
import { Tournament } from 'src/app/api/models';
import { imports, declarations, providers, init } from 'src/app/app.module';

fdescribe('EditTournamentComponent', () => {
  let component: EditTournamentComponent;
  let fixture: ComponentFixture<EditTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports:  imports,
      providers: providers
    })
    .compileComponents();
    init();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create tournament', () => {
    const tournament: Tournament = {
      id: 100,
      category: 'CATEGORY1',
      date: '12.6.2019',
      description: 'Test description',
      entryFee: 20,
      contact: 'testUser',
      name: 'TestTournamentName',
      playMode: 'DOUBLEOUT',
      priceMoney: 200,
      type: 'MEN'
    };
    component.fillForm(tournament);
    component.submitForm();
  });
});
