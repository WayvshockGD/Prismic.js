const PrismicClient = require("../core/PrismicClient");
const Routes = require("./Routes");
const RequestHandler = require("./RequestHandler");
const { version, git } = require("../utils/Constants");

module.exports = class RestClient {
    /**
     * @param {PrismicClient} client
     */
    constructor(client) {
        this.agent = `Prismic (${git}, ${version})`;

        this.handler = new RequestHandler(this, client);
    }

    get proxy() {
        return Routes(this);
    }
}