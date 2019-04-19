import { TournamentListPage } from './tournament.po';
import { browser, logging, by } from 'protractor';
import { element } from '@angular/core/src/render3';

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
    page.login();
    
    page.getCreateTournamentLink().click();

    page.getFormInput('name').sendKeys('TestTournamentName123');
    page.setSelect('CATEGORY1');
    page.setSelect('MIXED');

    page.getFormInput('date').sendKeys('11.7.2019');
    page.setSelect('DOUBLEOUT');
    const exampleDescription = 'Example test tournament fancy description.';
    page.getFormText('description').sendKeys(exampleDescription);
    page.getFormInput('entryFee').sendKeys('25');
    page.getFormInput('priceMoney').sendKeys('300');
    page.getFormInput('contact').sendKeys('testContact');
    page.submit();

    expect(page.getTds()).toEqual(['TestTournamentName123', 'Kategory 1', 'Mixed', '11.7.2019', 'Doppel-KO', exampleDescription, '25', '300', 'testContact']);
    browser.sleep(10000)

    page.delete();

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
