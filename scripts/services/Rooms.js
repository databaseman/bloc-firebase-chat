(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var Room = {};

        Room.getAll = function () {
            return rooms;
        };


        Room.add = function (room) {
            rooms.$add(room);
        }

        Room.delete = function (room) {
            var location=0;
            for (var i = 0; i < rooms.length; i++) {
                if (rooms[i].name === room.name ) {
                    location=i;
                    break;
                }
            }
            rooms.$remove(rooms[location]);
        }
        return Room;

    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
