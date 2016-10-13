(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/templates/home.html'
            })
            .state('Register', {
                url: '/templates/register.html',
                controller: 'UsersCtrl as usersCtrl',
                templateUrl: '/templates/register.html'
            })
            .state('Login', {
                url: '/templates/login.html',
                controller: 'UsersCtrl as usersCtrl',
                templateUrl: '/templates/login.html'
            })
            .state('Logout', {
                url: '/',
                controller: 'UsersCtrl as usersCtrl',
                templateUrl: '/templates/login.html'
            })
            .state('Main', {
                url: '/templates/main.html',
                controller: 'RoomsCtrl as roomsCtrl',
                templateUrl: '/templates/main.html'
            });
    }

    angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
})();
