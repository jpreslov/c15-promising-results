/* 
let a = slowMath
  .add(6, 2)
  .then(a => {
    console.log(a);
    return slowMath.multiply(a, 2);
  })
  .then(b => {
    console.log(b);
    return slowMath.divide(b, 4);
  })
  .then(c => {
    console.log(c);
    return slowMath.subtract(c, 3);
  })
  .then(d => {
      console.log(d)
      return slowMath.add(d, 98)
  })
  .then(e => {
      console.log(e)
      return slowMath.remainder(e, 2)
  })
  .then(f => {
      console.log(f)
      return slowMath.multiply(f, 50)
  })
  .then(g => {
      console.log(g)
      return slowMath.remainder(g, 40)
  })
  .then(h => {
      console.log(h)
      return slowMath.add(h, 32)
  })
  .then(i => console.log(i))
  */

let doMath = async () => {
  try {
    let result;

    result = await slowMath.add('6, 2');
    console.log(result);
    result = await slowMath.multiply(result, 2);
    console.log(result);
    result = await slowMath.divide(result, 4);
    console.log(result);
    result = await slowMath.subtract(result, 3);
    console.log(result);
    result = await slowMath.add(result, 98);
    console.log(result);
    result = await slowMath.remainder(result, 2);
    console.log(result);
    result = await slowMath.multiply(result, 50);
    console.log(result);
    result = await slowMath.remainder(result, 40);
    console.log(result);
    result = await slowMath.add(result, 32);
    console.log(result);

  } catch (err) {
    throw err

    console.log()
  }
};

doMath();
