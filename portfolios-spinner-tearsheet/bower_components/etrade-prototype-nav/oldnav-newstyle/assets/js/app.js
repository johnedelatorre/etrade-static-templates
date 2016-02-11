// 'use strict';

// angular.module('accountBalances', ['ngRoute'])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/error', {
//         templateUrl: 'views/error.html',
//         controller: 'ErrorCtrl'
//       })
//       .when('/success', {
//         templateUrl: 'views/success.html',
//         controller: 'SuccessCtrl',
//       })
//       .otherwise({
//         templateUrl: 'views/dashboard.html',
//         controller: 'DashboardCtrl',
//       });
//   });

'use strict';

window.AccountBalances = Ember.Application.create({
  rootElement: "#content"
});