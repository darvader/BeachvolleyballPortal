import { TournamentListPage } from './tournament.po';
import { browser, logging, by } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: TournamentListPage;

  beforeEach(() => {
    page = new TournamentListPage();
  });
  
  fit('Create, update, delete player', function() {
    page.login();
    
    
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
