describe('Alarm', function() {
  it('has a title', function() {
    browser.get('http://localhost:8100');
    expect(browser.getTitle()).toEqual('Alarm');
  });

  describe('User config', function() {
    var settingsTab = element(by.css('.ion-ios-gear-outline'));
    var startingPoint = element(by.model('settingsCtrl.startingPoint'));
    var saveButton = element(by.css('.button-positive'));
    var destinationPoint = element(by.model('settingsCtrl.destinationPoint'));

    // As a commuter
    // So that the right alarm time is calculated for me
    // I would like to specify my journey starting point

    it('allows user to enter their journey start postcode', function() {
      settingsTab.click();
      startingPoint.sendKeys('E1 6LT');
      saveButton.click();
      expect(startingPoint.getAttribute('value')).toEqual('E1 6LT');
    });

    // As a commuter
    // So that the right alarm time is calculated for me
    // I would like to specify my journey destination point

    it('allows user to enter their journey destination postcode', function() {
      settingsTab.click();
      destinationPoint.sendKeys('E1 6LT');
      saveButton.click();
      expect(startingPoint.getAttribute('value')).toEqual('E1 6LT');
    });

    // As a commuter
    // So that the right alarm time is calculated for me
    // I would like to specify how long I need to get ready before starting my journey

    it('allows user to enter their required preparation time', function() {
      settingsTab.click();
      preparationTime.sendKeys('E1 6LT');
      saveButton.click();
      expect(startingPoint.getAttribute('value')).toEqual('E1 6LT');
    });

  });
});
