const EventEmitter = require("node:events");
const RestClient = require("../rest/RestClient");

module.exports = class PrismicClient extends EventEmitter {
    constructor() {
        this.rest = new RestClient();
    }
}