// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function(key) {
    if (Messages._data[key] !== undefined) {
      return Messages._data[key];
    }
    return null;
  },

  add: function(key, value) {
    Messages._data[key] = value;
    return Messages._data;
  }

};