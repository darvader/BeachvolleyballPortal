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
  
  it('create, update, delete tournament', function() {
    page.login();
    
    page.getCreateTournamentLink().click();

    const nameInput = page.getFormInput('name');
    nameInput.sendKeys('TestTournamentName123');
    page.setSelect('CATEGORY1');
    page.setSelect('MIXED');
    
    page.setDate('NOV', '7', '2019');
    page.setSelect('DOUBLEOUT');
    const exampleDescription = 'Example test tournament fancy description.';
    const descriptionInput = page.getFormText('description');
    descriptionInput.sendKeys(exampleDescription);
    const entryFeeInput = page.getFormInput('entryFee');
    entryFeeInput.sendKeys('25');
    const priceMoneyInput = page.getFormInput('priceMoney');
    priceMoneyInput.sendKeys('300');
    const contactInput = page.getFormInput('contact');
    contactInput.sendKeys('testContact');
    page.submit();
    
    expect(page.getTds()).toEqual(['TestTournamentName123', 'Kategory 1', 'Mixed', '07.11.19', 
    'Doppel-KO', exampleDescription, '25', '300', 'testContact']);
    
    page.edit();
    nameInput.clear();
    nameInput.sendKeys('ChangedTournamentName456');
    page.setDate('NOV', '17', '2019');
    page.setSelect('GROUP_SINGLEOUT');
    page.setSelect('CATEGORY3');
    page.setSelect('MEN');
    descriptionInput.clear();
    descriptionInput.sendKeys(exampleDescription + ' changed');
    entryFeeInput.clear();
    entryFeeInput.sendKeys('30');
    priceMoneyInput.clear();
    priceMoneyInput.sendKeys('350');
    contactInput.clear();
    contactInput.sendKeys('testChangedContact');
    page.submit();

    expect(page.getTds()).toEqual(['ChangedTournamentName456', 'Kategory 3', 'Männer', '17.11.19', 
    'Gruppe/Single-Out', exampleDescription + ' changed', '30', '350', 'testChangedContact']);
    
    page.delete();
    browser.sleep(1000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
