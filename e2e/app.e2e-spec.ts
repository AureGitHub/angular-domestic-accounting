import { AngularDomesticAccountingPage } from './app.po';

describe('angular-domestic-accounting App', function() {
  let page: AngularDomesticAccountingPage;

  beforeEach(() => {
    page = new AngularDomesticAccountingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
