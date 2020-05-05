const Discord = require("discord.js"),
msglogger = new Discord.Client(),
conf = require("./config.json"),
chalk = require("chalk"),
colors = require("colors"),
figlet = require("figlet"),
EventEmitter = require('events'),
emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY);

console.clear();console.log(`${colors.rainbow(figlet.textSync('Dany-LF'))}\n${chalk.blue("=============================================")}\nConfig:\n${chalk.red("Logs Guilds Messages")}: ${chalk.blue(conf.logguildsmsg)}\n${chalk.red("Logs DMs")}: ${chalk.blue(conf.logdmsmsg)}\n${chalk.blue("=============================================")}\nPlease wait 3 seconds.`);
setTimeout(login, 3000);function login(){msglogger.login("Your token")}

msglogger.on('ready', () => {
	//if(conf.logdmsmsg != true || conf.logdmsmsg != false) return;if(conf.logguildsmsg != "true" || conf.logguildsmsg != "false") return;
	console.log(`Logged in as ${msglogger.user.tag}\n${chalk.blue("=============================================")}\nFormat:\nDMs: ${chalk.red("[DM ")}${chalk.blue("Discord Tag")}${chalk.red("]")} ${chalk.red("[TIME ")}${chalk.blue("Time of the message")}${chalk.red("]")} : ${chalk.green("Content of the message")}\nGuild: ${chalk.red("[GUILD ")}${chalk.blue("Guild name")}${chalk.red("]")} ${chalk.red("[CHANNEL ")}${chalk.blue("Channel name")}${chalk.red("]")} ${chalk.red("[AUTHOR ")}${chalk.blue("Discord Tag")}${chalk.red("]")} ${chalk.red("[TIME ")}${chalk.blue("Time of the message")}${chalk.red("]")} : ${chalk.green("Content of the message")}\n${chalk.blue("=============================================")}`);
});
msglogger.on('message', message => {
	let n = new Date();let h = n.getUTCHours()+1;let m = n.getUTCMinutes();let s = n.getUTCSeconds();
	if (message.author.bot) return;if (message.channel.type == 'dm'){if(conf.logdmsmsg == true){console.log(`${chalk.red("[")}${chalk.yellow("DM ")}${chalk.blue(message.author.tag)}${chalk.red("]")}${chalk.red("[TIME ")}${chalk.blue(`${h}:${m}:${s}`)}${chalk.red("]")} : ${chalk.green(message.content)}`);};}else if(message.channel.type != 'dm'){if(conf.logguildsmsg == true){console.log(`${chalk.red("[")}${chalk.yellow("GUILD ")}${chalk.blue(message.guild.name)}${chalk.red("]")} ${chalk.red("[CHANNEL ")}${chalk.blue(message.channel.name)}${chalk.red("]")} ${chalk.red("[AUTHOR ")}${chalk.blue(message.author.tag)}${chalk.red("]")} ${chalk.red("[TIME ")}${chalk.blue(`${h}:${m}:${s}`)}${chalk.red("]")} : ${chalk.green(message.content)}`);};};
});
