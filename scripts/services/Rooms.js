(function () {
    function Room($firebaseArray, User) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.getAll = function () {
            return rooms;
        };

        Room.addRoom = function (room) {
            var newRoom = {
                roomName: room.name,
                users: [{
                    email: 'zzzzz@yahoo.com',
                    loggedIn: false,
                    loggedInTime: -1
                }],
                messages: [{
                    timeCreated: -1,
                    email: 'zzzzz@yahoo.com',
                    message: 'zzzzz'
                }]
            };
            rooms.$add( newRoom );
        }

        Room.getRoom = function (room) {
            var location = 0;
            for (var i = 0; i < rooms.length; i++) {
                if (rooms[i].roomName === room.name) {
                    location = i;
                    break;
                }
            }
            return rooms[location];
        };

        Room.deleteRoom = function (room) {
            rooms.$remove(Room.getRoom(room));
        };

        Room.addMessage = function ( roomName, email, newMessage ) {
            var numberOfMessages =rooms[0].messages.length;
            var tempMessages=[];
            var date = new Date();
            var message={timeCreated: date.toString(), email: email, message: newMessage };
            for ( var i=0; i<numberOfMessages; i++){
                tempMessages.push(rooms[0].messages[i]);
            }
            tempMessages.push(message);
            rooms[0].messages=tempMessages;
            rooms.$save(0);
        }
        
        Room.addUser = function (room, user) {
            console.log( "in Rooms.js addUser");
        }

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', 'User', Room]);
})();
