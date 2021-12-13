const RestClient = require("./RestClient");
let fun = () => {};

/**
 * @param {RestClient} rest
 */
module.exports = function(rest) {
    let routes = [""];
    let obj = {
        get(endpoints, route) {
            if (["post", "get", "patch", "delete"].includes(route)) {
                return (options) => {};
            };

            routes.push(route);
            return new Proxy(fun, obj);
        }
    }

    return new Proxy(fun, obj);
}