(function() {
     function config($stateProvider, $locationProvider) {
     $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
      $stateProvider
         .state('Room', {
             url: '/',
             controller: 'RoomCtrl as chat',
             templateUrl: '/pages/index.html'
         })
        ;
     }
 
     angular
         .module('blocChat', ['firebase','ui.router'])
         .config(config);
 })();