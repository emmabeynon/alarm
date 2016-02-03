describe('Alarm', function() {
  it('has a title', function() {
    browser.get('http://localhost:8100');
    expect(browser.getTitle()).toEqual('Alarm');
  });

  // As a commuter
  // So that the right alarm time is calculated for me
  // I would like to specify my journey starting point
  describe('User config', function() {
    var settingsTab = element(by.css('.ion-ios-gear-outline'));
    var startingPoint = element(by.model('settingsCtrl.startingPoint'));
    var saveButton = element(by.css('.button-positive'));

    it('allows user to enter their journey start postcode', function() {
      settingsTab.click();
      startingPoint.sendKeys('E1 6LT');
      saveButton.click();
      expect(startingPoint.getAttribute('autofocus')).toContain('E1 6LT');
    });
  });
});
