const util = require("../utilities");

module.exports = (bot, channel, message, args) => {
    let embed;

    try {
        data = (args.join(" "));
    } catch(err) {
        console.error("Couldn't parse");
        console.error(err);
        return util.error(channel, err);
    }



    return channel.send({ embed: { color: 4359924, description: data}})
        .then(() => message.delete())
        .catch(err => util.error(channel, err));
};
 