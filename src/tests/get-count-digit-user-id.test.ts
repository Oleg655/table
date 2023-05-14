import { UserI } from 'interfaces';
import { digitIdCount } from 'utils';

let startState: UserI;

beforeEach(() => {
    startState = {
        id: 999,
        firstName: 'Kerri',
        lastName: 'Guilfoyle',
        email: 'DShebish@massa.com',
        phone: '(376)074-5909',
        description: 'tortor vitae at massa ipsum at',
        address: {
            city: 'Woonsocket',
            state: 'NV',
            streetAddress: '4858 Ipsum Ave',
            zip: '51201',
        },
    };
});
test('function digitIdCount exists', () => {
    expect(typeof digitIdCount).toEqual('function');
});

test('digitIdCount should return only id`s digit count', () => {
    const endState = digitIdCount(startState);
    expect(endState).toEqual(3);
});

test('digitIdCount return type should be number', () => {
    const endState = digitIdCount(startState);
    expect(typeof endState).toEqual('number');
});
