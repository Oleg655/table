import { UserI } from 'interfaces';
import { mostIdDigits } from 'utils';

let startState: UserI[];

beforeEach(() => {
    startState = [
        {
            id: 9,
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
        },
        {
            id: 1000,
            firstName: 'Jackie',
            lastName: 'Reddin',
            email: 'GChandrasekahran@lorem.ly',
            phone: '(989)712-2248',
            description: 'rutrum nec nec tincidunt porttitor dolor',
            address: {
                city: 'Woonsocket',
                state: 'NV',
                streetAddress: '4858 Ipsum Ave',
                zip: '74668',
            },
        },
        {
            id: 723,
            firstName: 'Sunghoon',
            lastName: 'Serraon',
            email: 'CTippit@nec.gov',
            phone: '(989)712-2248',
            description: 'rutrum nec nec ',
            address: {
                city: 'Woonsocket',
                state: 'NV',
                streetAddress: '4858 Ipsum Ave',
                zip: '74668',
            },
        },
    ];
});

test('function mostIdDigits exists', () => {
    expect(typeof mostIdDigits).toEqual('function');
});

test('mostIdDigits should return only most digit user`s id', () => {
    const endState = mostIdDigits(startState);
    expect(endState).toEqual(4);
});

test('mostIdDigits return type should be number', () => {
    const endState = mostIdDigits(startState);
    expect(typeof endState).toEqual('number');
});
