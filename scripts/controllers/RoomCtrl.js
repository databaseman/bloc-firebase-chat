(function () {
      function RoomsCtrl(Room, User) {
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

            this.allUsersInRoom = ['m1@yahoo.com', 'm2@yahoo.com', 'm3@yahoo.com'];
         //     this.allUsersInRoom = function(roomName ) {
        //      alert( "in RoomCtrl this.allUsersInRoom");
        //        return ['m1@yahoo.com', 'm2@yahoo.com', 'm3@yahoo.com' 'm4@yahoo.com'];  
              // return Users.getAllUsersInRoom( roomName );
        //  }
        
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', 'User', RoomsCtrl ] );
})();