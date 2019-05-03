import { MainPage } from './main.po';
import { browser, logging, by } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });
  
  fit('Create, update, delete player', function() {
    page.login();
    page.gotToPlayers();
    
    browser.sleep(10000);
  });
  
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
