//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'auth/auth.js',
      'auth/auth.factory.js',
      'auth/auth.controller.js',
      'auth/disable-on-request.directive.js',
      //'auth/**/*.js',
      //'components/**/*.js',
      //'view*/**/*.js',
      'unit-tests/**/*.js'
    ],

    autoWatch: true,

    //reporters: ['kjhtml'],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
