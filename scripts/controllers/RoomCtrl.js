(function () {
      function RoomCtrl(Room) {
          this.allrooms=Room.getAll();
          this.addRoom = function(roomName) {
              Room.add({name: roomName});
              this.newRoomName = '';
          };
          this.deleteRoom = function(roomName) {
              Room.delete({name: roomName});
              this.roomName = '';
          };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl ] );
})();