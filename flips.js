import { coinFlips, countFlips, coinFlip } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var args = require('minimist')(process.argv.slice(2))
 args["number"]
 args["call"]
 const number=args.number || 1
 const call = args.call
console.log(coinFlips(number))
console.log(countFlips(coinFlips(number)))