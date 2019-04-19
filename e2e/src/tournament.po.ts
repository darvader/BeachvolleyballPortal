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

  login() {
    
    browser.get(browser.baseUrl + '/login') as Promise<any>;

    element(by.css('input[formcontrolname="username"]')).sendKeys('afiedler@test.de');
    element(by.css('input[formcontrolname="password"]')).sendKeys('password');
    
    element(by.css('button[class="btn btn-primary"]')).click();
  }

  getLogin() {
    return element(by.id('login'));
  }
}
