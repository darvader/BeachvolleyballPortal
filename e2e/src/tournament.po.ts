import { browser, by, element } from 'protractor';

export class TournamentListPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getMenu() {
    return element(by.css('app-root app-tournament-list app-menu'));
  }
}
