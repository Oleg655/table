function getDigit(num: number, index: number) {
    return Math.floor(Math.abs(num) / 10 ** index) % 10;
}

function digitCount(num: number) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]) {
    let maxDigits = 0;
    for (let index = 0; index < nums.length; index += 1) {
        maxDigits = Math.max(maxDigits, digitCount(nums[index]));
    }
    return maxDigits;
}

export function radixSort(nums: number[]) {
    const maxDigitCount = mostDigits(nums);
    const newNums: number[] = [];
    for (let k = 0; k < maxDigitCount; k += 1) {
        const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
        for (let index = 0; index < nums.length; index += 1) {
            const digit = getDigit(nums[index], k);
            digitBuckets[digit].push(nums[index]);
        }
        nums = newNums.concat(...digitBuckets);
    }
    return nums;
}
