import { Component, OnInit, ViewChild } from '@angular/core';
import { getCurrentUser, hasRole } from '../shared/helpers';
import { AuthenticationService } from '../api/my-services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hasRole = hasRole;
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
