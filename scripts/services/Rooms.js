(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var Room = {};

        Room.getAll = function () {
            return rooms;
        };

        Room.addRoom = function (room) {
            var newRoom = {
                roomName: room.name,
                users: [ {name: 'zzzzz', loggedIn: false, loggedInTime: -1}],
                messages: [{timeCreated: -1, username:'zzzzz', message: 'zzzzz'} ]
            };
            rooms.$add(newRoom);
        }

        Room.getRoom = function( room ) {
            var location=0;
            for (var i = 0; i < rooms.length; i++) {
                if (rooms[i].roomName === room.name ) {
                    location=i;
                    break;
                }
            }
            return rooms[location];
        };
        
        Room.deleteRoom = function (room) {
            rooms.$remove(Room.getRoom(room));
        };
        
        Room.addUser = function (room, user) {
            console.log( "in addUser");
            console.log( room );
            console.log( user );
        }
    
        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
