import { UserI } from 'interfaces';
import { getDigit } from 'utils';

let startState: UserI;

beforeEach(() => {
    startState = {
        id: 78,
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
test('function getDigit exists', () => {
    expect(typeof getDigit).toEqual('function');
});

test('getDigit should return only id index', () => {
    const endState = getDigit(startState, 0);

    expect(typeof endState).toEqual('number');
    expect(endState).toEqual(8);
});

test('getDigit return type should be number', () => {
    const endState = getDigit(startState, 0);
    expect(typeof endState).toEqual('number');
});
