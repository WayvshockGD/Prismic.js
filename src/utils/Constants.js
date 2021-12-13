exports.version = "1.0.0";

exports.git = "https://github.com/WayvshockGD/Prismic.js";

exports.GATEWAY_VERSION = "9"

let discord = {
    api: (version) => `https://discord.com/api/v${version}`,
    intents: {
        guilds: 1 << 0,
        guild_members: 1 << 1,
        guild_bans: 1 << 2,
        guild_emojis_and_stickers: 1 << 3,
        guild_integrations: 1 << 4,
        guild_webhooks: 1 << 5,
        guild_invites: 1 << 6,
        guild_voice_states: 1 << 7,
        guild_presences: 1 << 8,
        guild_messages: 1 << 9,
        guild_message_reactions: 1 << 10,
        guild_message_typing: 1 << 11,
        direct_messages: 1 << 12,
        direct_message_reactions: 1 << 13,
        direct_message_typing: 1 << 14,
        guild_scheduled_events: 1 << 16
    }
}

let gateway = {
    HELLO: 10
};

exports.gateway = gateway;

exports.discord = discord;

exports.intents_privileged = combineIntents([
    "guild_presences",
    "guild_messages"
]);

exports.intents = discord.intents;

exports.intents_all = combineIntents("all");

exports.combineIntents = combineIntents;

/**
 * @param {(keyof typeof discord.intents)[] | "all"} intents
 * @return {number}
 */
function combineIntents(intents) {
    let bits = 0;

    if (typeof (intents) === "string" && intents === "all") {
        for (let name of Object.keys(discord.intents)) {
            bits |= discord.intents[name];
        }
    } else if (Array.isArray(intents)) {
        for (let name of intents) {
            bits |= discord.intents[name];
        }
    }

    return bits;
}