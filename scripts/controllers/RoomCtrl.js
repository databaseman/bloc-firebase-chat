(function () {
      function RoomsCtrl(Room) {
          this.allrooms=Room.getAll();
          this.addRoom = function(roomName) {
              Room.addRoom({name: roomName});
              this.newRoomName = '';
          };
          this.deleteRoom = function(roomName) {
              Room.deleteRoom({name: roomName});
              this.roomName = '';
          };
          this.addUser = function( roomName, userName ){
              Room.addUser( {name: roomName}, {user: userName });
          };
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl ] );
})();