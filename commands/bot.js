const util = require("../utilities");
const keychain = require("../keychain");

module.exports = (bot, channel, message, args) => {
    let command = args.splice(0, 1)[0];

    if (command === "stop") {
        setTimeout(() => process.exit(0), 650);
        return util.error(channel, "Restarting!");
    } else if (command === "setGame") {
        return bot.user.setGame(args.join(" "));
    } else if (command === "stream") {

        let data;

        try {
            data = (args.join(" "));
        } catch(err) {
            console.error("Couldn't parse");
            console.error(err);
            return util.error(channel, err);
        }
    
        return bot.user.setActivity(data, { type: 'STREAMING', url: keychain.streamlink })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
    } else {
        return null;

    }
};
