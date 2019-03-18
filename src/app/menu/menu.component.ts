import { Component, OnInit, ViewChild } from '@angular/core';
import { getCurrentUser } from '../shared/helpers';
import { AuthenticationService } from '../api/my-services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private as: AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return getCurrentUser() != null;
  }

  logout() {
    this.as.logout();
  }
}
