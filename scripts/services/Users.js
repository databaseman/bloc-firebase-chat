(function () {
    function User( $firebaseArray, $firebaseAuth) {
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
        //    users.$add(user);
            var numberOfUsers =rooms[1].users.length;
            var tempUsers=[];
            for ( var i=0; i<numberOfUsers; i++){
                tempUsers.push(rooms[1].users[i]);
            }
            tempUsers.push(user);
            rooms[1].users=tempUsers;
            rooms.$save(1);
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
