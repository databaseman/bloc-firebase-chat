$(function() {
    firebaseRef.on("value", function(snap) {
  // snap.val() will contain the JS object.
     $("#result").html(
        JSON.stringify(snap.val())
      );
    });
});