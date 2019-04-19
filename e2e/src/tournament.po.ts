import { browser, by, element } from 'protractor';

export class TournamentListPage {

  delete() {
    element(by.css('button[type="delete"]')).click();
    browser.switchTo().alert().accept();
  }

  submit() {
    element(by.css('button[type="submit"]')).click();
  }
  
  setSelect(category: string) {
    element(by.css(`option[value="${category}"]`)).click();
  }
  
  getCreateTournamentLink() {
    return element(by.css('a[href="/tournament/edit/0"]'));
  }
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
    
    this.getFormInput('username').sendKeys('afiedler@test.de');
    this.getFormInput('password').sendKeys('password');
    
    element(by.css('button[class="btn btn-primary"]')).click();
  }
  
  getFormInput(formControlName: string) {
    return element(by.css(`input[formcontrolname="${formControlName}"]`));
  }

  getFormText(formControlName: string) {
    return element(by.css(`textarea[formcontrolname="${formControlName}"]`));
  }
  
  getLogin() {
    return element(by.id('login'));
  }
}
