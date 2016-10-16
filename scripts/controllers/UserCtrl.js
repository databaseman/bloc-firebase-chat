(function () {
    function UsersCtrl($location, User) {
        this.register = function (newName, newEmail, newPassword) {
            User.register(newEmail, newPassword);
            var date = new Date();
            var newUser = {
                email: this.newEmail,
                loggedIn: true,
                loggedInTime: date.toString()
            };
            User.add({
                roomName: 'Welcome / General'
            }, newUser);
            this.newName = ''; // variables from register.html
            this.newEmail = '';
            this.newPassword = '';
            $location.path('/templates/main.html');
        };
        this.login = function (email, password) {
            User.login(email, password);
            this.email = '';
            this.password = '';
            $location.path('/templates/main.html');
        };
        this.logout = function (email, password) {
            User.logout();
            this.email = '';
            this.password = '';
            $location.path('/templates/home.html');
        };
    }

    angular
        .module('blocChat')
        .controller('UsersCtrl', ['$location', 'User', UsersCtrl]);
})();
