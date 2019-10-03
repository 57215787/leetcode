export function twoNumbersSum(numbers: number[], taget: number) {
    let array:number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        let tmp:number = taget - numbers[i];
        if (array[tmp] !== undefined) {
            return [array[tmp], i]
        }
        array[numbers[i]] = i;
    }
}