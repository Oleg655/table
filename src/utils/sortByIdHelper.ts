import { UserI } from 'interfaces';

function getDigit(user: UserI, index: number) {
    return Math.floor(Math.abs(user.id) / 10 ** index) % 10;
}

function digitIdCount(user: UserI) {
    if (user.id === 0) return 1;
    return Math.floor(Math.log10(Math.abs(user.id))) + 1;
}

function mostIdDigits(users: UserI[]) {
    let maxDigits = 0;
    for (let index = 0; index < users.length; index += 1) {
        maxDigits = Math.max(maxDigits, digitIdCount(users[index]));
    }
    return maxDigits;
}

export function radixSortById(users: UserI[]) {
    const maxIdDigitCount = mostIdDigits(users);
    const newUsers: UserI[] = [];
    for (let k = 0; k < maxIdDigitCount; k += 1) {
        const useresBuckets: UserI[][] = Array.from({ length: 10 }, () => []);
        for (let index = 0; index < users.length; index += 1) {
            const digit = getDigit(users[index], k);
            useresBuckets[digit].push(users[index]);
        }
        users = newUsers.concat(...useresBuckets);
    }
    return users;
}
