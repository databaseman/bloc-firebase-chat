(function () {
    function UsersCtrl($location, Room, Users) {
        this.register = function (newName, newEmail, newPassword) {
            Users.register(newEmail, newPassword);
            var date = new Date();
            Room.addUser({
                roomName: 'Welcome / General'
            }, {
                users: {
                    name: this.newName,
                    loggedIn: true,
                    loggedInTime: date
                }
            });
            this.newName = ''; // variables from register.html
            this.newEmail = '';
            this.newPassword = '';
            $location.path('/templates/main.html');
        };
        this.login = function (email, password) {
            Users.login(email, password);
            this.email = '';
            this.password = '';
            $location.path('/templates/main.html');
        };
        this.logout = function (email, password) {
            Users.logout();
            this.email = '';
            this.password = '';
            $location.path('/templates/home.html');
        };
    }

    angular
        .module('blocChat')
        .controller('UsersCtrl', ['$location', 'Room', 'Users', UsersCtrl]);
})();
