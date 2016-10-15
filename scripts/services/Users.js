(function () {
    function User( $firebaseArray, $firebaseAuth) {
        var userRef = firebase.database().ref().child("users");
        var users = $firebaseArray(userRef);

        User.register = function (newEmail, newPassword) {
            firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.message);
            });
        };

        User.login = function (email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.message);
            });
        };
        
        User.add = function (user) {
            users.$add(user);
        };
        
        User.getAllUsersInRoom = function () {
            console.log( "before return from getAllUsersInRoom");
            console.log( users );
            return users;
        };
        return User;
    }

    angular
        .module('blocChat')
        .factory('User', ['$firebaseArray', '$firebaseAuth', User]);
})();
