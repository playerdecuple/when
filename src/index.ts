export function when<T>(...args: (boolean | T)[]): T {
    let prev: T | Boolean | null = null;

    for (const arg of args) {
        if (typeof arg === "boolean") {
            if (prev === true)
                continue;
        } else {
            if (prev === true || prev !== false)
                return arg;
        }

        prev = arg;
    }

    throw new Error("Invalid when usage.");
}


export function $try<T>(_try: () => T, _catch: (e: any) => T) {
    try {
        return _try.bind(null)();
    } catch (e: any) {
        return _catch.bind(null, e)();
    }
}


export const trycatch = $try;