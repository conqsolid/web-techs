
interface AccountInfo {
    number: number;
    bas: string;
}

interface Point {
    x: number; y: number;
}


interface LabeledObject {
    label: string;
}


interface SquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any;
}

interface ReadonlyPoint {
    readonly x: number;
    readonly y: number;
}

interface SearchFunction {
    (source: string, subString: string): string
}

interface StringArray {
    [index: number]: string;
}

export { AccountInfo, Point, LabeledObject, SquareConfig, ReadonlyPoint, SearchFunction, StringArray }