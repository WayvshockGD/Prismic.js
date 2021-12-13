const got = require("got");
const PrismicClient = require("../core/PrismicClient");
const { discord, GATEWAY_VERSION } = require("../utils/Constants");
const RestClient = require("./RestClient");

module.exports = class RequestHandler {
    /**
     * @param {RestClient} rest
     * @param {PrismicClient} client
     */
    constructor(rest, client) {
        this.rest = rest;
        this.client = client;
    }

    async make(method, endpoint, body) {

        let options = { method, headers: {
            "User-Agent": this.rest.agent
        }};

        if (body) {
            options["body"] = body;
        };

        if (typeof (body) !== "undefined") {
            if (body.hasOwnProperty("auth") && body.auth === true) {
                options.headers["Authorization"] = this.client.token;
            };
        } else {
            if (typeof (this.client.token) === "string") {
                options.headers["Authorization"] = `Bot ${this.client.token.replace("Bot", "")}`;
            }
        }

        let url = discord.api(GATEWAY_VERSION) + endpoint;

        let res = await got.default(url, { throwHttpErrors: false, ...options });

        return (typeof (res.body) !== "string") ? res.body : JSON.parse(res.body);
    }
}