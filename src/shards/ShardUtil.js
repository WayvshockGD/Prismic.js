const WebSocket = require("ws");
const Shard = require("./Shard");

module.exports = class ShardUtil {

    /**
     * @param {Shard} shard
     */
    constructor(shard) {
        this.shard = shard;
    }
    get #ws() {
        return this.shard.ws;
    }

    /**
     * @param {WebSocket.RawData} data
     */
    parse(data) {
        let str = data.toString("utf-8");
        return (typeof (str) === "string") ? JSON.parse(str) : str;
    }
}