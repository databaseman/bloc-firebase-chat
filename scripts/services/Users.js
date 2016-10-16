(function () {
    function User($firebaseArray, $firebaseAuth) {
        //var userRef = firebase.database().ref().child("users");
        //var users = $firebaseArray(userRef);
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

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

        User.add = function (roomName, user) {
            var numberOfUsers = rooms[0].users.length;
            var tempUsers = [];
            for (var i = 0; i < numberOfUsers; i++) {
                tempUsers.push(rooms[0].users[i]);
            }
            tempUsers.push(user);
            rooms[0].users = tempUsers;
            rooms.$save(0);
        };

        User.getAllUsersInRoom = function () {
            console.log("before return from getAllUsersInRoom");
            console.log(users);
            return users;
        };

        User.getCurrentUser = function () {
            var user = firebase.auth().currentUser;
            if (user != null) {
                return user;
            }
            /* name = user.displayName; email = user.email; photoUrl = user.photoURL; uid = user.uid; 
             // The user's ID, unique to the Firebase project. Do NOT use
             // this value to authenticate with your backend server, if
             // you have one. Use User.getToken() instead.
             */
            console.log( "Error!  No current user");
        }


        return User;
    }

    angular
        .module('blocChat')
        .factory('User', ['$firebaseArray', '$firebaseAuth', User]);
})();
