// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $input: $('input'),
  $select: $('select'),
  $divRooms: $('div #rooms'),
  // $rooms: $('.rooms'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('button').on('click', FormView.handleAddRoom);
    FormView.$divRooms.append('<form action="#" id="send" method="post"><input type="text" class="rooms"/></form>');

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var text = FormView.$input.val();
    var username = window.App.username;
    var roomname = FormView.$select.val();
    console.log('click!');
    var formMessage = {
      username: username,
      text: text,
      roomname: roomname
    };
    Parse.create(formMessage);
  },

  handleAddRoom: function(event) {
    var $newRoom = $('.rooms');
    Rooms.add($newRoom.val());
    // Parse.createRoom($newRoom.val());
    // console.log(Rooms._data);
    // add input room to Rooms._data array
    //console.log('$newRoom', $newRoom);
    // console.log('formView.$rooms.val()', FormView);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};