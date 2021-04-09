const Discord = require("discord.js");
const config = require("./config.json");
const ytdl = require('ytdl-core');

const client = new Discord.Client();

const prefix = "-";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms!`);
  }
  

  else if (command === "add") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});


// Set the bot's presence (activity and status)
client.on("ready", () => {
    client.user.setPresence({
        activity: { 
            name: 'over 72,832 servers. -help',
            type: 'WATCHING'
        },
        status: 'online'
    })
})

 //import the default http core module that is shipped with NODE JS

 
const http= require("http");

//The module creates a Node js WEB Server that can listens to request and send responses
const server = http.createServer((req,res)=>{


    //sets the header of the response to the user and the type of response that you would be sending back
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My First Page</title> </head>");
    res.write("<body><h1>made by naeth#0001 </h1> </body>")
    res.write("/<html>");

    //this most be called to specify the end of the response
    res.end();
});

const responseObject = {
  "nigger": "Please refrain from saying that word.",
  "nigga": "Please refrain from saying that word.",
  "faggot": "Please refrain from saying that word.",
};

client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

//makes your created server listen on port 3000
server.listen(3000);


client.on('message', message => {
     if (message.content.startsWith('-hug')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('you need to tag a user in order to hug them!');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> you just got a hug  https://tenor.com/view/anime-cuddle-cute-gif-12668750`);
         message.react('❤️');
    }
}); 

client.on('message', message => {
     if (message.content.startsWith('-balance')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('Please tag yourself, or someone else.');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> Your current balance is ||1.97 (**IN BITCOIN**)||`);
         message.react('💰');
    }
}); 

client.on('message', message => {
     if (message.content.startsWith('-kiss')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('you need to tag a user in order to kiss them!');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> you just got a kiss! https://tenor.com/view/anime-couple-peck-cute-kiss-gif-12612515`);
         message.react('😘');
    }
}); 

client.on('message', message => {
     if (message.content.startsWith('-slap')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('you need to tag a user in order to slap them!');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> you just got a slap! https://tenor.com/view/girl-slap-anime-mad-student-gif-17423278`);
         message.react('😤');
    }
}); 

client.on('message', message => {
     if (message.content.startsWith('-kill')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('you need to tag a user in order to kill them!!');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> you just got a death ticket! https://tenor.com/view/pillow-wasted-gif-5958526`);
         message.react('😤');
    }
}); 
//https://tenor.com/view/anime-couple-peck-cute-kiss-gif-12612515

  // Register an event to handle incoming messages
    client.on('message', async msg => {
      // This block will prevent the bot from responding to itself and other bots
      if(msg.author.bot) {
        return
      }
    
      // Check if the message starts with '!hello' and respond with 'world!' if it does.
      if(msg.content.startsWith("apply")) {
        msg.reply('Great! Your token is `GVFcVGBNmmJNHBgvfCTgreX%cvnjnBVcdtk` Here is the form! https://forms.gle/FKefz92xj779FUUD6')
        message.react('');
      }
    
      if(msg.content.startsWith("-dm test")) {
        let messageContent = msg.content.replace("!dm", "")
        msg.member.send(messageContent)
      }
    
    })



client.login(config.BOT_TOKEN);