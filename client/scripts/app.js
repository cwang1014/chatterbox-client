// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),
  $chats: $('#chats'),

  username: 'anonymous',
  roomname: '',

  initialize: function() {

    App.username = window.location.search.substr(10);
    // App.roomname declaration??
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App);
    App.stopSpinner();

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // TODO: Make sure the app loads data from the API continually, instead of just once at the start.
    App.$chats.prepend('<button id="refresh">button</button>');
    $('#refresh').on('click', App.handleRefresh);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        MessagesView.renderMessage(data[i]);

        Messages.add(data[i].message_id, data[i]);

        RoomsView.renderRoom(data[i].roomname);

        Rooms.add(data[i].roomname);
      }
      // console.log(data);


      // TODO: Use the data to update Messages and Rooms and re-render the corresponding views.

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  handleRefresh: function(event) {
    App.initialize();
  },
};
