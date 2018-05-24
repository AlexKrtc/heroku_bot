const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '578037869:AAH9RGuL2vxzLSinHlyVbl63xfvTEQf44TU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message${msg.chat.date} ${msg.from.last_name}

  const chatId = msg.chat.id;
  const first_name=msg.from.first_name;
  const date1=msg.date;
  //const date2=new Date();
  //var options = {
  //era: 'long',
  //year: 'numeric',
  //month: 'long',
  //day: 'numeric',
  //weekday: 'long',
  //timezone: 'UTC',
  //hour: 'numeric',
  //minute: 'numeric',
  //second: 'numeric'
  //};
  
  const resp = match[1]; // the captured "whatever"
  //const mes1=date2.toLocaleString("ru", options)+' '+ date1+' '+new //Date().toISOString()+' Привет '+first_name+' Как Ваши дела? ';  
  // send back the matched "whatever" to the chat
  const mes1= date1+' '+new Date().toISOString()+' Привет '+first_name+' Как Ваши дела? ';  
  
  bot.sendMessage(chatId, resp);
  bot.sendMessage(msg.chat.id,mes1);
});

bot.onText(/\/start/, msg=> {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

 //console.log(msg);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Получено Ваше сообщение');
});