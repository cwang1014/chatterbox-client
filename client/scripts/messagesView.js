// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done when this view loads.
    // MessagesView.$chats.appendTo('test');
  },

  render: function() {
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message) {
    var messageId = message.message_id;
    var username = message.username;
    var roomname = message.roomname;
    var text = message.text;
    var $message = $(`<p>${username} posted: ${text} in ${roomname}</p>`);
    // TODO: Render a single message.
    MessagesView.$chats.append($message);
    // console.log(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};