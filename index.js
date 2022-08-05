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
const correctSpelling = ['accomodate','accommodation','achieve','acriss','aggressive','aggression','apparently','appearance','argument','assassination','basically','beginning','believe','believe','bizarre','business','calendar','caribbean','cemetery','chauffeur','colleague','coming','committee','completely','conscious','curiosity','definitely','dilemma','disappear','disappoint','ecstasy','embarrass','environment','existence','Fahrenheit','familiar','finally','fluorescent','foreign','foreseeable','forty','forward','friend','further','gist','glamorous','government','guard','happened','harass','harassment','honorary','humorous','idiosyncrasy','immediately','incidentally','independent','interrupt','irresistible','knowledge','liaise','liaison','lollipop','millenniummillennia','neanderthal','necessary','noticeable','occasion','occasion','occurred','occurring','occurrence','occurrence','pavilion','persistent','pharaoh','piece','politician','Portuguese','possession','preferred','preferring','propaganda','publicly','really','receive','referred','referring','religious','remember','remember','resistance','sense','separate','siege','successful','supersede','surprise','tattoo','tendency','therefore','threshold','tomorrow','tomorrow','tongue','truly','unforeseen','unfortunately','until','weird','wherever','which'];
const incorrectSpelling = ['accomodate','accomodation','acheive','accross','agressive','agression','apparantly','appearence','arguement','assasination','basicly','begining','beleive','belive','bizzare','buisness','calender','Carribean','cemetary','chauffer','collegue','comming','commitee','completly','concious','curiousity','definately','dilemna','dissapear','dissapoint','ecstacy','embarass','enviroment','existance','farenheit','familar','finaly','florescent','foriegn','forseeable','fourty','foward','freind','futher','jist','glamourous','goverment','gaurd','happend','harrass','harrassment','honourary','humourous','idiosyncracy','immediatly','incidently','independant','interupt','irresistable','knowlege','liase','liason','lollypop','millenium','millenia','Neandertal','neccessary','noticable','ocassion','occassion','occured','occuring','occurence','pavillion','persistant','pharoah','peice','politican','Portugese','posession','prefered','prefering','propoganda','publically','realy','recieve','refered','refering','religous','rember','remeber','resistence','sence','seperate','seige','succesful','supercede','suprise','tatoo','tendancy','therefor','threshhold','tommorow','tommorrow','tounge','truely','unforseen','unfortunatly','untill','wierd','whereever','wich'];
//test zone
client.on('message', message =>{
    if(!message.author.bot){
        let args = message.content.toLowerCase().split(" ");
        var cntr = 0;
        var length = message.content.length;
            for( let i = 0;i <= length;i++){
                for (let j = 0; j < correctSpelling.length; j++) {
                    if (args[i] == incorrectSpelling[j]){
                    message.channel.send("you misspelt "+ args[i] + " its actually spelt like this: " +correctSpelling[j]);
                }
                console.log(i +','+j)
            }
        }
    }
});

client.login(process.env['TOKEN']);
//https://www.lexico.com/grammar/common-misspellings