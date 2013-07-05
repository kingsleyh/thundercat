basePath = '../../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'src/thundercat/public/javascripts/angular/angular.min.js',
    'src/thundercat/public/javascripts/angular/angular-resource.min.js',
    'src/thundercat/public/javascripts/angular/app.js',
    'src/thundercat/public/javascripts/angular/controllers.js',
    'src/thundercat/public/javascripts/angular/services.js',
    'angular-test/lib/angular-mocks.js',
    'angular-test/lib/angular-scenario.js',
    'angular-test/unit/controllerSpec.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};

