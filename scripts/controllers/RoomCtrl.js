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
          this.addUser = function( roomName, email ){
              Room.addUser( {name: roomName}, {email: email, loggedIn: false, loggedInTime: -1} );
          };
          this.addMessage = function (roomName, newMessage) {
              var currentUser=User.getCurrentUser();
              Room.addMessage( roomName, currentUser.email, newMessage );
          }  
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', 'User', RoomsCtrl ] );
})();