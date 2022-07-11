/*You are to implement a functional library.
Requirements
Code style
No bundling and modules
The library should provide the following functionality:

bool isArray(obj)
bool isBoolean(obj)
bool isDate(obj)
bool isNumber(obj)
bool isString(obj)
bool isFunction(obj)
bool isUndefined(obj)
bool isNull(obj)*/

function boolIsArr (obj) {
    if (Array.isArray(obj)) {
        return true;
    } else {
        return false;
    }
}

const obj1 = [1, 2, 3];
console.log(boolIsArr(obj1));

function boolIsBool (obj) {
    if (typeof obj == "boolean") {
        return true;
    } else {
        return false;
    }
}

const obj2 = false;
console.log(boolIsBool(obj2));

function boolIsDate (obj) {
    if (typeof obj == "object") {
        return true;
    } else {
        return false;
    }
}

const obj3 = new Date ();
console.log(boolIsDate(obj3));

function boolIsNum (obj) {
    if (typeof obj == "number") {
        return true;
    } else {
        return false;
    }
}

const obj4 = 1;
console.log(boolIsNum(obj4));

function boolIsStr (obj) {
    if (typeof obj == "string") {
        return true;
    } else {
        return false;
    }
}

const obj5 = "1";
console.log(boolIsStr(obj5));

function boolIsFunc (obj) {
    if (typeof obj == "function") {
        return true;
    } else {
        return false;
    }
}

const obj6 = function() {};
console.log(boolIsFunc(obj6));

function boolIsUnd (obj) {
    if (typeof obj == "undefined") {
        return true;
    } else {
        return false;
    }
}

const obj7 = undefined;
console.log(boolIsUnd(obj7));

function boolIsNull (obj) {
    if (typeof obj == "object") {
        return true;
    } else {
        return false;
    }
}

const obj8 = null;
console.log(boolIsNull(obj8));

/*Working with arrays:

obj first(arr)
obj last(arr)
newArr skip(arr, number)
newArr take(arr, number)*/

const objArr = {};
function first(arr) {
    for (let i = 0; i < arr.length; i++) {
        objArr.first = arr[0];
        objArr.last = arr[arr.length - 1];
    }
    return objArr;
}

console.log(first([0, 1, 2, 3, 4, 5]));

function take (arr, number) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < number) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(take([1, 2, 3, 4], 2));

function skip (arr, number) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= number) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(skip([1, 2, 3, 4], 2));

/*You are to implement a functional library for working with arrays.
Requirements
Code style
No bundling and modules
The library should provide the following functionality:

1. take(array, n)

2. skip(array, n)

3. map(array, callback)

4. reduce(array, callback, initialValue)

5. filter(array, callback)

6. foreach(array, callback)

Here is an example of calling:

nameOfYourLibrary.take([1, 2, 3, 4], 2) will return [1, 2]

The rest of the functions work the same way.

nameOfYourLibrary.map([1, 2, 3], a => a * 2 ) will return [2, 4, 6]*/

let arrayLibrary = {
    take (array, n) {
        const arr = [];
        for (let i = 0; i < array.length; i++) {
            if (i < n) {
                arr.push(array[i]);
            }
        }
        return arr;
    },

    skip (array, n) {
        const arr = [];
        for (let i = 0; i < array.length; i++) {
            if (i >= n) {
                arr.push(array[i]);
            }
        }
        return arr;
    },

    map (array, callback) {
        const arr = [];
        for (let i = 0; i < array.length; i++) {
            arr.push(callback(array[i]));
        }
        return arr;
    },

    reduce(array, callback, initialValue) {
        let sum = initialValue; 
        for (let i = 0; i < array.length; i++) {
            callback(sum = sum + array[i]);
        }
        return sum;
    },

    filter(array, callback) {
        const arr = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i]) == true) {
                arr.push(array[i]);
            }
        }
        return arr;
    },

    foreach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            array[i] = callback(array[i]);
        }
        return array;
    }
}

