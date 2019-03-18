import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PlayerResourceService } from '../services/player-resource.service';
import { Login } from '../models/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private ps: PlayerResourceService) { }

    login(username: string, password: string) {
        var login: Login = {email: username, password: password};
        return this.ps.loginUsingPOST(login).pipe(map(player => {
            // login successful if there's a user in the response
            if (player) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                player.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(player));
            }

            return player;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}