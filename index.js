var TelegramBot = require('node-telegram-bot-api');
var AppearIn = require('./appearin');
var config = require('./config');

var token = config.token;

var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/appear/, function(msg, match){
  var opts = {};

  var splitText = msg.text.split(" ");
  console.log("Split text length: " + splitText.length);
  console.log(splitText);
  if(splitText.length > 1){
    opts.name = splitText[1];
    console.log("Name provided: " + opts.name);
  }

  AppearIn.getRoom(opts).then(function(url){
    console.log(url);
    console.log(msg);
    var fromId = msg.chat.id;
    bot.sendMessage(fromId, url);
  });
})
