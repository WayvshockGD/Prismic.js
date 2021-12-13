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
                return (body) => {
                    return rest.handler.make(route, routes.join("/"), body)
                };
            };

            routes.push(route);
            return new Proxy(fun, obj);
        }
    }

    return new Proxy(fun, obj);
}