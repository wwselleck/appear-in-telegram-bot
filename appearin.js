var request = require('request-promise');

var API_URL = "https://api.appear.in";

function ensureSlash(str){
  if(str[0] !== '/'){
    return '/' + str;
  }
  return str;
}

function getRoom(opts){
  var endpoint = '/random-room-name';
  var url = API_URL + endpoint;
  var roomURL = 'appear.in';

  var roomName;
  if(opts.name){
    return Promise.resolve(roomURL + ensureSlash(opts.name));
  }
  else{
    return request.get(url).then(function(res) {
      var name = JSON.parse(res).roomName;
      return roomURL + ensureSlash(name);
    }, function(err){
      console.info(err);
    });
  }
}

module.exports = {
  getRoom: getRoom
};
