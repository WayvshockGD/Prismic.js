const PrismicClient = require("./PrismicClient");

module.exports = class ClientConnecter {
    /**
     * @param {PrismicClient} client 
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * @param {string} token
     */
    async connect(token) {
        let options = this.client.options;

        this.client.token = token;

        let data = await this.client.proxy.gateway.bot.get();

        if ((options.shards) === "auto" && typeof (options.shards) === "string") {
            if (!data.shards) {
                throw new Error("Bot could not autoshard due to lack of data");
            };
            this.client.options.shards = data.shards;
        }

        for (let id = 0; id < data.shards; id++) {
            this.client.shards.spawn({ id, data });
        }
    }
}