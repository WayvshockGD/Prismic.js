const { WebSocket } = require("ws");
const PrismicClient = require("../core/PrismicClient");
const ShardUtil = require("./ShardUtil");
let Constants = require("../utils/Constants");

module.exports = class Shard {
    /**
     * @param {{ shards: number, url: string }} data
     * @param {PrismicClient} client
     */
    constructor(data, client) {
        this.data = data;
        
        this.client = client;

        this.hasHeartBeat = false;

        this.ws = new WebSocket(data.url);

        this.util = new ShardUtil(this);

        this.init();
    }

    init() {
        this.ws.on("message", (data) => this.handleEvents(this.util.parse(data)));
    }

    handleEvents(data) {

        switch (data.s) {
            case Constants.gateway.HELLO:
                
                break;
        
            default:
                break;
        }
    }

    heartBeat(time, { resume = false }) {
        setInterval(() => {});
    }
}