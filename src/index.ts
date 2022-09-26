// imports
import input from '../lib/input';

// funcs
/**
 *
 * @param n Number to be applied
 * @param base What base to apply to
 * @returns Total
 */
const perfectDigitalInvariant = (n:number, base: number) => {
  let total = 0;
  while (n > 0) {
    total += (n % base) ** 2;
    n = Math.floor(n / base);
  }
  return total;
};

/**
 *
 * NOTE: Only accepts integers greater than one.
 * @param n Number that is to be tested if happy or sad.
 * @param base What base to test for. E.g. base 10
 */
const isHappy = (n:number, base = 10):boolean => {
  const trialed:Array<number> = [];
  while (n > 1 && !trialed.includes(n)) {
    trialed.push(n);
    n = perfectDigitalInvariant(n, base);
  }

  return n === 1;
};

// main
let clearedOnce = false;
const main = async () => {
  const number = Number(await input(`Enter a${clearedOnce === true ? 'nother' : ''} number to determine if it is a happy number or not: `));

  const happy = isHappy(number);

  console.clear();
  console.log(`${number} ${happy === true ? 'is' : 'is not'} a happy number.`);

  clearedOnce = true;

  // call again to ask for another number
  main();
};

main();
