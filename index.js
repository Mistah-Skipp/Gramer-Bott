const Discord = require("discord.js");
const client = new Discord.Client();
const keep_alive = require('./alive.js');
const fs = require('fs');
const Database = require("@replit/database")
const db = new Database()
//db.set("george", 0).then(() => {});
//db.set("alex", 0).then(() => {});
//db.set("test",25).then(() => {});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
    client.user.setPresence({
        status: "online",  //You can show online, idle....
    });
});

//test zone
client.on('message', message =>{
    if(message.content === "gajmD"){
        /*fs.readFile('botRef.json', (err, data) =>{
            if (err) throw err;
            let student = JSON.parse(data);
            message.channel.send("defaulting json");
            let student2 = {
                george: 50,
                alex: 50
            }
            let newData =  JSON.stringify(student2, null, 2);
            fs.writeFileSync('botRef.json',newData);
        });*/
        var tdb = db.get("test").then(value => {console.log()});
        message.channel.send("\ntest DB: "+tdb);
        var tdb2 = db.get("test").then((value) => value.json()).then((user) => console.log(user.key));
        message.channel.send("\ntest DB2: "+tdb2);
    }
});


//listed rando msg
client.on('message', message => {
    console.log(message.content)
    var resp = Math.floor((Math.random() * 100) + 1);
    var doesResp = Math.floor((Math.random() * 100) + 1);

    let args = message.content.toLowerCase().split(" ");
    var cntr = 0;
    var length = message.content.length;
    console.log(length);
    while (length >= cntr){
        switch(args[cntr]){
            case "69":
                message.channel.send("nice :smiley:");
                cntr++;
                break;
            case "420":
                message.channel.send("W33D");
                cntr++;
                break;
            case "star":
                if(args[cntr+1] == "wars"){
                message.channel.send({files:["https://cdn.discordapp.com/attachments/834917458682314762/927338516009082900/atsts.gif"]});
                }
                cntr++;
                break;
            default:
                cntr++;
                break;
        }
    }

    if (message.member.roles.cache.has('354004613797511169')) {
            console.log("do i respond:\n(0-10 gen || 11-20 spec)"+doesResp);
            console.log("what response i choose for gen: "+resp);
            fs.appendFile('log.txt', doesResp +" || "+ resp+"\r\n", (err) => {if (err) throw err;});
        if (doesResp > 5 && doesResp <= 10){
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
        } else if(doesResp > 10  &&  doesResp <= 20){
            if(message.author.id === "266014149853708291"){
                message.channel.send("Godzilla bad");
                //joe
            } else if(message.author.id === "263457606645972995"){
                message.channel.send("whatever Mr. $4000 bed");//goerg
            } else if(message.author.id ==="163810266625081345"){
                message.channel.send("says the token gay guy");//bryan
            }else if(message.author.id === "296404969387720705"){
                var car = Math.floor((Math.random() * 10) + 5);
                message.channel.send("go roll your " + car + "th car you cuck");
                //alex
            }else if(message.author.id === "312399825637212160"){
                message.channel.send("Dont care, didnt ask");
                //jake
            }else if(message.author.id === "174377288903688192"){
                message.channel.send("OK elite preferred species");//josh
            }else if(message.author.id === "242037517241548801"){
                message.channel.send("I cant insult my wittle PogChamp");
                //chris
            }else if(message.author.id === "324612052532592641"){
                message.channel.send("Matt your the only one i like out of these bumbling retards");
                //matt
            }
        }
    }

});

client.login(process.env['TOKEN']);




//setup vc capability (play any audio)
//possible have that in sepereate js file, figure out how to link/run the two side by side