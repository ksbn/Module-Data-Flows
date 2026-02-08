# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    f1();
8    console.log(x);
```

Explain why line 5 and line 8 output different numbers.

The output:
2
1

Explanation:

Inside f1, a local variable x is declared with let x = 2.
This local x shadows the global x only inside the function.
So console.log(x) inside prints 2, while outside prints the global x = 1.

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Output:
10
undefined
ReferenceError: y is not defined

Explanation:

console.log(x) prints the global x, so 10.
f1() does not return a value, so console.log(f1()) → undefined.
y is declared inside the function with let, so it is local. Accessing it outside causes ReferenceError.

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Output:
9
{ x: 10 }

Explanation:

f1(x) passes a primitive (number). Changing val does not affect the global x.
f2(y) passes an object. Modifying val.x mutates the object, so y.x becomes 10.