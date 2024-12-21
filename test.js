var assert = require('assert');
var eurorack = require('./index');

assert.strictEqual(eurorack.convertHpToMm(10), 50.8);
assert.strictEqual(eurorack.convertHpToMm(68), 345.44);
assert.strictEqual(eurorack.convertMmToHp(400), 78.74);

console.log("Tests completed!");