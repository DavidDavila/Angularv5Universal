import { BoileplateAngularUniversalPage } from './app.po';

describe('boileplate-angular-universal App', () => {
  let page: BoileplateAngularUniversalPage;

  beforeEach(() => {
    page = new BoileplateAngularUniversalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
