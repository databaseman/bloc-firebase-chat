(function () {
    function UsersCtrl(Users) {
        this.register = function (newName, newEmail, newPassword) {
            Users.register(newEmail, newPassword);
            this.newName = ''; // variables from register.html
            this.newEmail = '';
            this.newPassword = '';
        };
        this.login = function (email, password) {
            Users.login(email, password);
            this.email = '';
            this.password = '';
        };
        this.logout = function (email, password) {
            Users.logout();
            this.email = '';
            this.password = '';
        };
    }

    angular
        .module('blocChat')
        .controller('UsersCtrl', ['Users', UsersCtrl]);
})();
