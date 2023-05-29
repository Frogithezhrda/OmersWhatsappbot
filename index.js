const qrcode = require('qrcode-terminal');
var mime =  require('mime-types');
const fs = require('fs');
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

    
    

var syntax = "!";

const { Client, LocalAuth,MessageMedia} = require('whatsapp-web.js');
const client = new Client({
    authstartegy: new LocalAuth(),
    puppeteer: {
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', async () => {
    console.log('Client is ready!');

    
});
client.on('message', async (msg) => {
    if(msg.body === '@everyone') {
        const chat = await msg.getChat();
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
});
 
client.on('message', async (msg) => {
    client.getChats().then(async (chats) => {
        const foodGroups = chats.find((chat) => chat.name === "אדם תעזור לי לבדוק את הבוט");
        const specfiifchat = await msg.getChat();
        const contact = await msg.getContact();
        if(msg.body === syntax + "רביב שמן" && msg.getChat() === foodGroups.name) {
        await client.sendMessage(foodGroups.id._serialized,`רביב גרננס אוהב גם אותך @${contact.id.user}`, {
            mentions: [contact]
                });
            }
        });
    });
client.on('message', message => {
    var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var yourdate = new Date();

	if((day==2 && message.body === syntax + "מה המערכת שעות")) {
		message.reply('המערכת של היום היא:\nמתמטיקה\nלשון\nמתמטיקה\nאנגלית\nתנ"ך\nתנ"ך\nלשון');
	} 
});
client.on('message', message => {
    var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var yourdate = new Date();

	if((day==1 && message.body === syntax + "מה המערכת שעות")) {
		message.reply('המערכת של היום היא:\nחנ"ג\nהיסטוריה\nמדעי המחשב\nמדעי המחשב\nמתמטיקה\nגיאוגרפיה\nאנגלית\nערבית');
	}
});
client.on('message', message => {
    var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var yourdate = new Date();

	if((day==0 && message.body === syntax + "מה המערכת שעות")) {
		message.reply('המערכת של היום היא:\nביולוגה\nביולוגיה\nמתמטיקה\nתרבות ישראל\nאנגלית\nגיאוגרפיה\nחינוך\nלשון');
	}
});
client.on('message', message => {
    var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var yourdate = new Date();

	if((day==3 && message.body === syntax + "מה המערכת שעות")) {
		message.reply('המערכת של היום היא:\nפיזיקה\nפיזיקה\nערבית\nביולוגיה\nחינוך\nחנ"ג\nמתמטיקה\nמתמטיקה');
	}
});
client.on('message', message => {
    var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var yourdate = new Date();

	if((day==4 && message.body === syntax + "מה המערכת שעות")) {
		message.reply('המערכת של היום היא:\nמתמטיקה\nמתמטיקה\nהיסטוריה\nתרבות ישראל\nאנגלית\nאנגלית\nערבית');
	}
});

client.on('message', message => {
    var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var yourdate = new Date();
	if(((day==5 || day ==6) && message.body === syntax + "מה המערכת שעות")) {
		message.reply("זדיינו היום שישי");
	}
});
client.on('message', async message => {
	if(( message.body === syntax +"המלך חרננס")) {

    const rndInt = Math.floor(Math.random() * 16) + 1
    const media = await MessageMedia.fromFilePath("C:/Users/food/Downloads/Bot/" + rndInt + ".jpeg");
        setTimeout(async () => {
    client.sendMessage(message.from,message.reply(await media));
}, 10000);
}
});
client.on('message', async message => {
	if(( message.body === syntax +"פוד" || message.body === syntax +"אוכל")) {

    const rndInt = Math.floor(Math.random() * 43) + 1
    const media = await MessageMedia.fromFilePath("C:/Users/food/Downloads/Bot/Food/" + rndInt + ".jpeg");

    client.sendMessage(message.from,message.reply(await media));
}
});

client.on('message', async message => {
	if(( message.body === syntax +"Cringe")) {

    const rndInt = Math.floor(Math.random() * 44) + 1

    const media = await MessageMedia.fromFilePath("C:/Users/food/Downloads/Bot/Food/Cringe.mp4");

    client.sendMessage(message.from ,message.reply(await media));
}
});
client.on('message', async message => {

if(message.body === syntax +'סטיקר'){
    if(message.hasMedia ){

        message.downloadMedia().then(media => {

            if (media) {

                const mediaPath = './downloaded-media/';

                if (!fs.existsSync(mediaPath)) {
                    fs.mkdirSync(mediaPath);
                }


                const extension = mime.extension(media.mimetype);

                const filename = new Date().getTime();

                const fullFilename = mediaPath + filename + '.' + extension;

                // Save to file
                try {
                    fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' });
                    console.log('File downloaded successfully!', fullFilename);
                    console.log(fullFilename);
                    
                    MessageMedia.fromFilePath(filePath = fullFilename)
                    client.sendMessage(message.from, new MessageMedia(media.mimetype, media.data, filename), { sendMediaAsSticker: true,stickerAuthor:"על ידי עומר הבוט",stickerName:"הסטיקר של עומר הבוט"} )
                    fs.unlinkSync(fullFilename)
                    console.log(`File Deleted successfully!`,);
                } catch (err) {
                    console.log('Failed to save the file:', err);
                    console.log(`File Deleted successfully!`,);
                }
            }
        });
    }else if(message.hasQuotedMsg) {
        const quotedMsg = await message.getQuotedMessage();
        quotedMsg.downloadMedia().then(media => {

        if (media) {

            const mediaPath = './downloaded-media/';

            if (!fs.existsSync(mediaPath)) {
                fs.mkdirSync(mediaPath);
            }


            const extension = mime.extension(media.mimetype);

            const filename = new Date().getTime();

            const fullFilename = mediaPath + filename + '.' + extension;

            // Save to file
            try {
                fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' });
                console.log('File downloaded successfully!', fullFilename);
                console.log(fullFilename);
                MessageMedia.fromFilePath(filePath = fullFilename)
                client.sendMessage(message.from, new MessageMedia(media.mimetype, media.data, filename), { sendMediaAsSticker: true,stickerAuthor:"על ידי עומר הבוט",stickerName:"הסטיקר של עומר הבוט"} )
                fs.unlinkSync(fullFilename)
                console.log(`File Deleted successfully!`,);
            } catch (err) {
                console.log('Failed to save the file:', err);
                console.log(`File Deleted successfully!`,);
            }
        }
    });

    } else 
    {
        message.reply("תכתוב !סטיקר על התמונה")
    }
}
});
//GPT


////////////////////////////////
/**
    client.on('message', async (msg) => {
        let AllQuestion = msg.body;
        let sQuestion = AllQuestion.substr(8);
        const chat = await msg.getChat();
        if(msg.body === syntax + "Chatgpt" + sQuestion) {
            const prompt = sQuestion;
    
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 1,
            
        });
        console.log(response.data.choices[0].text);
    
         client.sendMessage(msg.from,response.data.choices[0].text)
    }});
*/
client.initialize(); 