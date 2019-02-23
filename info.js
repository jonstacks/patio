
var assert = require('assert'),
    helper = require("./test/helpers/helper"),
    MockDatabase = helper.MockDatabase,
    MockDataset = helper.MockDataset,
    patio = require("./lib"),
    Dataset = patio.Dataset,
    sql = patio.SQL,
    Identifier = sql.Identifier;


var i = sql.Identifier("dada ASC");

// var ds = new MockDatabase().from("t");

// var dataset = new Dataset().from("test");

// console.log(dataset.order(sql['dada ASC']));

// console.log("TEST 1 ----------------");
// assert.equal(dataset.order(sql['dada ASC']).sql, 'SELECT * FROM test ORDER BY dada ASC');

// console.log("TEST 2 ----------------");
// assert.equal(ds.filter(sql.a.sqlSubscript(sql.b, 3)).qualifyToFirstSource().sql, 'SELECT t.* FROM t WHERE t.a[t.b, 3]');

// var d = new MockDataset().from("items");
// d.quoteIdentifiers = true;

// console.log("TEST 3 ------------------");
// assert.equal(d.join("categories", sql.active).sql, 'SELECT * FROM "items" INNER JOIN "categories" ON "active"');

// console.log("Done!");
// let f = function(name) {
//     return "hello" +  name;
// }

// let p = new Proxy(f, {
//     construct(target, args) {

//     }
// });

// console.log(typeof p);
// console.log(p("world"));