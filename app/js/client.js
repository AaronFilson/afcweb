const angular = require('angular');
require('angular-route');
const AFCApp = angular.module('AFCApp', ['ngRoute']);

require('./simple')(AFCApp);

AFCApp.config(['$routeProvider', function(routes) {
  routes
    .when('/home', {
      controller: 'SimpleController',
      templateUrl: '/views/home.html'
    })
    .when('/bio', {
      controller: 'SimpleController',
      templateUrl: '/views/bio.html'
    })
    .when('/contact', {
      controller: 'SimpleController',
      templateUrl: '/views/contact.html'
    })
    .when('/gallery', {
      controller: 'SimpleController',
      templateUrl: '/views/gallery.html'
    })
    .when('/projects', {
      controller: 'SimpleController',
      templateUrl: '/views/projects.html'
    })
    .when('/ceramicsterms', {
      controller: 'SimpleController',
      templateUrl: '/views/ceramicsterms.html'
    })
    .when('/', {
      controller: 'SimpleController',
      templateUrl: '/views/home.html'
    })
    .when('/index', {
      controller: 'SimpleController',
      templateUrl: '/views/home.html'
    })
    .when('/homepage', {
      controller: 'SimpleController',
      templateUrl: '/views/home.html'
    })
    .otherwise({
      templateUrl: '/views/404.html'
    });
}]);
