const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "Malkin",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/TCuk9OT.jpeg",
            "https://i.imgur.com/koOV7Ip.jpeg",
            "https://i.imgur.com/ylBJJ7a.jpeg",
            "https://i.imgur.com/Q0ykgBL.jpeg",
            "https://i.imgur.com/dHehN4Y.jpeg",
            "https://i.imgur.com/fe6kxIZ.jpeg"
        ];

        const message = "●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== ☟ ==========  ☟  ●============================●     𝐎𝐰𝐧𝐞𝐫 ➻────╔╬⓼★⓼╃───────➣🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("nitya")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Malkin-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("🙈", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
