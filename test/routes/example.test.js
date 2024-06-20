"use strict";

const { test } = require("node:test");
const assert = require("node:assert");
const { build } = require("../helper");

test("usuarios is loaded", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: "/example",
  });
  assert.equal(res.payload, "this is an usuarios");
});

// inject callback style:
//
// test('usuarios is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/usuarios'
//   }, (err, res) => {
//     t.error(err)
//     assert.equal(res.payload, 'this is an usuarios')
//   })
// })