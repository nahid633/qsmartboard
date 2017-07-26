import { QsmartboardPage } from './app.po';

describe('qsmartboard App', () => {
  let page: QsmartboardPage;

  beforeEach(() => {
    page = new QsmartboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
