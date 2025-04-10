# when

Let's use Kotlin's 'when' keyword in Javascript(or Typescript).

## Installation

* To install and set-up the library, run: 
  ```
  npm i @playerdecuple/when
  ```
* Or, start with cloning this repository on your local machine.
  ```
  git clone https://github.com/playerdecuple/when.git
  ```

## Usage

```js
function cardinalDirection(angle) {
    return when(
        angle < 22.5,
            "N",
        angle < 67.5,
            "NE",
        angle < 112.5,
            "E",
        angle < 157.5,
            "SE",
        angle < 202.5,
            "S",
        angle < 247.5,
            "SW",
        angle < 292.5,
            "W",
        angle < 337.5,
            "NW",
        "N"
    );
}

console.log(`The cardinal direction for 186° is: ${cardinalDirection(186)}`);
// The cardinal direction for 186° is: S


function hasF(array) {
    return when(
        array.includes("F"),
            () => console.log("This array contains 'F'."),
        () => console.log("This array doesn't contain 'F'.")
    )();
}

hasF([ 1, 2, 3, "F", 5 ]);
// The array contains 'F'.


const or = when(
    true,
    false,
    false,
        "True",
    "False"
);

console.log(`I love Kotlin // ${or}`);
// I love Kotlin // True


const and = when(
    ({} && {}) !== false,
        "True",
    "False"
);

console.log(`I don't like the '&&' operator in JS // ${and}`);
// I don't like the '&&' operator in JS // True
```

### try-catch
```js
const isNotImplemented = $try( // or trycatch(
    () => { // try
        throw Error("TODO: This is not implemented.");
    },
    (e) => true // catch
);

console.log(`isNotImplemented: ${isNotImplemented}`);
// isNotImplemented: true
```
