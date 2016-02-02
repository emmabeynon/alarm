exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['alarmFeature.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8100',
  jasmineNodeOpts: {
    isVerbose:true,
  }
};