console.log(arrayLibrary.take([1, 2, 3, 4], 1));
console.log(arrayLibrary.skip([1, 2, 3, 4], 1));
console.log(arrayLibrary.map([1, 2, 3], a => a * 2));
console.log(arrayLibrary.reduce([1, 2, 3], (a, b) => a + b, 0));
console.log(arrayLibrary.filter([1, 2, 3], a => a % 2 == 0));
console.log(arrayLibrary.foreach([1, 2, 3], a => a * 10));

/*You are to create your own logger.

Create a simple logger function that logs a message in the console (message is a parameter).
Example of execution: log("Hello World!");
Example of output: Hello World!*/

const baseLogger = {
    logger(message) {
        console.log(message);
    }
}

/*
Create another logger function that uses the previous one, and logs table-view row in console (column values are parameters).
Example of execution: log("Hello", "World", "!");
Example of output: Hello | World | !
*/

const tableLogger = {
    logger(...args) {
        console.log(args.join(" | "));
    },
}

/*Create another logger function that uses the previous one, and logs table-view row in the console (the first column is the current date and time by default, another column values are parameters).
Example of execution: log("Hello", "World", "!");
Example of output: 12/16/2016, 2:35:02 PM | Hello | World | !*/

const tableTimeLogger = {
    getTimeLog (...args) {
        let date = new Date();
    
        console.log(date.toLocaleString("en-US") + " | "+args.join(" | "));
    },
}

/*Make 3 previous methods as method "log" of objects BaseLogger, TableLogger, and TableTimeLogger. Implement inheritance of objects using all known JS Inheritance patterns.*/

baseLogger.logger("Hello wold!");
tableLogger.logger("Hello", "World", "!");
tableTimeLogger.getTimeLog("Hello", "World", "!");

/*Problem 1: Partial Application
Implement function F that allows doing partial function application in a form of: G(x, y, z ... ) = NF(x, G(x, y, z ... )) → H(y, z ... ) = N

F should accept any number of parameters to apply. G may accept any number of parameters. Is there any JavaScript built-in alternative?*/

function funcX(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}


function funcF(fn, ...args) {
    return function (...newArggs) {
        return fn(...args, ...newArggs);
    };
}

const partial = funcF(funcX, 1, 2, 4, 5);
console.log(partial(3, 5));

/*Problem 2: Currying
Implement function curry that allows doing currying like: f(x, y, z) = Ncurry(f) = x → (y → (z → N))

Function f may accept any number of explicit parameters. Implicit parameters are not subject to curry. How is it differ from Partial Application?*/

function f (a) {
    let curSum = a;

    function n (b) {
        curSum += b;
        return n;
    }

    n.toString = function() {
        return curSum;
    };

    return n;
}

alert(f(1)(2)); 
alert( f(5)(-1)(2) ); 
alert( f(6)(-1)(-2)(-3) ); 
alert( f(0)(1)(2)(3)(4)(5) ); 

/*Problem 3: Linear fold
Implement a linear fold function that works on arrays: F(array, callback[, initialValue])array is the array fold was called upon. callback is a function to execute on each value in the array, taking four arguments:

previousValue - the value previously returned in the last invocation of the callback, or initialValue, if supplied.
currentValue - the current element being processed in the array.
index - the index of the current element being processed in the array.
initialValue - object to use as the first argument to the first call of the callback.
Does ES5 has a built-in alternative?*/

Array.prototype.linearFold = function (callback) {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
        callback(sum = sum + this[i]);
    }

    let average = sum/this.length;

    return average;
}

let array1 = [0, 1, 2, 3, 4, 5];
console.log(array1.linearFold((a, sum) => a + sum));

/*Problem 4: Map
Implement a function that creates a new array with the results of calling a provided function on every element in this array.

Does ES5 has a built-in alternative?

In order to solve this problem you have to be familiar with next concepts:

Functional Map
High-order and First-class functions*/

Array.prototype.mapper = function (callback) {
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }

    return arr;
}

