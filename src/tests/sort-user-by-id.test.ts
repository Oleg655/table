import { UserI } from 'interfaces';
import { radixSortById } from 'utils';

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
            id: 23,
            firstName: 'James',
            lastName: 'Kerkemeyer',
            email: 'CCalo@pharetra.net',
            phone: '(989)712-2248',
            description: 'rutrum nec nec tincidunt porttitor dolor',
            address: {
                city: 'Racine',
                state: 'NV',
                streetAddress: '6370 Eros St',
                zip: '58075',
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

test('function radixSortById exists', () => {
    expect(typeof radixSortById).toEqual('function');
});

test('radixSortById should sorted array of users by id', () => {
    const endState = radixSortById(startState);
    expect(endState[0].id).toEqual(9);
    expect(endState[1].id).toEqual(23);
    expect(endState[2].id).toEqual(723);
    expect(endState[3].id).toEqual(1000);
});

test('radixSortById return type should be array', () => {
    const endState = radixSortById(startState);
    expect(Array.isArray(endState)).toBe(true);
});
