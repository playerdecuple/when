const { when, $try } = require("../dist/index.js");


const zeroOrOne = when(
    Math.random() < 0.5,
        0,
    1
);

console.log(`Zero or one: ${zeroOrOne}`);


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


function hasF(array) {
    return when(
        array.includes("F"),
            () => console.log("This array contains 'F'."),
        () => console.log("This array doesn't contain 'F'.")
    )();
}

hasF([ 1, 2, 3, "F", 5 ]);


const or = when(
    true,
    false,
    false,
        "True",
    "False"
);

console.log(`I love Kotlin // ${or}`);


const and = when(
    ({} && {}) !== false,
        "True",
    "False"
);

console.log(`I don't like the '&&' operator in JS // ${and}`);


const maybeUndefined = when(
    1 + 1 === 3,
        Infinity,
    undefined
);

console.log(`1 + 1 = ${maybeUndefined}`);


const isNotImplemented = $try(
    () => { // try
        throw Error("TODO: This is not implemented.");
    },
    (e) => true // catch
);

console.log(`isNotImplemented: ${isNotImplemented}`);