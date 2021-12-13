const PrismicClient = require("../core/PrismicClient");
const Collection = require("../utils/Collection");
const Shard = require("./Shard");

module.exports = class ShardManager extends Collection {

    /**
     * @param {PrismicClient} client 
     */
    constructor(client) {
        super();
        
        this.client = client;
    }

    /**
     * @param {{ id: number, data: { url: string, shards: number }}} param
     */
    spawn({ id, data }) {
        let shard = this.get(id);

        if (typeof (shard) === "undefined") {
            this.set(id, new Shard(data, this.client));
        };
    }
}