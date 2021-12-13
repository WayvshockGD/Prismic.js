const EventEmitter = require("node:events");
const RestClient = require("../rest/RestClient");
const ShardManager = require("../shards/ShardManager");
const ClientConnecter = require("./ClientConnecter");
const Constants = require("../utils/Constants");

module.exports = class PrismicClient extends EventEmitter {
    /**
     * @param {PrismicClientOptions} options
     */
    constructor(options) {
        super();

        this.options = options;
        this.checkIntents();
        
        this.token = undefined;

        this.rest = new RestClient(this);

        this.shards = new ShardManager(this);
    }

    checkIntents() {
        if (Array.isArray(this.options.intents) && typeof (this.options.intents) === "string") {
            this.options.intents = Constants.combineIntents([...this.options.intents]);
        }
    }

    get proxy() {
        return this.rest.proxy;
    }

    get connector() {
        return new ClientConnecter(this);
    }
}

/**
 * @typedef {object} PrismicClientOptions
 * @property {"auto" | number} shards
 * @property {(keyof typeof Constants.intents)[] | number | number[]} intents
 */