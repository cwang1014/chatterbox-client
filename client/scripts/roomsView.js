// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // RoomsView.renderRoom(data[i].roomname);
    // console.log(Rooms._data);
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $roomname = $(`<option>${roomname}</option>`);

    if (!Rooms._data.includes(roomname)) {
      RoomsView.$select.append($roomname);
    }
    // console.log('RoomsView.$select', RoomsView.$select);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
