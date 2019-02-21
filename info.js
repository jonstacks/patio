var assert = require('assert'),
    helper = require("./test/helpers/helper"),
    MockDatabase = helper.MockDatabase,
    patio = require("./lib"),
    Dataset = patio.Dataset,
    sql = patio.SQL;

var ds = new MockDatabase().from("t");

var dataset = new Dataset().from("test");

assert.equal(dataset.order(sql['dada ASC']).sql, 'SELECT * FROM test ORDER BY dada ASC');

// let f = function(name) {
//     return "hello" +  name;
// }

// let p = new Proxy(f, {
//     construct(target, args) {

//     }
// });

// console.log(typeof p);
// console.log(p("world"));