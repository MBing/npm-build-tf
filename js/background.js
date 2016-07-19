/**
 * Created by Martin on 19/07/16.
 */
var $ = require('jquery');

var makeBackgroundRed = function() {
    $('body').css('background-color', 'red');
};

module.exports = makeBackgroundRed;