const PrismicClient = require("../core/PrismicClient");
const Routes = require("./Routes");
const Pkg = require("../../package.json");

module.exports = class RestClient {
    /**
     * @param {PrismicClient} client
     */
    constructor(client) {
        this.agent = `Prismic (${})`;
    }

    get api() {
        return Routes(this);
    }
}