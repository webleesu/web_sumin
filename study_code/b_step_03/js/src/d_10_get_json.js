"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_10_get_json.js
var dataUrl = 'https://script.google.com/macros/s/AKfycbwBZ3Mja4FKKF7hex05dhHNxp7otcLp7YrbLh9bHOTw1O0HsR0ftS1RKcGxYxiOYOXxUA/exec';
fetch(dataUrl).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
});