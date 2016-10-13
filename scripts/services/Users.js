(function () {
    function Users( $firebaseArray, $firebaseAuth, Room) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var Users = {};

        Users.register = function (newEmail, newPassword) {
            firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.message);
            });
        };

        Users.login = function (email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.message);
            });
        };

        Users.logout = function (username) {
            firebase.auth().signOut().then(function () {
                alert(username+" has been logged out");
            }, function (error) {
                console.log(error.message);
            });
        };
        
        return Users;
    }

    angular
        .module('blocChat')
        .factory('Users', ['$firebaseArray', '$firebaseAuth', 'Room', Users]);
})();
