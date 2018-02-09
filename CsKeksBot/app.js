const Discord = require('discord.js');
const Assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const client = new Discord.Client();
const config = require('./config.json');
const UserController = require('./Controllers/UserController.js');



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    MongoClient.connect(config.mongo_uri, function (err, client) {
        Assert.equal(null, err);
        console.log("Connected successfully to database server");

        const db = client.db(config.test_db_name);
        //TODO: contact local black magic guru to fix this
        const usrController = new UserController(db);
        client.close();
    });
});

client.on('message', message => {
    //Checks if author is bot or doesnt start with prefix
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix)) {
        if (message.author.tag === config.owner_tag) {
            console.log("owner message" + message.content);
            continue;
            //TODO: Add switch for commands here after checking user id
        }


    }
});


client.login(config.discord_token);