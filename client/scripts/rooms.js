// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomname) {
    var text = FormView.$input.val();
    var username = window.App.username;
    var rname = roomname;
    var message = {
      username: username,
      text: text,
      rname: rname
    };
    if (!Rooms._data.includes(roomname)) {
      Rooms._data.push(roomname);
      // Parse.create(message);
    }
    return Rooms._data;
  }


};