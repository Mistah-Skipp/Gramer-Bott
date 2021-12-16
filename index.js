const Discord = require("discord.js");
const client = new Discord.Client();
const keep_alive = require('./alive.js');
const fs = require('fs');
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
    client.user.setPresence({
        status: "online",  //You can show online, idle....
    });
});

//listed rando msg
client.on('message', message => {
    console.log(message.content)

    fs.appendFile('log.txt', message.content, (err) => {
    if (err) throw err;
    });
    fs.appendFile('log.txt', "[END]", (err) => {
    if (err) throw err;
    });
    var resp = Math.floor((Math.random() * 100) + 1);
    var doesResp = Math.floor((Math.random() * 100) + 1);

    //splice out user id here, store encase needed
    //set message content to lower here
    



    if(message.content.includes("69")){
        message.channel.send("nice :smiley:");
    } else if (message.content.includes("420")){
        message.channel.send("W33D");
    } else if (message.content.includes("ice cream")){
        message.channel.send("BING CHILLIN");
    } else if (message.content.includes("star wars")){
        message.channel.send({files:["https://cdn.discordapp.com/attachments/293850706987974656/921099272475263027/atsts.gif"]})
    }
    
    
    if (message.member.roles.cache.has('354004613797511169')) {
        if (doesResp <= 5){
            console.log(doesResp);
            console.log(resp);
            if (resp == 69){
                message.channel.send("haha nice.. get it? its the sex number");
            }else if (resp > 0 && resp <= 10){
                message.channel.send("The fuck did you say to me little shit? How are you not at fucking school, do you kiss your mother with that mouth? you shut up when im talking to you ");
            }else if (resp > 10 && resp <= 20){
                message.channel.send("To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head.");
            } else if (resp > 20 && resp <= 30){
                message.channel.send("trying to sell a gently used pallet of bricks, wanna buy?");
            } else if (resp > 30 && resp <= 40){
                message.channel.send("no i dont do coke regularly");
            }else if(resp > 40 && resp <= 50){
                message.channel.send("I hope you die in your sleep");
            }else if (resp > 50 && resp <= 60){
                message.channel.send("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.");
            }else if (resp > 60 && resp <= 70){
                message.channel.send("bad coder cant think of funny");
            }else if (resp > 70 && resp <= 80){
                message.channel.send("bad coder cant think of funny");
            }else if (resp > 80 && resp <= 90){
                message.channel.send("bad coder cant think of funny");
            }else if (resp > 90 && resp <= 98){
                message.channel.send("bad coder cant think of funny");
            } else if (resp > 98 && resp <= 100){
                message.channel.send("I Joe Carpinone am going to do something drastic to the US capital");
            }
        } else if(doesResp > 5  &&  doesResp <= 10){
            //if(message.member.id == "")
        }
    }

});

client.login(process.env['TOKEN']);

//josh get the vacuum
//goerg and mac can tcome on the trip

//setup vc capability (play any audio)
//possible have that in sepereate js file, figure out how to link/run the two side by side