import { Player } from '../api/models';

export function getCurrentUser(): Player {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
}

export function hasRole(role: string): boolean {
    if (getCurrentUser()) {
        return getCurrentUser().role.includes(role);
    }
}