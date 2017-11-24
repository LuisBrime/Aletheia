import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for aletheia-network', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be aletheia-network', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('aletheia-network');
    })
  });

  it('navbar-brand should be aletheia-network@0.3.0',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('aletheia-network@0.3.0');
  });

  
    it('contrato component should be loadable',() => {
      page.navigateTo('/contrato');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('contrato');
    });

    it('contrato table should have 7 columns',() => {
      page.navigateTo('/contrato');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });

  
    it('bloque component should be loadable',() => {
      page.navigateTo('/bloque');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('bloque');
    });

    it('bloque table should have 8 columns',() => {
      page.navigateTo('/bloque');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });

  

});