let a = [1, 2, 3, 4];
console.log(a.mapper(a => a*2));

/*Problem 5: Filter
Implement a function that filters array based on callback result.

Does ES5 has a built-in alternative?

In order to solve this problem you have to be familiar with next concepts:

High-order and First-class functions*/

Array.prototype.myFilter = function (callback) {
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) == true) {
            arr.push(this[i]);
        }
    }

    return arr;
}

let b = [1, 2, 3, 4];
console.log(b.myFilter(a => a % 2 == 0));

/*Problem 6: Average of even numbers
Given an array of numbers, find the average of even ones using functions implemented for previous problems.

Example: [1, 23, 2, 6, 12, 0] -> (2 + 6 + 12 + 0) / 4 = 5

In order to solve this problem, you have to solve 1-6 problems.*/

let c = [1, 23, 2, 6, 12, 0];
console.log(c);
console.log(c.filter(a => a % 2 == 0));
console.log(c.filter(a => a % 2 == 0).linearFold((a, sum) => a + sum));

/*Problem 8: Memoization
Implement a function that for any given function F produces function G that caches its previous calling results.

Function F accepts a single explicit parameter.
Implicit parameters should not be taken into account.
Watch out for NaN, undefined and circular references.
In order to solve this problem you have to be familiar with the next concepts:

Memoization
High-order and First-class functions*/

function called (x) {
    console.log("Число " + x + " впервые");
}

function memoization (func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            console.log("Просто " + x);
            return cache.get(x);
        } else {
            let result = func(x);
            cache.set(x, result);
            return result;
        }
    }
}

const memFunc = memoization(called);

memFunc(1);
memFunc(2);
memFunc(1);

/*Problem 9: Inheritance
Make hierarchy of geometric figures: base Shape class inherited Rectangle and Square classes.

The rectangle should have "width" and "height" properties. Square should have "sideLength" property. 
Also, each shape has "name" property and methods to calculate perimeter and area. Make ShapesStore which contains shapes. It 
should have a method which returns the total perimeter of all rectangles and method which return total area of all 
squares which contained in it.*/

class shapeClass {
    constructor(name) {
        this.name = name;
    }
    
}

class rectangleClass extends shapeClass {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    rectangleName () {
        return this.name;
    }

    rectangnglePerimetr () {
        let p = 0;
        p = (this.width + this.height) * 2;
        return p;
    }

    rectangleArea () {
        let a = this.width * this.height;
        return a;
    }
}

class squareClass extends shapeClass {
    constructor (name, sideLength) {
        super(name);
        this.sideLength = sideLength;
    }

    squareName () {
        return this.name;
    }

    squarePerimetr () {
        let p = this.sideLength * 4;
        return p;
    }

    squareArea () {
        let s = this.sideLength * this.sideLength;
        return s;
    }
}

class shapeStore {
    constructor (name, perimetr, area) {
        this.name = name;
        this.perimetr = perimetr;
        this.area = area;
    }


}

let rec1 = new rectangleClass("rec1", 2, 3);
console.log("Периметр " + rec1.rectangleName() + " " + rec1.rectangnglePerimetr());
console.log("Площадь " + rec1.rectangleName() + " " + rec1.rectangleArea());

let rec2 = new rectangleClass("rec2", 4, 5);
console.log("Периметр " + rec2.rectangleName() + " " + rec2.rectangnglePerimetr());
console.log("Площадь " + rec2.rectangleName() + " " + rec2.rectangleArea());

let sq1 = new squareClass ("sq1", 2);
console.log(sq1.name);
console.log(sq1.squarePerimetr());
console.log(sq1.squareArea());

/*Problem 10: Function with any number of parameters
Write a function that will calculate the multiplication of all parameters that were passed into the function.*/

function multAll (...parameters) {
    let mult = parameters[0];
    for (let i = 1; i < parameters.length; i++) {
        mult = mult * parameters[i];
    }
    return mult;
}

console.log("Произведение чиселд равно " + multAll(1, 2, 3, 6));