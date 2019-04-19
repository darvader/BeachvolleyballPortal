import { TournamentListPage } from './tournament.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: TournamentListPage;

  beforeEach(() => {
    page = new TournamentListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Willkommen zum Beachvolleyball Portal!');
  });
  
  fit('create, update, delete tournament', function() {
    page.navigateTo();
    page.login();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
