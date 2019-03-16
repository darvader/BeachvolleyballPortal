import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/api/models';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerResourceService } from 'src/app/api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {

  player$: Observable<Player>;
  player: Player;
  playerForm: FormGroup;

  constructor(private ps: PlayerResourceService, private route: ActivatedRoute,
    private router: Router, private datePipe: DatePipe, private location: Location) { }

  ngOnInit() {
    this.player$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(id => parseInt(id, 10) > 0), 
      switchMap(id => this.ps.retrievePlayerUsingGET(parseInt(id, 10)))
    );

    this.player$.subscribe(t => {
      this.player = t;
      this.fillForm(this.player);
    });

    this.playerForm = new FormGroup({
      id: new FormControl('', [
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      firstName: new FormControl('', [
        Validators.required,
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      club: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
    });  

  }

  goToDetails = (p: Player) => {
    this.router.navigate(['../../details/', p.id], {relativeTo: this.route});
  }

  fillForm(player: Player) {
    this.playerForm.setValue({...player})
    this.player = player;
  }

  submitForm() {
    const newPlayer: Player = {
      ...this.playerForm.value
    };

    if (newPlayer.id === null) {
      this.ps.createPlayerUsingPOST(newPlayer).subscribe(this.goToDetails);
    } else {
      this.ps.updatePlayerUsingPUT(newPlayer).subscribe(this.goToDetails);      
    }
    this.playerForm.reset();
  }

  genders = [
    {name: 'Weiblich', value: 'FEMALE'},
    {name: 'Männlich', value: 'MALE'},
  ]

  goBack() {
    this.location.back();
  }
}
