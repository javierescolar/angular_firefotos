import { FirebasefotosPage } from './app.po';

describe('firebasefotos App', function() {
  let page: FirebasefotosPage;

  beforeEach(() => {
    page = new FirebasefotosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
