import { Component, OnInit } from '@angular/core';
import { TournamentResourceService } from 'src/app/api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament, Registration } from 'src/app/api/models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { hasRole } from 'src/app/shared/helpers';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
  id: string;

  constructor(private ts: TournamentResourceService, private route: ActivatedRoute, private router: Router) { }

  hasRole = hasRole;
  registrations$: Observable<Registration[]>;

  ngOnInit() {
    this.registrations$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.ts.retrieveRegistrationsUsingGET(parseInt(id, 10)))
    );

    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(id => this.id = id);
  }

}
