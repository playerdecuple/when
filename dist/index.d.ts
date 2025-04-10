export declare function when<T>(...args: (boolean | T)[]): T;
export declare function $try<T>(_try: () => T, _catch: (e: any) => T): T;
export declare const trycatch: typeof $try;
